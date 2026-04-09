import { motion } from "framer-motion";
import { ExternalLink, Github, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const demos = [
  {
    title: "RAG Knowledge Assistant",
    problem:
      "Internal docs scattered across multiple tools — engineers wasted time searching for answers.",
    architecture: "Docs → Chunking → Embeddings → Pinecone → LLM → FastAPI",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    metrics: ["~1,200 chunks indexed", "p95 retrieval ~320ms", "~$0.04/query"],
    aiDetail: "Recursive chunking (200 tokens, 50 overlap). Similarity threshold at 0.72 — below that, model declines to answer. Evaluated on 50-question set with GPT-4 judge.",
    status: "Prototype",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Ticket Classifier",
    problem:
      "Support tickets manually triaged. Needed automated intent classification and routing.",
    architecture: "Webhook → n8n → OpenAI classify → Slack / Email",
    tech: ["n8n", "OpenAI", "REST APIs", "Webhooks"],
    metrics: ["~120 tasks/day tested", "~1.4s avg classification", "~89% accuracy on 200 labels"],
    aiDetail: "System prompt with few-shot examples per category. Output constrained to predefined enum. Confidence < 0.6 routes to manual review. GPT-3.5-turbo for simple routing, GPT-4 for multi-intent.",
    status: "Prototype",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Natural Language SQL Interface",
    problem:
      "Non-technical users couldn't query data without filing requests to the data team.",
    architecture: "NL → GPT-4 SQL → PostgreSQL → Streamlit chart",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    metrics: ["~20 table schemas", "~82% SQL accuracy on test set", "~3.5s query-to-chart"],
    aiDetail: "Schema metadata injected into system prompt with column descriptions. SQL output validated against allowlist — DROP/DELETE/UPDATE rejected. Ambiguous queries trigger clarification step.",
    status: "Beta",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const LiveDemos = () => (
  <section id="demos" className="relative section-padding px-6">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/40 blur-[160px]" />
    </div>

    <div className="container relative z-10 mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">AI Systems</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Built and tested.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Working prototypes with real constraints. Each system tested on sample data with measured results.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo, i) => (
          <AnimatedSection key={demo.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-panel group flex h-full flex-col p-7"
            >
              {/* Status */}
              <div className="mb-5 flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                <span className="mono-label text-[10px]">{demo.status}</span>
              </div>

              <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground">
                {demo.title}
              </h3>
              <p className="mb-4 text-xs leading-relaxed text-muted-foreground">
                {demo.problem}
              </p>

              {/* Architecture */}
              <div className="mb-4 rounded-lg border border-border/40 bg-background/60 px-3 py-2.5 backdrop-blur-sm">
                <p className="font-mono text-[10px] text-muted-foreground">
                  {demo.architecture}
                </p>
              </div>

              {/* Metrics */}
              <div className="mb-4 space-y-1">
                {demo.metrics.map((m) => (
                  <p key={m} className="font-mono text-[10px] text-foreground/70">
                    {m}
                  </p>
                ))}
              </div>

              {/* AI Detail */}
              <div className="mb-5 rounded-lg border border-border/30 bg-muted/30 px-3 py-2.5">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                  <Brain className="mr-1 inline h-2.5 w-2.5" />
                  AI Design
                </p>
                <p className="text-[10px] leading-relaxed text-muted-foreground">
                  {demo.aiDetail}
                </p>
              </div>

              {/* Tech */}
              <div className="mb-6 flex flex-wrap gap-1.5">
                {demo.tech.map((t) => (
                  <span
                    key={t}
                    className="glass-chip px-2.5 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 border-t border-border/40 pt-5">
                <a
                  href={demo.demoUrl}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  <ExternalLink className="h-3 w-3" /> Demo
                </a>
                <a
                  href={demo.githubUrl}
                  className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3 w-3" /> Source
                </a>
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default LiveDemos;
