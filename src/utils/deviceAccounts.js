// Не більше MAX_DEVICE_ACCOUNTS різних акаунтів на одному пристрої. Перевірка лише в браузері:
// очищення даних сайту чи «Скинути сайт» обнуляє список.
import localforage from "localforage";
import { MAX_DEVICE_ACCOUNTS } from "./ownLimits";

const KEY = "device_accounts"; // uid акаунтів, у які входили на цьому пристрої

export const getDeviceAccounts = async () => {
  const list = await localforage.getItem(KEY).catch(() => null);
  return Array.isArray(list) ? list : [];
};

/** Запам'ятовує акаунт. false — це новий акаунт, а місця вже немає. */
export const rememberDeviceAccount = async (uid) => {
  if (!uid) return true;
  const list = await getDeviceAccounts();
  if (list.includes(uid)) return true;
  if (list.length >= MAX_DEVICE_ACCOUNTS) return false;
  await localforage.setItem(KEY, [...list, uid]).catch(() => {});
  return true;
};
