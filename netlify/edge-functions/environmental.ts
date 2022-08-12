import type { Context } from "https://edge.netlify.com";

export default (_: Request, context: Context) => {
  const value = Deno.env.get("READ_ME");
  context.log("environmental");
  return new Response(`READ_ME "${value}".`, {
    headers: { "content-type": "text/html" },
  });
};
