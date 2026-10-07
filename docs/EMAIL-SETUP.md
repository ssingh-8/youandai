# Custom-domain email with no additional forwarding fee

Use `hello@youandai.dev` as a public role address and route it to the operator's existing inbox. This creates a receiving alias, not a separate mailbox or an outbound sending account. Domain renewal still costs whatever your registrar charges.

1. Use Cloudflare's free DNS plan for the domain. If changing nameservers, first preserve all existing Vercel A/CNAME records, verification TXT records, and any existing mail records. Website hosting stays on Vercel. Coordinate any existing MX service before replacing its records.
2. In Cloudflare, open **Compute → Email Service → Email Routing**, onboard the domain, and review the MX/SPF/DKIM records the setup adds.
3. Add the operator's current email as a destination and confirm the verification email. This destination should stay private.
4. Create a routing rule for `hello@youandai.dev` → that verified destination. Optional later aliases: `projects@youandai.dev`, `billing@youandai.dev`.
5. Send a test from a different account and confirm delivery and spam-folder behavior.
6. Only then set `email` in `client/src/content/business.json` to the tested alias. A web-domain redirect does not forward email from `youandi.dev`; configure it separately only if needed.

Cloudflare Email Routing is free, but ordinary replies from the destination mailbox use that mailbox's address. If it contains a founder's name, replying that way reveals it. For now, a dedicated free Gmail/Outlook account with the company name as sender is a practical destination, but replies will show its gmail.com/outlook.com address. Sending as `hello@youandai.dev` requires a separate supported outbound setup; forwarding alone does not provide it. Cloudflare's general outbound service currently requires a paid Workers plan.

If you later discover you already have iCloud+ through a personal or family subscription, custom-domain sending and receiving is included. Otherwise that option is an additional paid subscription, not free.

The website's contact form is separate: configure a verified Resend sender and set `RESEND_TO` to the new company email after forwarding is active, then test a real submission. Set `business.json.email` to that same public address. Cloudflare forwarding does not automatically configure Resend. Keep those keys out of the repository and browser bundle.

Sources checked 2026-10-06: [Cloudflare setup](https://developers.cloudflare.com/email-service/get-started/route-emails/), [pricing](https://developers.cloudflare.com/email-service/platform/pricing/), [reply behavior](https://developers.cloudflare.com/email-service/reference/postmaster/), [Apple custom domains](https://support.apple.com/en-us/102540).
