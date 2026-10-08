# SEO and AEO setup

## Implemented in this change

- Three dedicated service pages, a DentalAI development page, a guides index, and three practical guides.
- Static HTML for the new pages, unique titles/descriptions, canonical URLs, and a sitemap containing all 13 primary content pages.
- Organization identity, homepage WebSite data, service data, article data, and visible breadcrumbs with matching structured data. No invented reviews, ratings, prices, locations, or client results.
- A generated 1200 × 630 social preview image with Open Graph and Twitter metadata.
- Internal links from the homepage, navigation, footer, services, projects, and related guides. Existing service anchors remain valid.
- Permanent redirects from `youandi.dev` and `www.youandi.dev` to the equivalent path at `https://www.youandai.dev`, preserving query strings.
- Public ownership-verification meta tags obtained from Google Search Console and Bing Webmaster Tools. They prove control of the website; they are not analytics or tracking tags.

## Finish after merging and successful Vercel deployment

1. Confirm production serves the new pages and the two verification tags in the homepage HTML. Confirm that alias links, including deep links, resolve to the canonical domain.
2. In [Google Search Console](https://search.google.com/search-console), select `https://www.youandai.dev/`, expand **HTML tag**, and click **Verify**. The URL-prefix property was added during setup but remains unverified until the tag is deployed.
3. In [Bing Webmaster Tools](https://www.bing.com/webmasters), select `https://www.youandai.dev/`, choose **HTML Meta Tag**, and click **Verify**. This property was also added and is pending verification.
4. Submit `https://www.youandai.dev/sitemap.xml` in each account. Inspect the homepage and three service URLs; request indexing where appropriate. Submission is not confirmation of indexing.
5. Review the indexing reports later for excluded pages, crawl errors, and Google's selected canonical. Record the baseline before drawing conclusions about changes.

The broader Search Console Domain property `youandai.dev` is also pending. Public authoritative nameservers are Vercel's. To verify the Domain property, add the TXT record shown in that property's verification dialog at the domain root in Vercel DNS, then click Verify. Keep existing records unchanged. The deployable HTML tag verifies the URL-prefix property, not the Domain property.

The verification values in `client/src/content/search-verification.json` came from the website owner's signed-in browser account. Keep them in place after verification. If ownership changes, obtain fresh values from the intended account and review existing owners rather than reusing someone else's values.

## Measurement without another subscription

Use the free search accounts first. No advertising, paid SEO subscription, or extra analytics tracker is required by this change.

Record a weekly baseline in a simple sheet:

| Metric | Source | What it tells you |
| --- | --- | --- |
| Indexed canonical pages | Google/Bing indexing reports | Whether the engines have included the intended pages |
| Relevant non-brand queries, impressions, clicks | Search performance reports | Whether people looking for a service encounter the site |
| Pages receiving search visits | Search performance reports | Which services or guides attract visitors |
| Qualified inquiries and their source | Operator's inquiry log | Whether discovery results in useful conversations |
| Cited pages and citation trends | Bing AI Performance, when data is available | Visibility in supported AI experiences; not every AI system |

For now, ask new inquiries how they found the company and record the answer privately. If adding a site analytics product later, decide which events are actually needed, configure it, and update the privacy information to match the real collection. Do not claim conversion tracking exists until it is implemented and tested.

Useful first review: are the service pages indexed, do their titles and snippets match the offer, and are search queries relevant? A new site's data may be sparse. Avoid changing content daily in response to single impressions or one AI answer.

## Content and business details still needed

- Create and test the public company email, set the inquiry recipient, and confirm actual inbox delivery. A rendered form or an API-accepted message is not proof of delivery.
- Provide the business's actual privacy practices, data retention decisions, and public contact details before publishing a privacy notice. Legal formation remains separate from website setup.
- Add an original DentalAI demonstration when it is ready, using synthetic examples. The current page deliberately describes development status, not clinical outcomes or client deployments.
- Approve public company profiles and relevant project links. Use a consistent brand and domain. Do not publish founder names unless the owner changes the anonymity preference.
- Publish customer results and testimonials only after real work and permission to share it.

There is no city-page campaign, Maps listing, paid backlink purchase, or automatic AI-generated publishing in this change. Choose future topics from actual customer questions and observed search data. A Google Business Profile requires meeting Google's in-person eligibility rules.

## Crawler and content rules

The existing wildcard robots rule permits public content and excludes `/api/`. Check Vercel protections as well as robots.txt if a real crawler reports denied access. Googlebot and Bingbot need access to public pages; OpenAI uses OAI-SearchBot for search, independently from GPTBot's training purpose. No training preference has been changed.

Google does not require an AI-specific text file or special schema for AI search features. Rich results and AI citations are not guaranteed. Do not add fabricated `AggregateRating` or `LocalBusiness` details to chase visibility. The guides cite their technical search sources.

References: [Google AI features](https://developers.google.com/search/docs/appearance/ai-features), [Google indexing requests](https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl), [OpenAI crawler documentation](https://developers.openai.com/api/docs/bots), [Bing AI Performance](https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/), [Google Business Profile eligibility](https://support.google.com/business/answer/13763036).
