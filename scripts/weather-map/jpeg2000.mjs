// JPEG2000 для GRIB2 5.40 (усі файли CFS): OpenJPEG зі збірки cornerstone, лише для скриптів збірки.
import OpenJpeg from "@cornerstonejs/codec-openjpeg/decode";

// Без службових повідомлень декодера в журналі збірки
const openjpeg = await OpenJpeg({ print: () => {}, printErr: () => {} });

/** Кодовий потік J2K з одним компонентом → масив цілих значень. */
export const decodeJpeg2000 = (bytes, count) => {
  const decoder = new openjpeg.J2KDecoder();
  try {
    decoder.getEncodedBuffer(bytes.length).set(bytes);
    decoder.decode();
    const { bitsPerSample, isSigned } = decoder.getFrameInfo();
    const raw = decoder.getDecodedBuffer();
    const size = raw.length / count;
    if (!Number.isInteger(size) || size < 1 || size > 2) {
      throw new Error(`JPEG2000: ${bitsPerSample} біт на значення не підтримується`);
    }
    // Копіюємо до delete(): буфер лежить у памʼяті декодера
    const out = new Float64Array(count);
    for (let i = 0; i < count; i += 1) {
      const value = size === 1 ? raw[i] : raw[i * 2] | (raw[i * 2 + 1] << 8);
      out[i] = isSigned && value >= 2 ** (size * 8 - 1) ? value - 2 ** (size * 8) : value;
    }
    return out;
  } finally {
    decoder.delete();
  }
};
