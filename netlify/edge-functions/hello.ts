export default () =>
  new Response("Hello, World!", {
    headers: { "content-type": "text/html" },
  });
