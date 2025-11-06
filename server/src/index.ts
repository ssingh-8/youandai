import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { z } from 'zod';
import { Resend } from 'resend';
import { createClient } from '@supabase/supabase-js';

export const app = new Hono();

// Allow calls from your Next app locally
app.use('*', cors({ origin: ['http://localhost:3000'], allowMethods: ['POST','GET','OPTIONS'] }));

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  goals: z.string().min(5),
});

const resend  = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;
const from    = process.env.RESEND_FROM;
const to      = process.env.RESEND_TO;
const supa    = (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
  ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null;

app.get('/health', (c) => c.json({ ok: true, time: new Date().toISOString() }));

app.post('/contact', async (c) => {
  const body = await c.req.json().catch(() => null);
  const parsed = schema.safeParse(body);
  console.log('parsed', parsed);
  if (!parsed.success) return c.json({ ok:false, error: parsed.error.flatten() }, 400);

  const d = parsed.data;
  const text = `New contact request
Name: ${d.name}
Email: ${d.email}
Company: ${d.company}
Goals: ${d.goals}`;

  const tasks: Promise<any>[] = [];

  if (resend && from && to) {
    tasks.push(resend.emails.send({
      from, to: [to], subject: `New contact from ${d.name}`, text, replyTo: d.email,
    }));
  }

  if (supa) {
    supa.from('contact_messages').insert({
      name: d.name, email: d.email, company: d.company, goals: d.goals, created_at: new Date().toISOString(),
    }).then();
  }

  // if (process.env.SLACK_WEBHOOK_URL) {
  //   tasks.push(fetch(process.env.SLACK_WEBHOOK_URL, {
  //     method:'POST', headers:{'Content-Type':'application/json'},
  //     body: JSON.stringify({ text: `💌 New contact from *${d.name}* (${d.email}) at ${d.company}\n\n${d.goals}` }),
  //   }));
  // }

  await Promise.allSettled(tasks);
  return c.json({ ok: true });
});

export default app;
