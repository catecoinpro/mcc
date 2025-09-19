export const onRequestGet = async ({ env }) => {
  const list = await env.BLOG_KV.list();
  const posts = [];

  for (const key of list.keys) {
    const value = await env.BLOG_KV.get(key.name);
    if (value) posts.push(JSON.parse(value));
  }

  posts.sort((a, b) => new Date(b.date) - new Date(a.date));

  return new Response(JSON.stringify(posts), {
    headers: { "Content-Type": "application/json" }
  });
};
