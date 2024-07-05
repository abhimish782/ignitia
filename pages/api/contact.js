// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.status(405).send({ error: true, message: "Only POST requests allowed" });
    return;
  }
  const body = req.body;
  body.user_ip = req.headers['x-forwarded-for'];
  await fetch("https://api.mrayush.me/ignitia/contact", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body)
  });
  res.status(200).send({ error: false, message: "Success" });
}