export const serviceDetails = [
  {
    slug: "ai-consulting",
    title: "AI consulting & workflow automation",
    description:
      "AI consulting for service businesses: assess opportunities, prototype assistants, connect existing tools, and evaluate workflows before deployment.",
    intro:
      "We help service businesses decide where AI can be useful, test a focused workflow, and connect it to the tools their team already uses.",
    audience:
      "For teams handling repetitive inquiries, searching scattered information, or moving information between systems. We start with one workflow and expand only when the evidence supports it.",
    deliverables: [
      {
        title: "Opportunity assessment",
        body: "Map the current process, the people involved, available data, and the cost of mistakes. Prioritize opportunities by usefulness, feasibility, and what can be measured.",
      },
      {
        title: "Prototype & evaluation",
        body: "Build a small version using representative examples. Define acceptance criteria, test failures as well as successes, and identify where a person must review or approve the output.",
      },
      {
        title: "Integration & deployment",
        body: "Connect the agreed workflow to approved systems using their supported interfaces. Plan access controls, monitoring, failure handling, and a way to return to the existing process.",
      },
    ],
    example: {
      title: "Example: a booking inquiry assistant",
      body: "An assistant could turn a customer message into a draft reply, check availability through an approved booking integration, and send the draft to a team member for approval. It should escalate unclear requests and avoid promising appointments it cannot confirm. This is an illustrative workflow, not a customer result.",
    },
    steps: [
      "Choose a bounded business problem and record how the current workflow performs.",
      "Confirm system access and data requirements; agree on scope and acceptance criteria.",
      "Test a prototype, review exceptions, and decide whether to deploy, revise, or stop.",
    ],
    faqs: [
      {
        question: "Can you work with our existing CRM or booking system?",
        answer:
          "We first check whether your tools support the required API, webhook, or approved integration. Access permissions, rate limits, and the quality of existing data determine what is practical. We document these dependencies before committing to a build.",
      },
      {
        question: "Do we need to train our own AI model?",
        answer:
          "Often the starting point is an existing model combined with your approved information and workflow rules. Custom training is a separate option to evaluate when a simpler approach does not meet the requirements and appropriate training data is available.",
      },
      {
        question: "What determines the cost of an AI integration?",
        answer:
          "The number of systems, data preparation, review requirements, reliability targets, and support needs drive scope. We agree on deliverables and a budget after discovery. Model usage, hosting, and third-party subscriptions should be included in the operating-cost estimate.",
      },
      {
        question: "How do you decide whether a prototype is ready?",
        answer:
          "We agree on a representative set of tasks and acceptance criteria before launch. The review should include output quality, failure cases, access controls, human escalation, operating cost, and how changes will be monitored.",
      },
    ],
    guide: "connecting-ai-to-booking-and-crm",
  },
  {
    slug: "software-development",
    title: "Custom software development",
    description:
      "Custom software for service businesses and founders: web applications, internal tools, client portals, MVPs, and API integrations with a clear delivery scope.",
    intro:
      "We design and build software for the way your business works, from a first product to the internal tools that keep a team moving.",
    audience:
      "For founders testing a product idea and teams whose spreadsheets, disconnected tools, or manual handoffs have become difficult to manage. We assess existing products alongside a custom build.",
    deliverables: [
      {
        title: "Product scope & workflow design",
        body: "Define users, essential tasks, data, and the smallest useful release. Make assumptions and exclusions visible before development starts.",
      },
      {
        title: "Applications & integrations",
        body: "Build web applications, dashboards, internal tools, and client portals. Connect supported APIs so information can move between the systems involved in the agreed workflow.",
      },
      {
        title: "Launch & handover",
        body: "Test the important user journeys, document configuration and operating needs, and agree on ownership, maintenance, and any continuing support.",
      },
    ],
    example: {
      title: "Example: a service-business client portal",
      body: "A portal could let customers submit requests and view progress while staff manage tasks in one place. An integration could update the existing CRM after an authorized change. Role-based access, status definitions, and failure handling belong in the scope from the start. This describes a possible engagement, not completed client work.",
    },
    steps: [
      "Map the users, current workflow, and specific reasons existing tools fall short.",
      "Agree on a first release, review milestones, and responsibilities for data and system access.",
      "Build and test in stages, then hand over documentation and the agreed support plan.",
    ],
    faqs: [
      {
        question: "Should we buy an existing tool or build custom software?",
        answer:
          "Start by checking whether an existing product covers the core workflow. A custom build may make sense when a meaningful requirement cannot be supported through configuration or integration, or when the workflow itself differentiates your business. Compare total operating and maintenance costs, not just the first build.",
      },
      {
        question: "Can you build an MVP?",
        answer:
          "Yes. We can help define the smallest version that tests the important assumptions, then develop a usable web application around those requirements. Features outside the initial scope can be evaluated after users have tried it.",
      },
      {
        question: "Can a project include both software and AI?",
        answer:
          "Yes. The application can handle records, permissions, and workflow steps while an AI feature helps with a bounded task such as drafting or searching approved information. We decide where deterministic rules and human review are more suitable.",
      },
      {
        question: "What happens after launch?",
        answer:
          "We agree on the handover and any support arrangement in the project scope. Topics include hosting, documentation, repository access, monitoring, dependency updates, and how future changes will be requested and priced.",
      },
    ],
    guide: "custom-software-build-vs-buy",
  },
  {
    slug: "aeo",
    title: "AEO & SEO for service businesses",
    description:
      "Answer engine optimization and SEO services: technical audits, useful service pages, customer-question research, structured data, and visibility measurement.",
    intro:
      "We help businesses make their services easier to find and understand in search results and AI-generated answers, starting with useful content and sound technical foundations.",
    audience:
      "For businesses whose website does not clearly explain their services, answer buying questions, or show evidence of their work. AEO stands for answer engine optimization and builds on the foundations of SEO.",
    deliverables: [
      {
        title: "Search & content audit",
        body: "Review crawlability, indexing signals, navigation, business information, and the questions existing pages answer. Establish a baseline using the search accounts and data available.",
      },
      {
        title: "Pages people can use",
        body: "Create focused service pages and practical answers about fit, process, constraints, and pricing factors. Use original examples and accurate evidence, with structured data that matches the visible content.",
      },
      {
        title: "Measurement & improvements",
        body: "Monitor relevant search queries, indexed pages, organic visits, inquiries, and available AI citation reports. Use those observations to prioritize the next improvement rather than promising a particular ranking.",
      },
    ],
    example: {
      title: "Example: a website that answers a buying question",
      body: "A service page can explain which customers it serves, list deliverables, show an original demonstration, and answer “Can you work with our existing tools?” in plain language. A related guide can explain the integration process in depth and link back to the service. Both pages give visitors a clear next step.",
    },
    steps: [
      "Audit the site and identify the customer questions it should answer.",
      "Improve the technical foundations and publish a small set of substantial pages.",
      "Review indexing, relevant queries, and qualified inquiries; refine the pages as evidence accumulates.",
    ],
    faqs: [
      {
        question: "How does AEO differ from SEO?",
        answer:
          "SEO helps search engines discover and understand pages. AEO also considers how those pages can answer questions in AI search experiences. Both depend on accessible content, clear explanations, and reliable information.",
      },
      {
        question: "Can you guarantee that ChatGPT or Google will recommend us?",
        answer:
          "No. Search engines and AI systems decide which results to show, and answers vary by query and context. We can improve a site’s content and technical foundations, measure observable changes, and explain the limits of those measurements.",
      },
      {
        question: "Do we need an llms.txt file or special AI schema?",
        answer:
          "Google says no special AI text file or schema is required for its AI search features. We prioritize crawlable pages, helpful answers, internal links, and accurate structured data. A file alone does not establish expertise or guarantee a citation.",
      },
      {
        question: "How will we measure progress?",
        answer:
          "We establish a baseline and review indexed pages, relevant search impressions and clicks, organic visits, and qualified inquiries. Available AI citation reports can add context. A single AI answer or citation is not evidence of consistent ranking or business impact.",
      },
    ],
    guide: "aeo-and-seo-for-service-businesses",
  },
];
