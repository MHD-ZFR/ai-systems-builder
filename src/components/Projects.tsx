import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const projects = [
  {
    num: "01",
    title: "Real-Time Data Pipeline",
    problem:
      "Legacy batch ETL delayed analytics by 6–8 hours, blocking time-sensitive business decisions.",
    architecture:
      "Kafka ingests events → Spark Structured Streaming transforms and enriches → PostgreSQL stores processed records for downstream dashboards.",
    tech: ["Apache Kafka", "Spark", "Python", "PostgreSQL"],
    metrics: [
      "~120k events/min throughput",
      "End-to-end latency ~2.1s",
      "3 Kafka brokers, 12 partitions",
      "~18 GB/day ingested",
    ],
  },
  {
    num: "02",
    title: "AI Automation Workflow",
    problem:
      "Manual ticket triage and status updates consumed ~15 hours/week of engineering ops time.",
    architecture:
      "Webhook triggers → n8n orchestrates branching logic → OpenAI classifies intent → routes to Slack channels or sends templated emails.",
    tech: ["n8n", "OpenAI", "REST APIs", "Node.js"],
    metrics: [
      "~400 automated tasks/day",
      "Avg response time ~1.8s per task",
      "Reduced manual ops by ~12 hrs/week",
      "Running on a single 2-vCPU instance",
    ],
  },
  {
    num: "03",
    title: "Generative AI Knowledge Assistant",
    problem:
      "Engineers spent 20+ min searching fragmented internal docs for answers to recurring questions.",
    architecture:
      "Documents chunked and embedded → stored in Pinecone → user query embedded → top-k retrieval → LLM generates grounded answer via FastAPI.",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    metrics: [
      "~1,200 doc chunks indexed",
      "Retrieval latency p95 ~320ms",
      "Answer accuracy ~91% on internal eval set",
      "~$0.04 avg cost per query",
    ],
  },
  {
    num: "04",
    title: "Cloud Data Warehouse",
    problem:
      "Siloed data across 5 source systems made cross-functional reporting impossible without manual joins.",
    architecture:
      "Airflow schedules extraction → dbt models transform and test → BigQuery serves analytics → Looker dashboards for stakeholders.",
    tech: ["BigQuery", "Airflow", "dbt", "Looker"],
    metrics: [
      "~2.4 TB processed daily",
      "38 dbt models, 95% test coverage",
      "Query p95 ~4.2s on 500M+ row tables",
      "~$280/month BigQuery cost",
    ],
  },
  {
    num: "05",
    title: "AI Data Analytics System",
    problem:
      "Non-technical stakeholders couldn't query databases without filing requests to the data team.",
    architecture:
      "Natural language input → GPT-4 generates SQL → executes against PostgreSQL → Streamlit renders charts and summary insights.",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    metrics: [
      "Supports ~60 table schemas",
      "SQL generation accuracy ~87%",
      "Avg query-to-chart time ~3.5s",
      "~200 queries/week from 12 users",
    ],
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
          Each project solves a specific engineering problem — described with real architecture decisions and production metrics.
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
              {/* Header row */}
              <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-12">
                <div className="flex items-baseline gap-4 md:w-1/4">
                  <span className="mono-label text-muted-foreground/40">
                    {project.num}
                  </span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {project.title}
                  </h3>
                </div>

                <div className="flex-1 space-y-5">
                  {/* Problem */}
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      Problem
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      {project.problem}
                    </p>
                  </div>

                  {/* Architecture */}
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      Architecture
                    </p>
                    <div className="inline-block rounded-lg border border-border bg-card px-4 py-2.5">
                      <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">
                        {project.architecture}
                      </p>
                    </div>
                  </div>

                  {/* Performance Metrics */}
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      Performance
                    </p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                      {project.metrics.map((m) => (
                        <p
                          key={m}
                          className="font-mono text-[11px] text-foreground/80"
                        >
                          {m}
                        </p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex md:w-8 md:justify-end md:pt-1">
                  <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>

              {/* Tech tags */}
              <div className="mt-5 flex flex-wrap gap-2 md:ml-[calc(25%+1rem)]">
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
