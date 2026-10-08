export const guides = [
  {
    slug: "connecting-ai-to-booking-and-crm",
    title: "Can AI connect to your booking or CRM system?",
    description:
      "A practical checklist for AI booking and CRM integrations: supported APIs, permissions, human approval, failure handling, and operating costs.",
    answer:
      "AI can work with a booking or CRM system when the product exposes a suitable, authorized integration. The first step is checking what the system allows—not choosing a model. Start with a narrow task and make approvals and exceptions explicit.",
    service: "ai-consulting",
    sections: [
      {
        title: "Check the integration before promising the workflow",
        paragraphs: [
          "Identify the actual product, subscription tier, and system owner. Check its documentation for the operations you need: reading availability, retrieving a customer record, creating a draft, or updating a booking. An API that reads data may not allow the write operation your workflow requires.",
          "Confirm access permissions, usage limits, sandbox availability, and whether webhooks can notify the application of changes. If no supported integration exists, document that constraint and assess a simpler process. Avoid making a business-critical workflow depend on fragile screen scraping.",
        ],
      },
      {
        title: "Separate a suggestion from an action",
        paragraphs: [
          "A useful first version can classify an inquiry or draft a response without changing customer records. A team member reviews the suggestion and decides what to send or save. This makes it easier to test usefulness and understand mistakes before granting more autonomy.",
          "If the workflow later takes actions, define which are allowed, how the customer or employee authorizes them, and which require approval. A generated response should not claim a booking succeeded until the booking system confirms it.",
        ],
      },
      {
        title: "Make failure handling part of the design",
        paragraphs: [
          "Consider a message arriving twice, a customer with two similar records, an expired credential, a full appointment slot, or an unavailable service. Agree on how the workflow should pause, retry safely, or hand control to a person.",
          "Use a small test set that includes these exceptions. Keep the existing process available while the integration is evaluated. Record enough operational information to diagnose failures without unnecessarily collecting message contents.",
        ],
      },
      {
        title: "Estimate ongoing costs and responsibilities",
        paragraphs: [
          "The budget should cover the integration work and recurring costs such as hosting, model usage, vendor API access, and maintenance. Name the person responsible for reviewing exceptions and responding when a connected system changes.",
          "A useful starting brief includes the systems involved, one example of the current manual process, the desired outcome, and what must never happen. Use synthetic or redacted examples for an initial discussion; the website inquiry form is not a place for credentials or patient records.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "custom-software-build-vs-buy",
    title: "Should a service business build or buy software?",
    description:
      "Compare buying software, integrating existing tools, and building custom software using workflow fit, total cost, data access, and maintenance needs.",
    answer:
      "Start with an existing product when it supports the core workflow. Consider custom software when a meaningful requirement cannot be met through configuration or integration. Compare the full cost of operating each option, including maintenance and the work your team will still do manually.",
    service: "software-development",
    sections: [
      {
        title: "Describe the workflow in concrete terms",
        paragraphs: [
          "List who does the work, what information they need, and which steps consume time or introduce errors. Distinguish essential requirements from preferences. “Customers need to upload a document and see its review status” is easier to evaluate than “we need a better portal.”",
          "Decide how you will recognize improvement. It could be fewer manual transfers, fewer missed requests, or a shorter time to locate a record. Record the current baseline so that a new tool can be assessed against it.",
        ],
      },
      {
        title: "Compare three options",
        paragraphs: [
          "Buy: an existing product may provide a working process, updates, and support. Check whether the required features are included at the intended subscription tier, how user limits affect cost, and whether information can be exported.",
          "Integrate: a small application connecting existing systems may resolve the main problem while retaining tools people know. Confirm that supported APIs expose the operations you need and that their limits are compatible with the workflow.",
          "Build: a custom application offers control over a specific workflow but requires product decisions, implementation, hosting, monitoring, and maintenance. It is a stronger candidate when the requirements are distinct and the business can support ongoing ownership.",
        ],
      },
      {
        title: "Count costs beyond the initial quote",
        paragraphs: [
          "Compare subscription fees, per-user charges, migration, training, integration work, support, and the cost of manual work that remains. For custom software, include hosting, dependency updates, backup and recovery needs, and the process for requesting changes.",
          "Consider switching costs as well. Who can access the data and source code? What can be exported? What happens if a vendor or contractor is no longer available? Document the agreed ownership and handover arrangements before work starts.",
        ],
      },
      {
        title: "Test the riskiest assumption first",
        paragraphs: [
          "Before a large commitment, try the important workflow in a vendor trial, integration prototype, or small first release. Include the people who will actually use it and test an exception as well as the happy path.",
          "The result may be a decision to buy, build, integrate, or postpone. A useful discovery engagement produces enough evidence to make that decision without assuming a custom build is the answer.",
        ],
      },
    ],
    sources: [],
  },
  {
    slug: "aeo-and-seo-for-service-businesses",
    title: "AEO and SEO: what should a service business do first?",
    description:
      "A practical starting point for SEO and answer engine optimization: indexing, service pages, useful answers, original evidence, and meaningful measurement.",
    answer:
      "Start by making your real services easy to discover and understand. Verify indexing, give distinct services useful pages, answer customer questions, and show evidence of your work. Those foundations support conventional search and AI search experiences.",
    service: "aeo",
    sections: [
      {
        title: "Make the important pages accessible",
        paragraphs: [
          "Check that public pages load successfully, expose important information as text, and can be reached through normal links. Review robots rules, noindex directives, canonical URLs, and hosting protections together. A sitemap helps search engines discover the pages you want them to consider.",
          "Use Google Search Console and Bing Webmaster Tools to inspect indexing and errors. Submitting a page does not guarantee that it will be indexed or shown for a particular query. Google says its AI search features rely on the same technical SEO foundations.",
        ],
      },
      {
        title: "Answer questions that affect a buying decision",
        paragraphs: [
          "Explain who a service is for, what is delivered, how an engagement works, and which dependencies may change the scope. Answer real questions about compatibility, timing, pricing factors, and ongoing support. There is no universal word count that makes an answer useful.",
          "Keep the answer close to its question, then add the detail needed to act on it. Link a deeper guide to the relevant service page. Avoid publishing near-identical pages for locations you do not serve or repeating keywords where they add no meaning.",
        ],
      },
      {
        title: "Give readers evidence they can inspect",
        paragraphs: [
          "Show original demonstrations, project explanations, or a clear description of how you evaluate a solution. Label products in development and illustrative examples accurately. Publish customer results only when they exist and you have permission to share them.",
          "Keep organization details consistent and ensure structured data describes what visitors can actually see. Google does not require special AI schema or an AI text file for inclusion in its AI features.",
        ],
      },
      {
        title: "Measure visibility and business outcomes separately",
        paragraphs: [
          "Search impressions show that pages were displayed; clicks show visits from search; inquiries show a further step toward a business relationship. Track which services attract relevant queries and which pages help visitors contact you.",
          "Bing’s AI Performance report provides citation information across supported AI experiences. It is not a complete view of every AI product and a citation does not equal a lead. Treat repeated manual prompt checks as exploratory observations, with dates and context, rather than a stable ranking.",
        ],
      },
      {
        title: "Check search-crawler access separately from training choices",
        paragraphs: [
          "OpenAI uses OAI-SearchBot for ChatGPT search and GPTBot for potential model-training use. These controls are independent. A site can permit search crawling while making a separate choice about training.",
          "Review both robots.txt and hosting restrictions before assuming that a crawler can access the site. Access makes retrieval possible; it does not guarantee that an answer will cite or recommend the business.",
        ],
      },
    ],
    sources: [
      {
        label: "Google: AI features and your website",
        url: "https://developers.google.com/search/docs/appearance/ai-features",
      },
      {
        label: "Google: request crawling and indexing",
        url: "https://developers.google.com/search/docs/crawling-indexing/ask-google-to-recrawl",
      },
      {
        label: "OpenAI: crawler controls",
        url: "https://developers.openai.com/api/docs/bots",
      },
      {
        label: "Bing: AI Performance reporting",
        url: "https://blogs.bing.com/webmaster/2026/2/Introducing-AI-Performance-in-Bing-Webmaster-Tools-Public-Preview/",
      },
    ],
  },
];
