import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const demos = [
  {
    title: "AI Knowledge Assistant",
    problem:
      "Internal docs scattered across Notion, Confluence, and Google Drive — engineers wasted time searching.",
    architecture: "Docs → Embeddings → Pinecone → LLM → FastAPI",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    metrics: ["~1,200 chunks indexed", "p95 retrieval ~320ms", "~$0.04/query"],
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Automation Workflow",
    problem:
      "Repetitive ticket routing and status notifications handled manually by the ops team.",
    architecture: "Webhook → n8n → OpenAI → Slack / Email",
    tech: ["n8n", "OpenAI", "REST APIs", "Webhooks"],
    metrics: ["~400 tasks/day", "~1.8s avg response", "1 × 2-vCPU instance"],
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Analytics Dashboard",
    problem:
      "Non-technical users couldn't run ad-hoc queries without filing tickets to the data team.",
    architecture: "NL → GPT-4 SQL → PostgreSQL → Streamlit",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    metrics: ["~60 table schemas", "~87% SQL accuracy", "~3.5s query-to-chart"],
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
        <p className="mono-label mb-6">Live Systems</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Working in production.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Functional systems you can explore — described with real constraints and measured performance.
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
              <div className="mb-5 space-y-1">
                {demo.metrics.map((m) => (
                  <p key={m} className="font-mono text-[10px] text-foreground/70">
                    {m}
                  </p>
                ))}
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
