import { Bot, Boxes, Code2, Database, FileSearch, GitBranch, Leaf, Network, ShieldCheck, TerminalSquare } from "lucide-react";

export type Project = {
  slug: string;
  name: string;
  number: string;
  category: string;
  description: string;
  technologies: string[];
  flow: string[];
  tone: "olive" | "sepia" | "charcoal" | "sage";
  overview: string;
  problem: string;
  solution: string;
  decisions: string[];
  challenges: string[];
  learned: string;
};

export const projects: Project[] = [
  {
    slug: "secure-push", name: "Secure Push", number: "01", category: "Security / Developer Tools",
    description: "An AI-code security gate designed to detect secrets, insecure configuration, and potentially unsafe code before it reaches a repository or CI pipeline.",
    technologies: ["Go", "Git", "Security", "CI/CD", "Static Analysis"], flow: ["Code", "Scanner", "Detectors", "Report", "Git / CI"], tone: "olive",
    overview: "A developer-side security tool that moves common checks earlier in the software delivery workflow.",
    problem: "Secrets and unsafe configuration can be committed long before conventional pipeline checks run, making remediation slower and riskier.",
    solution: "Secure Push explores a local gate that inspects code and configuration, runs focused detectors, and presents actionable findings before a push continues.",
    decisions: ["Go for a portable command-line workflow", "Detector-oriented architecture for focused checks", "Git and CI integration as first-class boundaries"],
    challenges: ["Balancing useful signals against noisy false positives", "Handling varied repository structures", "Keeping local feedback fast enough for everyday use"],
    learned: "Security tooling is most useful when its feedback is specific, timely, and built into an existing developer workflow."
  },
  {
    slug: "agrichama", name: "AgriChama", number: "02", category: "FinTech / Agriculture / PWA",
    description: "A digital platform concept for community savings groups and smallholder farmers, combining savings, loans, agriculture-focused lending, risk management, and offline-first workflows.",
    technologies: ["Go", "PostgreSQL", "PWA", "SMS", "Docker"], flow: ["Group", "Members", "Savings", "Loans", "Agriculture", "Risk"], tone: "sepia",
    overview: "A systems concept connecting group finance with agriculture-aware workflows and constrained connectivity.",
    problem: "Community savings and agricultural lending involve shared records, uneven connectivity, and risks that generic finance tools do not model well.",
    solution: "AgriChama brings member records, savings, loans, agriculture context, and risk workflows into one offline-conscious platform concept.",
    decisions: ["Offline-first PWA behavior for unreliable connectivity", "PostgreSQL for relational financial records", "SMS as a practical notification channel"],
    challenges: ["Keeping financial state consistent across offline sessions", "Designing transparent group-level permissions", "Representing agriculture-specific lending risk"],
    learned: "Reliable software in constrained environments begins with the real operating context, not the ideal network conditions."
  },
  {
    slug: "social-network", name: "Social Network", number: "03", category: "Full Stack / Backend",
    description: "A Facebook-style social platform with posts, profiles, groups, notifications, messaging, authentication, and real-time communication.",
    technologies: ["Go", "Next.js", "SQLite", "WebSockets", "REST APIs"], flow: ["Next.js", "Go API", "SQLite", "WebSockets"], tone: "charcoal",
    overview: "A full-stack social application used to explore backend boundaries, state, permissions, and real-time communication.",
    problem: "Social products combine many interdependent domains: identity, content, groups, notifications, messaging, and live events.",
    solution: "The system separates the Next.js interface from a Go API, uses SQLite for persistence, and introduces WebSockets for real-time updates.",
    decisions: ["Clear client/API separation", "REST endpoints for core resource workflows", "WebSockets for event-driven communication"],
    challenges: ["Coordinating real-time and persisted state", "Keeping authorization rules consistent across features", "Managing interconnected social entities"],
    learned: "Feature-rich systems benefit from explicit boundaries and consistent authorization more than clever abstractions."
  },
  {
    slug: "guidely", name: "Guidely", number: "04", category: "AI / RAG",
    description: "An exploration of document ingestion, chunking, embeddings, semantic search, and retrieval-augmented generation.",
    technologies: ["Python", "Sentence Transformers", "Embeddings", "RAG", "Semantic Search"], flow: ["Documents", "Chunks", "Embeddings", "Retrieval"], tone: "sage",
    overview: "A practical exploration of the retrieval pipeline behind document-grounded AI systems.",
    problem: "Language models need relevant, traceable context to answer questions grounded in a specific document collection.",
    solution: "Guidely explores ingestion, chunking, embedding generation, semantic retrieval, and context assembly as separate stages.",
    decisions: ["Explicit pipeline stages for easier evaluation", "Sentence Transformers for local embedding experiments", "Semantic retrieval before answer generation"],
    challenges: ["Choosing useful chunk boundaries", "Evaluating retrieval quality", "Preserving enough context without flooding the prompt"],
    learned: "The quality of a RAG system depends heavily on information preparation and retrieval, not only the final model response."
  }
];

export const buildAreas = [
  { title: "Backend Systems", text: "APIs, services, authentication, databases, WebSockets, and business logic.", icon: Database },
  { title: "Developer Tools", text: "Tools that automate repetitive work and improve software development workflows.", icon: TerminalSquare },
  { title: "DevOps & Infrastructure", text: "Containers, Linux, CI/CD, deployment, networking, and infrastructure.", icon: Boxes },
  { title: "Secure Software", text: "Secret detection, authentication, authorization, and secure configuration.", icon: ShieldCheck },
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

export const diagramIcons = [Code2, GitBranch, Network, Database, Boxes, ShieldCheck];
export const topicIcons = { Bot, FileSearch, Leaf };

export type TalkEvent = {
  title: string;
  kind: "Talk" | "Event";
  placeholderNote: string;
  caption: string;
  imageSrc?: string;
  imageAlt?: string;
};

// Editable placeholders — replace titles, kinds, and photos with Stephen's real talks and events.
export const talksEvents: TalkEvent[] = [
  { title: "Talk title to add", kind: "Talk", placeholderNote: "Photo to add", caption: "Talk details and photo will be added when Stephen shares them." },
  { title: "Event name to add", kind: "Event", placeholderNote: "Photo to add", caption: "Event details and photo will be added when Stephen shares them." },
  { title: "Talk title to add", kind: "Talk", placeholderNote: "Photo to add", caption: "Talk details and photo will be added when Stephen shares them." },
];
