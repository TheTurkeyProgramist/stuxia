// Мінімальний декодер GRIB2 під файли GFS: сітка lat/lon, пакування 5.0, 5.2 і 5.3
// (complex packing + spatial differencing), власний бітмап (поза ним значення = NaN).
// Пропущені значення всередині complex packing не підтримуються — буде явна помилка.

// GRIB2 зберігає від’ємні числа як «знак + модуль», а не доповняльним кодом
const signMagnitude = (buf, offset, bytes) => {
  const raw = buf.readUIntBE(offset, bytes);
  const sign = 2 ** (bytes * 8 - 1);
  return raw >= sign ? -(raw - sign) : raw;
};

const bitReader = (buf) => {
  let pos = 0;
  return {
    read(bits) {
      let value = 0;
      let left = bits;
      while (left > 0) {
        const available = 8 - (pos & 7);
        const take = Math.min(available, left);
        const chunk = (buf[pos >> 3] >> (available - take)) & ((1 << take) - 1);
        value = value * (1 << take) + chunk;
        pos += take;
        left -= take;
      }
      return value;
    },
    align() {
      pos = Math.ceil(pos / 8) * 8;
    },
  };
};

const readSections = (message) => {
  if (message.toString("latin1", 0, 4) !== "GRIB" || message[7] !== 2) {
    throw new Error("Це не GRIB2");
  }
  const sections = {};
  let offset = 16;
  while (offset < message.length - 4) {
    const length = message.readUInt32BE(offset);
    sections[message[offset + 4]] = message.subarray(offset, offset + length);
    offset += length;
  }
  return sections;
};

const unpackComplex = (s5, data, count, template) => {
  const nbits = s5[19];
  if (s5[22] !== 0) throw new Error("Пропущені значення в GRIB2 не підтримуються");
  const groups = s5.readUInt32BE(31);
  const widthRef = s5[35];
  const widthBits = s5[36];
  const lengthRef = s5.readUInt32BE(37);
  const lengthStep = s5[41];
  const lastLength = s5.readUInt32BE(42);
  const lengthBits = s5[46];
  const order = template === 3 ? s5[47] : 0;
  const extraBytes = template === 3 ? s5[48] : 0;

  const first = [];
  let offset = 0;
  let minimum = 0;
  if (order) {
    for (let i = 0; i < order; i += 1) {
      first.push(signMagnitude(data, offset, extraBytes));
      offset += extraBytes;
    }
    minimum = signMagnitude(data, offset, extraBytes);
    offset += extraBytes;
  }

  const reader = bitReader(data.subarray(offset));
  const readList = (bits) => {
    const list = new Array(groups);
    for (let i = 0; i < groups; i += 1) list[i] = reader.read(bits);
    reader.align();
    return list;
  };
  const refs = readList(nbits);
  const widths = readList(widthBits).map((w) => w + widthRef);
  const lengths = readList(lengthBits).map((l) => lengthRef + l * lengthStep);
  lengths[groups - 1] = lastLength;

  const values = new Float64Array(count);
  let n = 0;
  for (let g = 0; g < groups; g += 1) {
    for (let i = 0; i < lengths[g]; i += 1) {
      values[n] = refs[g] + (widths[g] ? reader.read(widths[g]) : 0);
      n += 1;
    }
  }
  if (n !== count) throw new Error(`GRIB2: очікували ${count} значень, отримали ${n}`);

  if (order) {
    for (let i = 0; i < order; i += 1) values[i] = first[i];
    for (let i = order; i < count; i += 1) {
      values[i] += minimum;
      values[i] += order === 1 ? values[i - 1] : 2 * values[i - 1] - values[i - 2];
    }
  }
  return values;
};

export const decodeGrib2 = (message) => {
  const sections = readSections(message);
  const { 3: s3, 5: s5, 6: s6, 7: s7 } = sections;
  if (s6[5] !== 255 && s6[5] !== 0) throw new Error("Такий бітмап GRIB2 не підтримується");

  const width = s3.readUInt32BE(30);
  const height = s3.readUInt32BE(34);
  const count = s5.readUInt32BE(5);
  const template = s5.readUInt16BE(9);
  const reference = s5.readFloatBE(11);
  const binary = 2 ** signMagnitude(s5, 15, 2);
  const decimal = 10 ** signMagnitude(s5, 17, 2);
  const data = s7.subarray(5);

  let packed;
  if (template === 0) {
    const nbits = s5[19];
    const reader = bitReader(data);
    packed = new Float64Array(count);
    for (let i = 0; i < count; i += 1) packed[i] = nbits ? reader.read(nbits) : 0;
  } else if (template === 2 || template === 3) {
    packed = unpackComplex(s5, data, count, template);
  } else {
    throw new Error(`Пакування GRIB2 5.${template} не підтримується`);
  }

  // З бітмапом запаковано лише `count` присутніх точок — розкладаємо їх по сітці
  const bitmap = s6[5] === 0 ? s6.subarray(6) : null;
  const values = new Float32Array(width * height);
  let next = 0;
  for (let i = 0; i < values.length; i += 1) {
    if (bitmap && !((bitmap[i >> 3] >> (7 - (i & 7))) & 1)) {
      values[i] = NaN;
      continue;
    }
    values[i] = (reference + packed[next] * binary) / decimal;
    next += 1;
  }
  return { width, height, values };
};
