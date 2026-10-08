# You & AI

An umbrella website for AI consulting, software services, answer engine optimization (AEO), and independent projects. Next.js provides the frontend and the same-origin contact API on Vercel. A standalone Hono server is retained for optional separate hosting.

## Content and launch information

- `client/src/content/business.json`: public brand, canonical domain, optional contact/booking/legal links, anonymous role titles, founder background, and projects.
- `client/src/content/services.ts`: the three service lines.
- `client/src/content/skills.ts`: public skill summaries.
- `client/src/content/aeo.ts`: six practical website optimization examples.
- [Site critique and complete placeholder inventory](docs/SITE-AUDIT.md)
- [Owner details to fill in](docs/BUSINESS-DETAILS.md)
- [Free email forwarding setup](docs/EMAIL-SETUP.md)
- [SEO/AEO setup and measurement](docs/SEARCH-SETUP.md)

Blank optional details remain hidden. Keep secrets and personal inbox addresses out of public content. Add only approved public projects to the `projects` array using `name`, `description`, `category`, `url`, and `status` (`Live`, `In development`, or `Experiment`). DentalAI is listed as an in-house product in development, without an unconfirmed launch URL. Founder career experience is separate from company client results; the company is welcoming its first customers.

## Development

Use Node.js 22.13+.

```bash
npm run install:all
npm run dev:client
```

Frontend: http://localhost:3000. The standalone server is optional; `npm run dev:server` runs it on port 8787 after creating `server/.env`.

```bash
npm run lint --prefix client
npm run typecheck --prefix client
npm run build
npm test
```

Tests exercise both contact handlers without sending real email. The two handlers live in client and server packages so each deployment can install independently; keep their behavior aligned.

## Vercel

Use the existing project with **Root Directory: client** and the Next.js framework preset. Configure runtime variables there, not only in a local `server/.env`:

- `RESEND_API_KEY`: server-side Resend credential.
- `RESEND_FROM`: verified sender on your domain.
- `RESEND_TO`: the new company email once created and tested, forwarding to the operator’s inbox.
- Optional archival: `NEXT_PUBLIC_SUPABASE_URL` and `SUPABASE_SERVICE_ROLE_KEY`.

The contact form is unavailable until all three Resend variables exist. The API returns 503 when unconfigured, 400 for invalid input, 413 for oversized bodies, and 502 when the email provider rejects or fails. Success means the provider accepted the email, not guaranteed final inbox delivery. Optional Supabase archival failures are logged without including inquiry contents and do not ask the visitor to resubmit an already accepted email.

Supabase's existing `contact_messages` columns are `name`, `email`, `company`, `goals`, and `created_at`; the selected service is included in `goals` to avoid a schema migration. No live chat or public shared broadcast channel is loaded.

Confirm public email delivery, intended privacy/terms content, project details, and business naming before promoting a preview to production. The app includes body limits and a basic honeypot; production abuse controls should be configured for the actual deployment if the public form receives spam.

## Routes

`/`, `/services`, `/services/ai-consulting`, `/services/software-development`, `/services/aeo`, `/projects`, `/projects/dentalai`, `/guides`, three `/guides/[slug]` articles, `/about`, `/contact`, `/robots.txt`, `/sitemap.xml`, and `/opengraph-image`. The former `/case-studies` route redirects permanently to `/projects`. Every primary page has its own metadata and canonical URL. The convenience hosts `youandi.dev` and `www.youandi.dev` redirect permanently to the same path on `www.youandai.dev`. Update `websiteUrl` and the redirect destination together if the primary hostname changes.

Service detail pages are defined in `client/src/content/service-details.ts`; guides are defined in `client/src/content/guides.ts`. Both generate static routes, metadata, and sitemap entries. Keep the links in `services.ts` aligned when changing a service slug. The original `/services#...` section links still work.

`client/src/content/search-verification.json` contains public Google and Bing proof-of-ownership tags obtained from the owner's signed-in webmaster tools. These are not API credentials. Optional `GOOGLE_SITE_VERIFICATION` and `BING_SITE_VERIFICATION` build-time variables override them. Verification must still be completed in the corresponding account after deployment; do not remove the tags afterward.

The site does not form an LLC, create bank/accounts infrastructure, or claim legal status on the owner's behalf.
