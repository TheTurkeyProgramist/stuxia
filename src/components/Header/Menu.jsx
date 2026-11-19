import i18n from "../../i18n/i18n.js";

export const DEFAULT_SITE_SECTIONS = [
  { key: "hero", get label() { return i18n.t("ui.Menu.holovna"); }, path: "hero" },
  { key: "weather", get label() { return i18n.t("ui.Menu.pohoda"); }, path: "weather" },
  { key: "map", get label() { return i18n.t("ui.Menu.klimatychnaMapa"); }, path: "map" },
];
