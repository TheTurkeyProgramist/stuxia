// Initialize i18n BEFORE rendering (must be first import)
import "./i18n/i18n.js";
import "./i18n/i18n.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import App from "./App.jsx";
import { Toaster } from "react-hot-toast";

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

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <HashRouter>
      <App />
      <Toaster position="bottom-right" reverseOrder={false} />
    </HashRouter>
  </Provider>,
);