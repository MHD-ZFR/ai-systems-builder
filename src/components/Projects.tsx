import { motion } from "framer-motion";
import { ArrowUpRight, Github, Cloud, Shield, TrendingUp } from "lucide-react";
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
    deployment: {
      cloud: "GCP Compute Engine — 2× n2-standard-2",
      services: "Kafka (self-hosted), Spark on YARN, PostgreSQL 15",
      monitoring: "Prometheus + Grafana, PagerDuty alerts",
      cost: "~$310/month",
    },
    failureHandling: "Dead letter queue for malformed events. Kafka consumer commits after Spark write. Spark checkpointing to GCS.",
    scaling: "Horizontal via Kafka partitions + Spark executors. Current headroom: ~3× before scaling needed.",
    githubUrl: "#",
    repoFolders: ["/kafka-producer", "/spark-jobs", "/sql-schemas", "/monitoring"],
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
    deployment: {
      cloud: "Docker on GCP Compute Engine — 1× e2-medium",
      services: "n8n (self-hosted), OpenAI API, Slack API, SendGrid",
      monitoring: "n8n execution logs, Uptime Robot health checks",
      cost: "~$65/month + ~$40 OpenAI API",
    },
    failureHandling: "Retry logic with exponential backoff on API failures. Failed workflows queued and replayed. Slack alert on 3+ consecutive failures.",
    scaling: "Stateless workflows — horizontally scalable by adding n8n workers.",
    githubUrl: "#",
    repoFolders: ["/workflows", "/webhook-handlers", "/templates", "/scripts"],
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
      "Answer accuracy ~91% on eval set",
      "~$0.04 avg cost per query",
    ],
    deployment: {
      cloud: "GCP Cloud Run — auto-scaling 0→4 instances",
      services: "Pinecone (managed), OpenAI API, Cloud Storage for docs",
      monitoring: "Cloud Run metrics, custom accuracy dashboard",
      cost: "~$85/month + ~$30 Pinecone + OpenAI usage",
    },
    failureHandling: "Fallback to keyword search if embedding service unavailable. Circuit breaker on OpenAI API. Response caching for repeated queries.",
    scaling: "Cloud Run auto-scales on request count. Pinecone scales independently. Embedding batch pipeline runs nightly.",
    githubUrl: "#",
    repoFolders: ["/embeddings", "/retrieval", "/api", "/eval"],
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
      "Query p95 ~4.2s on 500M+ rows",
      "~$280/month BigQuery cost",
    ],
    deployment: {
      cloud: "GCP — Cloud Composer (managed Airflow), BigQuery, Looker",
      services: "Cloud Storage (staging), Pub/Sub (event triggers), Cloud Scheduler",
      monitoring: "Airflow DAG SLAs, dbt test results, BigQuery slot utilization",
      cost: "~$280 BigQuery + ~$350 Composer",
    },
    failureHandling: "Airflow task retries with 5-min backoff. dbt tests gate production models. Incremental loads with merge keys prevent duplicates.",
    scaling: "BigQuery auto-scales compute. Partitioned + clustered tables for cost control. Airflow parallelism tuned to 16 concurrent tasks.",
    githubUrl: "#",
    repoFolders: ["/dags", "/dbt-models", "/schemas", "/looker-views"],
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
    deployment: {
      cloud: "GCP Cloud Run for API, Cloud SQL for PostgreSQL",
      services: "OpenAI API, Streamlit Cloud, Cloud SQL Proxy",
      monitoring: "Query logs with accuracy tracking, error rate dashboard",
      cost: "~$120/month + OpenAI usage",
    },
    failureHandling: "SQL validation layer rejects dangerous queries (DROP, DELETE). Timeout at 10s for long-running queries. Fallback to suggested queries on generation failure.",
    scaling: "Read replicas for query load. Schema metadata cached in Redis. Prompt engineering reduces token usage by ~40%.",
    githubUrl: "#",
    repoFolders: ["/nl-to-sql", "/streamlit-app", "/schema-cache", "/prompts"],
  },
];

const Projects = () => (
  <section id="projects" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Selected Work</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Systems in production.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Each project is described as an engineering case study — problem, architecture,
          infrastructure, failure handling, and measured performance.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.num} delay={i * 0.06}>
            <motion.div
              whileHover={{ x: 4 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group border-t border-border py-8 first:border-t-0 md:py-10"
            >
              {/* Header */}
              <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
                <div className="flex items-baseline gap-4">
                  <span className="mono-label text-muted-foreground/40">{project.num}</span>
                  <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                    {project.title}
                  </h3>
                </div>
                <a href={project.githubUrl} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground">
                  <Github className="h-3 w-3" /> View Source
                  <ArrowUpRight className="h-3 w-3 opacity-40 transition-all group-hover:opacity-100" />
                </a>
              </div>

              <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
                {/* Left column: Problem + Architecture + Metrics */}
                <div className="space-y-5">
                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Problem</p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
                  </div>

                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Architecture</p>
                    <div className="rounded-lg border border-border bg-card px-4 py-2.5">
                      <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">{project.architecture}</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Performance</p>
                    <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
                      {project.metrics.map((m) => (
                        <p key={m} className="font-mono text-[11px] text-foreground/80">{m}</p>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right column: Deployment + Failure + Scaling + Repo */}
                <div className="space-y-5">
                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      <Cloud className="mr-1 inline h-3 w-3" /> Deployment
                    </p>
                    <div className="space-y-1.5 text-[12px] text-muted-foreground">
                      <p><span className="text-foreground/60">Cloud:</span> {project.deployment.cloud}</p>
                      <p><span className="text-foreground/60">Services:</span> {project.deployment.services}</p>
                      <p><span className="text-foreground/60">Monitoring:</span> {project.deployment.monitoring}</p>
                      <p><span className="text-foreground/60">Cost:</span> {project.deployment.cost}</p>
                    </div>
                  </div>

                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      <Shield className="mr-1 inline h-3 w-3" /> Failure Handling
                    </p>
                    <p className="text-[12px] leading-relaxed text-muted-foreground">{project.failureHandling}</p>
                  </div>

                  <div>
                    <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
                      <TrendingUp className="mr-1 inline h-3 w-3" /> Scaling
                    </p>
                    <p className="text-[12px] leading-relaxed text-muted-foreground">{project.scaling}</p>
                  </div>

                  <div>
                    <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Repository</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.repoFolders.map((f) => (
                        <span key={f} className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tech tags */}
              <div className="mt-5 flex flex-wrap gap-2">
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
