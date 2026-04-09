import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const diagrams = [
  {
    title: "Streaming Data Pipeline",
    nodes: ["Data Sources", "Kafka", "Spark Streaming", "PostgreSQL", "Dashboard"],
    description: "Event-driven architecture with at-least-once delivery. Tested on simulated workloads.",
  },
  {
    title: "AI Automation Architecture",
    nodes: ["Trigger Event", "n8n Workflow", "OpenAI API", "Business Logic", "Slack / Email"],
    description: "Prompt-driven classification with confidence-based routing. GPT-3.5 for simple tasks, GPT-4 for complex ones.",
  },
  {
    title: "RAG System",
    nodes: ["Documents", "Chunk + Embed", "Vector DB", "Retrieve + Filter", "LLM + Prompt", "Response"],
    description: "Retrieval-augmented generation with similarity threshold filtering and hallucination control.",
  },
];

const Architecture = () => (
  <section id="architecture" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Architecture</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          How I design systems.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Patterns I've implemented and tested. Each diagram maps to a working project.
        </p>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-3">
        {diagrams.map((diagram, i) => (
          <AnimatedSection key={diagram.title} delay={i * 0.1}>
            <div className="glass-panel flex h-full flex-col p-8">
              <h3 className="mono-label mb-2">{diagram.title}</h3>
              <p className="mb-8 text-xs text-muted-foreground">{diagram.description}</p>
              <div className="flex flex-1 flex-col items-center gap-1.5">
                {diagram.nodes.map((node, j) => (
                  <motion.div
                    key={node}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: j * 0.1 + i * 0.15, duration: 0.5 }}
                    className="flex w-full flex-col items-center"
                  >
                    <div className="w-full rounded-lg border border-border/50 bg-background/70 px-4 py-3 text-center font-mono text-[11px] font-medium text-muted-foreground backdrop-blur-sm transition-all duration-300 hover:border-foreground/20 hover:bg-background hover:text-foreground">
                      {node}
                    </div>
                    {j < diagram.nodes.length - 1 && (
                      <div className="h-3 w-px bg-border/60" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Architecture;
