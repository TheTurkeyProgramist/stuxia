import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signOut,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { initializeFirestore } from "firebase/firestore";

import { firebaseConfig } from "./firebaseConfig.js";

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signInAnonymously, signOut };

/**
 * Гарантує Firebase-сесію для «локального» акаунта (пошта + пароль).
 * Спочатку пробує увійти, якщо акаунта ще немає — створює його.
 * Ніколи не кидає помилку: локальний вхід має працювати і без Firebase.
 *
 * @returns {Promise<import("firebase/auth").User|null>}
 */
export async function ensureEmailPasswordAuth(
  email,
  password,
  { createIfMissing = true } = {},
) {
  if (!email || !password) return null;
  try {
    const cred = await signInWithEmailAndPassword(auth, email, password);
    return cred.user;
  } catch (err) {
    const missing =
      err.code === "auth/user-not-found" ||
      err.code === "auth/invalid-credential";
    if (!missing) {
      console.warn("Firebase вхід не вдався:", err.code);
      return null;
    }
  }
  if (!createIfMissing) return null;
  try {
    const cred = await createUserWithEmailAndPassword(auth, email, password);
    return cred.user;
  } catch (err) {
    // email-already-in-use тут означає, що пароль у Firebase інший.
    console.warn("Firebase реєстрація не вдалася:", err.code);
    return null;
  }
}

