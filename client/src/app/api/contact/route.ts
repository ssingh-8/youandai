// Ensure this route runs on the Node runtime (needed for some SDKs)
export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json();
  const r = await fetch(process.env.CONTACT_API_URL!, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  return new Response(await r.text(), {
    status: r.status,
    headers: { "Content-Type": "application/json" },
  });
}
