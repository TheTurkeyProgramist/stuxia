// Міст до Android-віджета (Capacitor): передаємо головне місто, а віджет сам тягне прогноз.
// Нативний плагін WidgetBridgePlugin зареєстрований у android/.../MainActivity.java; у браузері
// window.Capacitor немає, тож виклик нічого не робить. Залежностей не потрібно.
let lastKey = "";

export const syncAndroidWidget = ({ lat, lon, name, unit }) => {
  try {
    const cap = typeof window !== "undefined" ? window.Capacitor : null;
    if (!cap?.isNativePlatform?.() || !Number.isFinite(lat) || !Number.isFinite(lon)) return;
    const payload = { lat, lon, name: name || "", unit: unit || "C" };
    const key = JSON.stringify(payload);
    if (key === lastKey) return;
    lastKey = key;
    cap.Plugins?.WidgetBridge?.setLocation(payload)?.catch?.(() => {
      lastKey = ""; // не вийшло — спробуємо знову при наступній зміні
    });
  } catch {
    /* віджет — необов'язковий, не ламаємо картку */
  }
};
