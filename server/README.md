# Optional standalone contact API

The Vercel website uses its own same-origin API and does not require this server. This package supports separately hosted deployments.

From this directory: `npm install`, create `.env` using the settings described in the [root README](../README.md), then `npm run dev` or `npm run build && npm start`.

Routes: `GET /health`, `POST /contact`. POST accepts `name`, `email`, optional `company`, optional `service`, and `goals` (10–5000 characters). Valid services are AI consulting, Software services, AI search & AEO, Project partnership, and Not sure yet. A populated honeypot `website` field is rejected. Inquiry JSON must fit within 16 KiB.

Set `RESEND_API_KEY`, `RESEND_FROM`, and `RESEND_TO` to enable delivery. Optional Supabase archiving uses `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`. Set `ALLOWED_ORIGINS` to a comma-separated list of approved origins; it defaults to localhost:3000. `PORT` defaults to 8787.

No-config and delivery failures do not return success. Run the root `npm test` suite to check both independently deployed handlers together.
