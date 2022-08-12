export default () => {
  const value = Deno.env.get("READ_ME");
  console.log("environmental");
  return new Response(`READ_ME "${value}".`, {
    headers: { "content-type": "text/html" },
  });
};
