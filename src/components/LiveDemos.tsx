import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const demos = [
  {
    title: "AI Knowledge Assistant",
    description:
      "Generative AI RAG system querying enterprise knowledge bases using natural language with contextual retrieval.",
    architecture: "LLM → Embeddings → Vector DB → RAG",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Automation Workflow",
    description:
      "Production automation system built with n8n integrating APIs, AI agents, and business logic.",
    architecture: "Trigger → n8n → OpenAI → Slack / Email",
    tech: ["n8n", "OpenAI", "REST APIs", "Webhooks"],
    status: "Live",
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description:
      "Natural language queries generate SQL analytics with automated visual insights and reporting.",
    architecture: "NL → SQL → Charts → Insights",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    status: "Beta",
    demoUrl: "#",
    githubUrl: "#",
  },
];

const LiveDemos = () => (
  <section id="demos" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Live Systems</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Working in production.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Not just prototypes — these are functional systems you can explore and interact with.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo, i) => (
          <AnimatedSection key={demo.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="glass-surface group flex h-full flex-col p-7"
            >
              {/* Status badge */}
              <div className="mb-5 flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                <span className="mono-label text-[10px]">{demo.status}</span>
              </div>

              <h3 className="mb-3 text-base font-semibold tracking-tight text-foreground">
                {demo.title}
              </h3>
              <p className="mb-5 text-xs leading-relaxed text-muted-foreground">
                {demo.description}
              </p>

              <div className="mb-5 rounded-lg border border-border bg-background px-3 py-2.5">
                <p className="font-mono text-[10px] text-muted-foreground">
                  {demo.architecture}
                </p>
              </div>

              <div className="mb-6 flex flex-wrap gap-1.5">
                {demo.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-2.5 py-0.5 text-[10px] text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4 border-t border-border pt-5">
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
