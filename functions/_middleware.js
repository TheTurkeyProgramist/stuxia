// Cloudflare Pages: проміжний обробник для всіх функцій.
//
// На невідому адресу Pages віддає головну сторінку (SPA) з кодом 200. Для файлів-маніфестів,
// які шукають ШІ-агенти, це погано: Lighthouse («Агентний вебперегляд») і агенти отримують
// HTML замість JSON і вважають маніфест зламаним. Таких маніфестів у Стихії немає — тож
// чесно відповідаємо 404.
//
// Запускається лише для адрес із public/_routes.json (/api/* і ці маніфести), а не на кожен
// файл сайту. Додаєш сюди адресу — додай її і в _routes.json.

const NOT_PUBLISHED = new Set([
  // Agentic Resource Discovery (ARD): старий шлях і новий
  "/.well-known/ai-catalog.json",
  "/.well-known/ard.json",
]);

export const onRequest = (context) => {
  const { pathname } = new URL(context.request.url);
  if (NOT_PUBLISHED.has(pathname)) {
    return new Response("Not found\n", {
      status: 404,
      headers: {
        "Content-Type": "text/plain; charset=utf-8",
        "Cache-Control": "public, max-age=86400",
      },
    });
  }
  return context.next();
};
