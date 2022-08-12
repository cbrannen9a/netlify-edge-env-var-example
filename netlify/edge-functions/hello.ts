import type { Context } from "https://edge.netlify.com";

export default (_: Request, context: Context) => {
  context.log("Hello world");
  return new Response("Hello, World!", {
    headers: { "content-type": "text/html" },
  });
};
