# Site review and placeholder inventory

Reviewed 2026-10-06 against main commit b145790 and the public Vercel site. Updated for the request to use youandai.dev, keep founders anonymous, and position the business as an umbrella for services and projects. This is a content and code review, not a trademark clearance or verification of production environment variables.

## Critique

1. **Positioning was too narrow.** The hero, services, about page, process, metadata, and CTAs repeatedly focused on GPU inference. A visitor looking for software development or AEO would not know those services existed. The draft has three equally visible service lines and a separate Projects section.
2. **Credibility was asserted rather than demonstrated.** The “case studies” route contained capability descriptions, no actual cases. Scale and performance claims lacked supporting examples. The draft attributes user scale and model deployment to the founders’ prior careers, removes unconfirmed performance promises, redirects the old route to Projects, and adds anonymous founder experience and evidence-informed skills.
3. **The contact journey could lose leads.** Both APIs returned success with no services configured or after delivery errors. The standalone database insert was not awaited. The draft requires confirmed email-provider acceptance, handles returned errors and exceptions, awaits optional archiving, preserves failed form input, and disables duplicate submits.
4. **Chat was misleading and unsuitable for private inquiries.** It was a Supabase broadcast room shared by every visitor, with the same “Prospect” username, no model integration or operator backend, and a hardcoded online/two-minute claim. It could expose messages between visitors if the channel is enabled. Removed from the draft.
5. **Navigation and discovery needed work.** “Book” opened an inquiry form, legal links went nowhere, pages shared generic metadata, and there was no sitemap or robots route. CTAs now describe an inquiry, real booking links are optional, and pages have distinct descriptions and canonical URLs.
6. **Ownership and identity were vague.** The site described an unnamed technical founder and “engineers” without business operations. The draft represents operations/client partnerships separately from technical delivery, keeps personal names out, and makes no claim that an LLC has formed.

## All business placeholders and unverified claims found

Locations below refer to the original main commit; some files were replaced or removed.

| Existing text/value | Original location | Classification | Draft treatment / information needed |
|---|---|---|---|
| `hello@youandai.co` | `site-footer.tsx`, error message in `contact-form.tsx` | Unconfirmed contact address, inconsistent with the confirmed .dev domain | Removed; choose and test a real mailbox/alias before filling `business.json.email`. |
| Privacy → `#` | `site-footer.tsx` | Dead placeholder link | Hidden until a real notice URL is provided. |
| Terms → `#` | `site-footer.tsx` | Dead placeholder link | Hidden until actual terms are provided. |
| “Book a Strategy Call” | Header, hero, services, case studies, CTA, contact form | Misleading action: no calendar booking | Changed to conversation/inquiry language; optional real booking URL supported. |
| “Online • respond in under 2 minutes” | `live-chat.tsx` | Unsupported availability/response promise | Removed with chat; provide realistic inquiry response time if wanted. |
| “You & AI Assistant” / “Chat with an AI consultant” | `live-chat.tsx` | Unsupported assistant/operator capability | Removed; existing implementation was only peer broadcast. |
| `roomName="you-and-ai"`, `username="Prospect"`, generic preset questions | `live-chat.tsx`, realtime chat | Shared demo identity/configuration | Removed. Not customer-isolated or an authenticated support system. |
| “founded by engineers,” “seasoned machine-learning and systems engineer,” unnamed “Founder / Technical Leadership” | `about-page.tsx` | Generic biography; no verifiable individual identity | Replaced by anonymous founder background authorized by owner and role-based operations/technical sections. No names requested or published. |
| “used by millions of users globally” | `about-page.tsx` | Unsubstantiated scale claim | Owner clarified attribution to founders’ prior careers. Current copy says technology serving millions of users and large-scale model deployment; no company client outcomes claimed. |
| “thousands of deployed models” | `about-page.tsx` | Unsubstantiated scale claim | Current copy uses “large-scale model deployment” within founder background without an unconfirmed numerical model count. |
| “Sub-100ms” goals/pipelines | `value-proposition.tsx`, `case-studies.tsx` | Workload-dependent performance claim | Removed; no numerical promise without reproducible context. |
| “zero-downtime operations/deployment” | Value proposition and services | Unsupported absolute reliability claim | Removed; support and reliability framed as scoped work. |
| “Proven expertise,” “Deep experience” without cases | `case-studies.tsx` | Missing evidence rather than a literal dummy string | Replaced with an honest Projects page; no invented customers, testimonials, or results. |
| Safety-critical / automotive-grade / regulated systems, demanding industry latency, team leadership, on-prem/multi-cloud GPU clusters | Hero, About, services, expertise | May be real experience; repository alone does not establish public attribution or scope | Broader project-supported skills published; no private employer product details or inferred certifications. |
| Quantization, ONNX/TensorRT, custom kernels, pruning, distributed training, fine-tuning, MLOps | Various service/expertise lists | Specific capabilities need owner confirmation; not automatically false | General GPU inference/evaluation capability retained; unverified specialist breadth not presented as established results. |
| “Strategic AI Consultancy” and GPU-only descriptions | Header, footer, layout metadata, all pages | Superseded positioning | Replaced with AI consulting, software services, AEO, and independent projects. |

## Configuration and documentation examples (not public company facts)

| Value | Original location | What it needs |
|---|---|---|
| `your_resend_api_key` | Root/server README | Real server-side secret in Vercel; never put it in Git or chat. |
| `onboarding@resend.dev` | Root/server README | Testing sender; use a Resend-verified sender for launch. |
| `your_email@example.com` | Root/server README | Actual inquiry recipient, normally the operator's inbox. |
| `your_supabase_url`, `your_supabase_anon_key`, `your_service_role_key` | Root/server README | Optional archival configuration. Anonymous key no longer needed for chat. Keep service-role secret server-side. |
| `https://yourdomain.com` | Root/server CORS examples | Actual origin if separately hosting the legacy API. Vercel uses same-origin `/api/contact`. |
| `NEXT_PUBLIC_API_URL=http://localhost:8787` | Root README | Obsolete for the current frontend; it already called `/api/contact`. Removed from instructions. |
| `John Doe`, `john@example.com`, `Acme Corp`, example inquiry, `2025-10-30T12:00:00.000Z` | API README samples | Documentation-only samples, not founders/customers/company facts. Replaced by concise API contract. |
| “Blog & Case Studies,” testimonials in feature list | Root README | Claimed features/content not present. Rewritten to describe actual routes. |
| `youandaiserver.git` standalone clone instructions | Server README | Separate repo exists, but wrong setup path for this monorepo. Corrected. |
| create-next-app / Geist boilerplate | Client README | Generic template, including an unused font claim. Rewritten. |
| `ai-consulting`, empty server description/author/keywords, ISC text without a LICENSE file | Package metadata / README | Internal scaffold metadata. Client name and descriptions updated; no license authorization inferred from boilerplate. |
| `Your name`, `you@company.com`, `Company name`, goal hints, `Type a message...` | Form/chat fields | Normal input hints, not fake company information. New form uses labels and neutral instructions; chat removed. |
| `localhost`, port 8787, placeholder Next config comment, tsconfig instructional comments | Development files | Development defaults/scaffolding, not production contact details. |

No fabricated phone number, street address, social profile, priced package, named customer, or named testimonial was found in the shipped pages. No real project catalog, privacy policy, terms, legal entity name, public response SLA, or booking URL was present.

## Remaining owner inputs

Fill [BUSINESS-DETAILS.md](BUSINESS-DETAILS.md). Public content is centralized in `client/src/content/business.json`; blank optional details stay hidden. DentalAI is now listed as an in-house product in development, as requested. Its public URL remains blank until confirmed. Technical skills draw on reviewed project functionality without claiming ownership of third-party forks or publishing private work.

## Naming and AEO sources

A preliminary web search found [You & AI in Belgium](https://youandai.eu/) offering overlapping AI services, and [You & AI workshops](https://www.youandaiwork.com/). These are evidence of existing marketplace use, not findings about enforceable US trademark rights. `.dev` or a different logo alone does not settle confusion over the name. A complete review depends on intended markets, federal/state marks, unregistered use, and the exact services. See [USPTO likelihood of confusion](https://www.uspto.gov/trademarks/search/likelihood-confusion) and [clearance search guidance](https://www.uspto.gov/trademarks/search/comprehensive-clearance-search-similar-trademarks).

AEO copy follows [Google's AI search guidance](https://developers.google.com/search/docs/appearance/ai-features): sound SEO foundations and helpful content remain relevant; inclusion is not guaranteed and no special AI schema is required.

## Confirmed follow-up scope

The initial audience is service businesses in the US, with other customers and international inquiries welcome. This company is seeking its first clients; all service descriptions are capabilities rather than case studies. Founder user-scale/model-deployment experience is explicitly separated from company outcomes. Six practical AEO examples and a homepage FAQ were added. Supabase is configured per the owner. The future company email should receive inquiries; do not set the recipient to an invented or untested address. Browser inspection is pending exposure of Soundarya’s Chrome profile.
