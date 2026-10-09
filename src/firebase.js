import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signInAnonymously,
  signOut,
} from "firebase/auth";
import { initializeFirestore, doc, getDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCeoo6qt8hLP23X648LVOnqP46WzDscqvk",
  authDomain: "stuxia-5b535.firebaseapp.com",
  projectId: "stuxia-5b535",
  storageBucket: "stuxia-5b535.firebasestorage.app",
  messagingSenderId: "801101038904",
  appId: "1:801101038904:web:70d01ab63f631b74acadcd",
};

const app = initializeApp(firebaseConfig);

export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
});
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export { signInWithPopup, signInAnonymously, signOut };

/**
 * Завантаження стану техробіт із Firestore.
 * Документ: config/global  →  поле isMaintenanceMode (boolean)
 *                            →  поле maintenanceEndTime  (string ISO / null)
 *                            →  поле maintenanceMessage  (string / null)
 *
 * @returns {Promise<{isMaintenanceMode: boolean, endTime: string|null, message: string|null}>}
 */
export async function getMaintenanceStatus() {
  try {
    const snap = await getDoc(doc(db, "config", "global"));
    if (!snap.exists()) {
      return { isMaintenanceMode: false, endTime: null, message: null };
    }

    const data = snap.data();
    return {
      isMaintenanceMode: !!data.isMaintenanceMode,
      endTime: data.maintenanceEndTime ?? null,
      message: data.maintenanceMessage ?? null,
    };
  } catch {
    // При помилці доступу або мережі не блокуємо сайт.
    return { isMaintenanceMode: false, endTime: null, message: null };
  }
}
