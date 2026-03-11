import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const demos = [
  {
    title: "AI Knowledge Assistant",
    description: "Live demo of a Generative AI RAG system querying enterprise knowledge bases using natural language.",
    architecture: "LLM → Embeddings → Vector DB → RAG Retrieval",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "AI Automation Workflow",
    description: "Automation system built with n8n that integrates APIs, AI agents, and business logic.",
    architecture: "Trigger → n8n → OpenAI API → Slack / Email",
    tech: ["n8n", "OpenAI", "REST APIs", "Webhooks"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Data Analytics Dashboard",
    description: "System where natural language queries generate SQL analytics and visual insights.",
    architecture: "Natural Language → SQL → Charts → Insights",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

const LiveDemos = () => (
  <section id="demos" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Live Systems</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Working demos
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {demos.map((demo, i) => (
          <AnimatedSection key={demo.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-surface group flex h-full flex-col p-8"
            >
              <h3 className="mb-3 text-lg font-semibold text-foreground">{demo.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{demo.description}</p>

              <div className="mb-6 rounded-xl border border-border bg-background p-4">
                <p className="font-mono text-xs text-muted-foreground">{demo.architecture}</p>
              </div>

              <div className="mb-6 flex flex-wrap gap-2">
                {demo.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-auto flex items-center gap-4">
                <a
                  href={demo.demoUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-foreground transition-colors hover:text-muted-foreground"
                >
                  Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
                <a
                  href={demo.githubUrl}
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github className="h-3.5 w-3.5" /> Source
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
