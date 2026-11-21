// Статичний фон Hero з index.html (#boot-bg). Він показується ще до запуску JS і на телефоні
// є найбільшим елементом (LCP). Прибираємо його, лише коли фон Hero вже намальований
// (два кадри після декодування), інакше на мить проступав би темний фон.
// Видалений елемент лишається в LCP — бал від цього не падає.
let removed = false;

export const removeBootBg = () => {
  if (removed || typeof document === "undefined") return;
  removed = true;
  const el = document.getElementById("boot-bg");
  if (!el) return;
  requestAnimationFrame(() => requestAnimationFrame(() => el.remove()));
};
