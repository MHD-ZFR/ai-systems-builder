import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    num: "01",
    title: "Real-Time Data Pipeline",
    description:
      "End-to-end streaming pipeline processing millions of events with sub-second latency. Designed for fault tolerance and horizontal scalability.",
    architecture: "API → Kafka → Spark → PostgreSQL",
    tech: ["Apache Kafka", "Spark", "Python", "PostgreSQL"],
    impact: "Millions of events/sec",
  },
  {
    num: "02",
    title: "AI Automation Workflow",
    description:
      "Intelligent workflow automation connecting AI models to business processes, replacing manual operations with self-healing pipelines.",
    architecture: "n8n → OpenAI API → Slack / Email Automation",
    tech: ["n8n", "OpenAI", "REST APIs", "Node.js"],
    impact: "10× operational efficiency",
  },
  {
    num: "03",
    title: "Generative AI Knowledge Assistant",
    description:
      "RAG-powered assistant enabling natural language queries over enterprise knowledge bases with contextual accuracy.",
    architecture: "LLM → Vector Database → RAG Retrieval",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    impact: "95% query accuracy",
  },
  {
    num: "04",
    title: "Cloud Data Warehouse",
    description:
      "Scalable analytics platform processing terabytes of data for business intelligence and decision-making.",
    architecture: "ETL Pipelines → BigQuery → Analytics Dashboards",
    tech: ["BigQuery", "Airflow", "dbt", "Looker"],
    impact: "Terabytes processed daily",
  },
  {
    num: "05",
    title: "AI Data Analytics System",
    description:
      "Natural language interface to SQL databases with automated insight generation and visual reporting.",
    architecture: "Natural Language → SQL → Insights Dashboard",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    impact: "Zero-code analytics",
  },
];

const Projects = () => (
  <section id="projects" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Selected Work</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Projects that ship.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Each project solves a real engineering problem — from data pipelines processing millions of events to AI systems that replace manual workflows.
        </p>
      </AnimatedSection>

      <div className="space-y-4">
        {projects.map((project, i) => (
          <AnimatedSection key={project.num} delay={i * 0.06}>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group cursor-pointer border-t border-border py-8 first:border-t-0 md:py-10"
            >
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                {/* Left: number + title */}
                <div className="flex items-baseline gap-4 md:w-1/3">
                  <span className="mono-label text-muted-foreground/40">
                    {project.num}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {project.title}
                  </h3>
                </div>

                {/* Center: description + architecture */}
                <div className="flex-1 space-y-4">
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="inline-block rounded-lg border border-border bg-card px-4 py-2.5">
                    <p className="font-mono text-[11px] text-muted-foreground">
                      {project.architecture}
                    </p>
                  </div>
                </div>

                {/* Right: impact + arrow */}
                <div className="flex items-center gap-4 md:w-1/5 md:justify-end">
                  <span className="text-xs font-medium text-muted-foreground">
                    {project.impact}
                  </span>
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Tech tags */}
              <div className="mt-4 flex flex-wrap gap-2 md:ml-[calc(33.333%+1rem)]">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground transition-colors group-hover:border-foreground/15"
                  >
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
