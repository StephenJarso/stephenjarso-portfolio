import { Bot, FileSearch, Leaf } from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  number: string;
  category: string;
  description: string;
  technologies: string[];
  overview: string;
  problem: string;
  solution: string;
  decisions: string[];
  challenges: string[];
  learned: string;
  githubUrl?: string;
};

export const projects: Project[] = [
  {
    slug: "secure-push", name: "Secure Push", number: "01", category: "Security / Developer Tools",
    description: "An AI-code security gate designed to detect secrets, insecure configuration, and potentially unsafe code before it reaches a repository or CI pipeline.",
    technologies: ["Go", "Git", "Security", "CI/CD", "Static Analysis"],
    overview: "A developer-side security tool that moves common checks earlier in the software delivery workflow.",
    problem: "Secrets and unsafe configuration can be committed long before conventional pipeline checks run, making remediation slower and riskier.",
    solution: "Secure Push explores a local gate that inspects code and configuration, runs focused detectors, and presents actionable findings before a push continues.",
    decisions: ["Go for a portable command-line workflow", "Detector-oriented architecture for focused checks", "Git and CI integration as first-class boundaries"],
    challenges: ["Balancing useful signals against noisy false positives", "Handling varied repository structures", "Keeping local feedback fast enough for everyday use"],
    learned: "Security tooling is most useful when its feedback is specific, timely, and built into an existing developer workflow.",
    githubUrl: "https://github.com/StephenJarso/secure_push",
  },
  {
    slug: "agrichama", name: "AgriChama", number: "02", category: "FinTech / Agriculture / PWA",
    description: "A digital platform concept for community savings groups and smallholder farmers, combining savings, loans, agriculture-focused lending, risk management, and offline-first workflows.",
    technologies: ["Go", "PostgreSQL", "PWA", "SMS", "Docker"],
    overview: "A systems concept connecting group finance with agriculture-aware workflows and constrained connectivity.",
    problem: "Community savings and agricultural lending involve shared records, uneven connectivity, and risks that generic finance tools do not model well.",
    solution: "AgriChama brings member records, savings, loans, agriculture context, and risk workflows into one offline-conscious platform concept.",
    decisions: ["Offline-first PWA behavior for unreliable connectivity", "PostgreSQL for relational financial records", "SMS as a practical notification channel"],
    challenges: ["Keeping financial state consistent across offline sessions", "Designing transparent group-level permissions", "Representing agriculture-specific lending risk"],
    learned: "Reliable software in constrained environments begins with the real operating context, not the ideal network conditions.",
    githubUrl: "https://github.com/StephenJarso/AgriChama",
  },
  {
    slug: "lishepay", name: "LishePay", number: "03", category: "FinTech / EdTech",
    description: "A closed-loop digital escrow platform that restricts student loan disbursements exclusively to verified campus meal purchases — combining split-fund ingestion, daily budget pacing, live vendor inventory, micro-overdraft credit, and an AI nutrition advisor.",
    technologies: ["Go", "PostgreSQL", "Redis", "WebSockets", "M-Pesa API", "RAG / AI"],
    overview: "LishePay is a closed-loop financial system built around one constraint: designated student funds can only be spent on food at registered campus vendors. It combines escrow mechanics, real-time inventory, AI advisory, and multi-party settlement into a single platform.",
    problem: "Students receiving lump-sum financial disbursements (HELB, guardian allocations) frequently exhaust funds early in the semester, leading to mid-semester food insecurity. Direct cash offers no guardrails to ensure funds fulfil their intended purpose.",
    solution: "Funds flow into a custodial escrow vault with no student cash-out endpoint. A daily budget pacing engine divides the balance across remaining semester days. Orders are atomically reserved against live vendor stock, settled on verified pickup or delivery, and distributed to vendors and couriers via automated batch payouts.",
    decisions: [
      "Double-entry ledger with ACID-compliant escrow states over smart contracts — deterministic performance at cafeteria scale",
      "Redis distributed locking (Redlock) for atomic stock reservation during high-concurrency lunch rushes",
      "LisheAdvisor as a strictly read-only RAG microservice — recommendations never write to the ledger",
      "Split escrow for hostel deliveries: meal amount and courier fee held and settled independently",
      "Priority Recovery Sweep Engine: incoming deposits repay outstanding LisheCredit before entering escrow",
    ],
    challenges: [
      "Guaranteeing sub-500ms POS verification at cafeteria counters under peak load",
      "Preventing phantom sales collusion between students, vendors, and couriers",
      "Designing AI recommendations that degrade gracefully when stock data is stale",
      "Balancing micro-overdraft credit limits against default risk without traditional credit scoring",
    ],
    learned: "Financial constraints enforced at the data layer are more reliable than UI-level restrictions. Escrow state machines and atomic database operations are the only trustworthy mechanism for fund-purpose guarantees at scale.",
    githubUrl: "https://github.com/StephenJarso/lishepay",
  },
  {
    slug: "applycanary", name: "ApplyCanary", number: "04", category: "AI / Agentic Systems",
    description: "An agentic job-search assistant that finds, scores, and tailors applications — then practises the interview with you out loud. Built for the CockroachDB × AWS hackathon, with CockroachDB as the agent's persistent memory layer for distributed vector indexing and long-term recall.",
    technologies: ["Python", "FastAPI", "CockroachDB", "AWS Bedrock", "React", "Vector Search", "Amazon Polly", "Transcribe"],
    overview: "ApplyCanary is a full-stack AI agent for job search. It polls ten job connectors every five minutes, scores roles against your resume using an LLM, tailors CVs with a truthcheck gate to block unverifiable claims, and runs live mock interviews with a spoken AI coach that remembers your past sessions.",
    problem: "Job searching is repetitive, fragmented, and stateless. Candidates lose context between sessions, apply to mismatched roles, and practice interviews without grounded feedback tied to specific postings.",
    solution: "A multi-provider LLM chain (xAI Grok → Gemini → Groq → Ollama) handles scoring, tailoring, and coaching. CockroachDB stores both transactional state and vector embeddings in one system — interview sessions persist across tabs, coaching feedback is semantically recalled before each new question, and the memory layer runs the same code path on SQLite in development.",
    decisions: [
      "CockroachDB as both the transactional database and distributed vector store — one system, no consistency gaps between job state and agent memory",
      "Strictly read-only LisheAdvisor-style agent boundary: the AI coach cannot write to the ledger or approve submissions",
      "Truthcheck pass on every CV rewrite — unverified claims are blocked before the draft can be submitted",
      "Multi-provider LLM circuit breaker chain so a dead API key never stalls the scheduler or locks the database",
      "Browser speech synthesis/recognition as a fallback for Polly/Transcribe — full interview studio with zero AWS credentials",
    ],
    challenges: [
      "Keeping vector similarity search semantically accurate across CockroachDB and SQLite dev environments without code divergence",
      "Building a CV tailoring pipeline that is genuinely helpful without hallucinating experience the candidate does not have",
      "Coordinating asynchronous job polling, scoring, and email alerts without thundering-herd effects on LLM providers",
      "Per-user email scoping so one user's alert threshold never leaks matches or activity into another user's digest",
    ],
    learned: "Agent memory is an infrastructure problem as much as a model problem. Putting embeddings and transactional state in the same database eliminates an entire class of consistency bugs that arise when they live in separate systems.",
    githubUrl: "https://github.com/StephenJarso/applycanary",
  },
  {
    slug: "social-network", name: "Social Network", number: "05", category: "Full Stack / Backend",
    description: "A Facebook-style social platform with posts, profiles, groups, notifications, messaging, authentication, and real-time communication.",
    technologies: ["Go", "Next.js", "SQLite", "WebSockets", "REST APIs"],
    overview: "A full-stack social application used to explore backend boundaries, state, permissions, and real-time communication.",
    problem: "Social products combine many interdependent domains: identity, content, groups, notifications, messaging, and live events.",
    solution: "The system separates the Next.js interface from a Go API, uses SQLite for persistence, and introduces WebSockets for real-time updates.",
    decisions: ["Clear client/API separation", "REST endpoints for core resource workflows", "WebSockets for event-driven communication"],
    challenges: ["Coordinating real-time and persisted state", "Keeping authorization rules consistent across features", "Managing interconnected social entities"],
    learned: "Feature-rich systems benefit from explicit boundaries and consistent authorization more than clever abstractions.",
  },
  {
    slug: "guidely", name: "Guidely", number: "06", category: "AI / RAG",
    description: "An exploration of document ingestion, chunking, embeddings, semantic search, and retrieval-augmented generation.",
    technologies: ["Python", "Sentence Transformers", "Embeddings", "RAG", "Semantic Search"],
    overview: "A practical exploration of the retrieval pipeline behind document-grounded AI systems.",
    problem: "Language models need relevant, traceable context to answer questions grounded in a specific document collection.",
    solution: "Guidely explores ingestion, chunking, embedding generation, semantic retrieval, and context assembly as separate stages.",
    decisions: ["Explicit pipeline stages for easier evaluation", "Sentence Transformers for local embedding experiments", "Semantic retrieval before answer generation"],
    challenges: ["Choosing useful chunk boundaries", "Evaluating retrieval quality", "Preserving enough context without flooding the prompt"],
    learned: "The quality of a RAG system depends heavily on information preparation and retrieval, not only the final model response.",
  },
];

export const buildAreas = [
  { title: "Backend Systems", text: "APIs, services, authentication, databases, WebSockets, and business logic." },
  { title: "Developer Tools", text: "Tools that automate repetitive work and improve software development workflows." },
  { title: "DevOps & Infrastructure", text: "Containers, Linux, CI/CD, deployment, networking, and infrastructure." },
  { title: "Secure Software", text: "Secret detection, authentication, authorization, and secure configuration." },
];

export const skills = [
  { category: "Languages", items: ["Go", "JavaScript", "Python", "SQL"] },
  { category: "Backend", items: ["Go", "REST APIs", "HTTP", "WebSockets", "Authentication", "SQLite", "PostgreSQL"] },
  { category: "DevOps", items: ["Docker", "Linux", "Git", "CI/CD", "Networking"] },
  { category: "Security", items: ["Secure coding", "Authentication", "Authorization", "Secrets management", "API security", "Security scanning"] },
  { category: "Frontend", items: ["Next.js", "React", "HTML", "CSS"] },
];

export const journey = [
  ["Flutter / Mobile", "Started by building interfaces and learning how software behaves in people’s hands."],
  ["Full Stack", "Followed requests across the interface, application logic, and data layer."],
  ["Backend Engineering", "Moved closer to APIs, data models, reliability, and system boundaries."],
  ["Go", "Found a language suited to clear, efficient services and practical tooling."],
  ["DevOps", "Extended the work into containers, Linux, delivery pipelines, and deployment."],
  ["Security", "Now applying a security mindset across code, configuration, identity, and infrastructure."],
] as const;

export const topicIcons = { Bot, FileSearch, Leaf };

export type TalkEvent = {
  title: string;
  kind: "Talk" | "Event";
  placeholderNote: string;
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
};

export const writingTopics = [
  "Understanding HTTP from first principles",
  "Building APIs with Go",
  "Docker from first principles",
  "Understanding idempotency in payment systems",
  "Designing offline-first applications",
  "Lessons from building Secure Push",
  "SQLite vs PostgreSQL",
  "Understanding networking as a backend developer",
];

// Editable placeholders — replace titles, kinds, and photos with Stephen's real talks and events.
export const talksEvents: TalkEvent[] = [
  { title: "Talk title to add", kind: "Talk", placeholderNote: "Photo to add", caption: "Talk details and photo will be added when Stephen shares them." },
  { title: "Event name to add", kind: "Event", placeholderNote: "Photo to add", caption: "Event details and photo will be added when Stephen shares them." },
  { title: "Talk title to add", kind: "Talk", placeholderNote: "Photo to add", caption: "Talk details and photo will be added when Stephen shares them." },
];
