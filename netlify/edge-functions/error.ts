import type { Context } from "https://edge.netlify.com";

export default (_: Request, context: Context) => {
  try {
    return new Response(`READ_ME "${value}".`, {
      headers: { "content-type": "text/html" },
    });
  } catch (error) {
    context.log("Something's gone wrong", error);
  }
};
