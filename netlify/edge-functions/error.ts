export default () => {
  try {
    return new Response(`READ_ME "${value}".`, {
      headers: { "content-type": "text/html" },
    });
  } catch (error) {
    console.error("Something's gone wrong", error);
  }
};
