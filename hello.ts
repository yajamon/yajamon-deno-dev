addEventListener("fetch", (event) => {
  const content = "Hello World! Hello Deno!";
  const response = new Response(content, {
    headers: { "content-type": "text/plain" },
  });
  event.respondWith(response);
});
