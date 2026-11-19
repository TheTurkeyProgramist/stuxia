import i18n from "../i18n/i18n.js";
export const getWindDirectionText = (degrees) => {
  if (degrees === undefined || degrees === null) return "—";
  const val = Math.floor(degrees / 45 + 0.5);
  const arr = [
    i18n.t("ui.windUtils.pivnichnyi"),
    i18n.t("ui.windUtils.pivnichnoSkhidnyi"),
    i18n.t("ui.windUtils.skhidnyi"),
    i18n.t("ui.windUtils.pivdennoSkhidnyi"),
    i18n.t("ui.windUtils.pivdennyi"),
    i18n.t("ui.windUtils.pivdennoZakhidnyi"),
    i18n.t("ui.windUtils.zakhidnyi"),
    i18n.t("ui.windUtils.pivnichnoZakhidnyi"),
  ];
  return arr[val % 8];
};

// Короткий напрям вітру для тісних плиток: «Пд-Сх» замість «Південно-східний»
export const getWindDirectionShort = (degrees) => {
  if (degrees === undefined || degrees === null) return "—";
  const val = Math.floor(degrees / 45 + 0.5);
  const arr = [i18n.t("ui.windUtils.pn"), i18n.t("ui.windUtils.pnSkh"), i18n.t("ui.windUtils.skh"), i18n.t("ui.windUtils.pdSkh"), i18n.t("ui.windUtils.pd"), i18n.t("ui.windUtils.pdZkh"), i18n.t("ui.windUtils.zkh"), i18n.t("ui.windUtils.pnZkh")];
  return arr[val % 8];
};
