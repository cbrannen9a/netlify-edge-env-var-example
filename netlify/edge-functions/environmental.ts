export default () => {
  const value = Deno.env.get("READ_ME");

  return new Response(`READ_ME "${value}".`, {
    headers: { "content-type": "text/html" },
  });
};
