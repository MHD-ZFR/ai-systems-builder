import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    title: "Real-Time Data Pipeline",
    description: "End-to-end streaming pipeline processing millions of events with sub-second latency.",
    architecture: "API → Kafka → Spark → PostgreSQL",
    tech: ["Apache Kafka", "Spark", "Python", "PostgreSQL"],
  },
  {
    title: "AI Automation System",
    description: "Intelligent workflow automation connecting AI models to business processes.",
    architecture: "n8n → OpenAI API → Slack Automation",
    tech: ["n8n", "OpenAI", "REST APIs", "Node.js"],
  },
  {
    title: "Generative AI Knowledge Assistant",
    description: "RAG-powered assistant enabling natural language queries over enterprise knowledge bases.",
    architecture: "LLM → Vector Database → RAG Retrieval",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
  },
  {
    title: "Cloud Data Warehouse",
    description: "Scalable analytics platform processing terabytes of data for business intelligence.",
    architecture: "ETL Pipelines → BigQuery → Analytics Dashboards",
    tech: ["BigQuery", "Airflow", "dbt", "Looker"],
  },
  {
    title: "AI Data Analytics System",
    description: "Natural language interface to SQL databases with automated insight generation.",
    architecture: "Natural Language → SQL → Insight Dashboards",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Projects</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Selected work
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <AnimatedSection key={project.title} delay={i * 0.08} className={i === 4 ? "md:col-span-2" : ""}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-surface group relative flex h-full flex-col rounded-xl p-8"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-xl font-semibold text-foreground">{project.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-text-secondary opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
              <p className="mb-6 text-sm leading-relaxed text-text-secondary">{project.description}</p>
              <div className="mb-6 rounded-lg bg-background/50 p-4">
                <p className="font-mono text-xs text-text-secondary">{project.architecture}</p>
              </div>
              <div className="mt-auto flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-border px-3 py-1 text-xs text-text-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
