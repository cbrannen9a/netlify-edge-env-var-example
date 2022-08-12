export default () => {
  console.log("Hello world");
  return new Response("Hello, World!", {
    headers: { "content-type": "text/html" },
  });
};
