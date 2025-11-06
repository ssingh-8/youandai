import { Hono } from 'hono'
import { handle } from 'hono/vercel'
import { z } from 'zod'
import { Resend } from 'resend'
import { createClient } from '@supabase/supabase-js'

export const runtime = 'nodejs'

const app = new Hono().basePath('/api')

// Validation schema
const contactSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  company: z.string().min(2),
  goals: z.string().min(5),
})

// Initialize services
const resend = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null
const from = process.env.RESEND_FROM
const to = process.env.RESEND_TO
const supa = (process.env.NEXT_PUBLIC_SUPABASE_URL && process.env.SUPABASE_SERVICE_ROLE_KEY)
  ? createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY)
  : null

// Health check endpoint
app.get('/health', (c) => {
  return c.json({ ok: true, time: new Date().toISOString() })
})

// Contact form submission endpoint
app.post('/contact', async (c) => {
  try {
    const body = await c.req.json().catch(() => null)
    const parsed = contactSchema.safeParse(body)
    
    console.log('Contact form submission:', parsed)
    
    if (!parsed.success) {
      return c.json({ ok: false, error: parsed.error.flatten() }, 400)
    }

    const d = parsed.data
    const text = `New contact request
Name: ${d.name}
Email: ${d.email}
Company: ${d.company}
Goals: ${d.goals}`

    const tasks: Promise<any>[] = []

    // Send email via Resend
    if (resend && from && to) {
      tasks.push(
        resend.emails.send({
          from,
          to: [to],
          subject: `New contact from ${d.name}`,
          text,
          replyTo: d.email,
        })
      )
    }

    // Save to Supabase
    if (supa) {
      tasks.push(
        supa.from('contact_messages').insert({
          name: d.name,
          email: d.email,
          company: d.company,
          goals: d.goals,
          created_at: new Date().toISOString(),
        })
      )
    }

    // Execute all tasks in parallel
    await Promise.allSettled(tasks)
    
    return c.json({ ok: true })
  } catch (error) {
    console.error('Contact form error:', error)
    return c.json({ ok: false, error: 'Internal server error' }, 500)
  }
})

// Export handlers for all HTTP methods
export const GET = handle(app)
export const POST = handle(app)
export const PUT = handle(app)
export const PATCH = handle(app)
export const DELETE = handle(app)
export const OPTIONS = handle(app)

