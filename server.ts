addEventListener("fetch", (event) => {
  const html = `<html>
  <title>Hello freks deno world</title>
  <meta charset="utf-8"/>
  <p>Check my <a href="http://freks.jp">website</a>.</p>
  </html>`;
  const response = new Response(html, {
    headers: { "content-type": "text/html; charset=UTF-8" },
  });
  event.respondWith(response);
});
