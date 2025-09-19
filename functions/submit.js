export const onRequestPost = async ({ request, env }) => {
  const formData = await request.json();
  const id = Date.now().toString();

  const post = {
    title: formData.title,
    content: formData.content,
    image: formData.image || null,
    youtube: formData.youtube || null,
    date: new Date().toLocaleString()
  };

  await env.BLOG_KV.put(id, JSON.stringify(post));
  return new Response("OK", { status: 200 });
};
