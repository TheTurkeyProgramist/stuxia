// Локальна перевірка пароля без зберігання самого пароля.
// PBKDF2-SHA256 з випадковою сіллю; у localforage потрапляють лише сіль і хеш.

const ITERATIONS = 150000;
const toHex = (buf) =>
  Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, "0")).join(
    "",
  );
const fromHex = (hex) =>
  new Uint8Array(hex.match(/../g).map((byte) => parseInt(byte, 16)));

const derive = async (password, salt) => {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    "PBKDF2",
    false,
    ["deriveBits"],
  );
  const bits = await crypto.subtle.deriveBits(
    { name: "PBKDF2", hash: "SHA-256", salt, iterations: ITERATIONS },
    key,
    256,
  );
  return toHex(bits);
};

// crypto.subtle є лише в безпечному контексті (HTTPS, localhost, Capacitor).
// На http://<IP у локальній мережі> його немає — тоді локальний хеш не
// створюється, а вхід іде через Firebase.
export const canHash = () => Boolean(globalThis.crypto?.subtle);

export const hashPassword = async (password) => {
  if (!canHash()) return {};
  const salt = crypto.getRandomValues(new Uint8Array(16));
  return { passwordSalt: toHex(salt), passwordHash: await derive(password, salt) };
};

export const verifyPassword = async (password, { passwordSalt, passwordHash }) => {
  if (!passwordSalt || !passwordHash || !canHash()) return false;
  return (await derive(password, fromHex(passwordSalt))) === passwordHash;
};

// Прибирає з об'єкта користувача все, що стосується пароля.
export const stripSecrets = (user) => {
  if (!user) return user;
  // eslint-disable-next-line no-unused-vars
  const { password, passwordHash, passwordSalt, ...safe } = user;
  return safe;
};
