// Initialize i18n BEFORE rendering (must be first import; prefs are hydrated in index.jsx)
import i18n from "./i18n/i18n.js";
import "./i18n/i18n.css";
import "./media/fonts/stykhiia/stykhiia-fonts.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

// Глобальна зупинка всіх відео при зміні вкладки/згортанні
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    document.querySelectorAll("video").forEach((video) => {
      if (!video.paused) {
        video.pause();
      }
    });
  }
});

window.addEventListener("error", (e) => {
  if (e.message.includes("AbortError") || e.message.includes("aborted")) {
    e.preventDefault();
    return false;
  }
});

window.addEventListener("unhandledrejection", (e) => {
  if (
    e.reason?.name === "AbortError" ||
    e.reason?.message?.includes("aborted")
  ) {
    e.preventDefault();
    return false;
  }
});

// Стихію не показуємо у фреймі (інакше її можна вкласти саму в себе на кілька рівнів).
// Основний захист — заголовки хостингу; це запасний варіант для GitHub Pages / cPanel,
// де заголовки не задати. У розробці не заважаємо: VS Code показує прев'ю саме у фреймі
const isFramed = window.self !== window.top && !import.meta.env.DEV;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  isFramed ? (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, padding: 16, textAlign: "center", fontFamily: "system-ui, sans-serif", background: "#0b1426", color: "#fff" }}>
      <p style={{ margin: 0 }}>{i18n.t("frameGuard.text")}</p>
      <a href={window.location.href} target="_blank" rel="noopener noreferrer" style={{ color: "#f5a524", fontWeight: 700 }}>
        {i18n.t("frameGuard.open")}
      </a>
    </div>
  ) : (
    <Provider store={store}>
      <App />
      <Toaster position="bottom-right" reverseOrder={false} />
    </Provider>
  ),
);