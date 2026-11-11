// Фірмові шрифти Стихії (оголошено в media/fonts/stykhiia/stykhiia-fonts.css).
// Назва зберігається в user.fontFamily — тоді шрифт береться локально, а не з Google Fonts.
// ?url — у збірку йде лише посилання; .ttf завантажується тільки після кліку «Викачати».
import textTtfUrl from "../media/fonts/stykhiia/StykhiiaText.ttf?url";
import decorTtfUrl from "../media/fonts/stykhiia/StykhiiaDecor.ttf?url";

export const STYKHIIA_FONTS = [
  {
    id: "Stykhiia Text",
    label: "Текст",
    stack: `"Stykhiia Text", system-ui, sans-serif`,
    ttfUrl: textTtfUrl,
    fileName: "StykhiiaText.ttf",
  },
  // Декор не має всіх знаків пунктуації/символів — решту підхоплює Текст
  {
    id: "Stykhiia Decor",
    label: "Декор",
    stack: `"Stykhiia Decor", "Stykhiia Text", system-ui, sans-serif`,
    ttfUrl: decorTtfUrl,
    fileName: "StykhiiaDecor.ttf",
  },
];

export const getStykhiiaFont = (name) => STYKHIIA_FONTS.find((f) => f.id === name) || null;
