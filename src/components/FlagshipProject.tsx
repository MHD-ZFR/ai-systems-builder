import { motion } from "framer-motion";
import { Github, ExternalLink, Server, Database, BarChart3, AlertTriangle, TrendingUp, Brain } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const pipelineStages = [
  { label: "Twitter API", detail: "OAuth 2.0 streaming endpoint. Filtered by keywords, sampled for dev use.", icon: ExternalLink },
  { label: "Apache Kafka", detail: "3 brokers, 12 partitions, replication factor 2. Consumer lag monitored via Prometheus.", icon: Server },
  { label: "Spark Streaming", detail: "Structured Streaming with 10s micro-batches. Deduplication, schema validation, basic sentiment tagging.", icon: BarChart3 },
  { label: "ClickHouse", detail: "MergeTree engine, partitioned by day. Tested with ~50M rows. Designed to scale to billions.", icon: Database },
  { label: "Grafana Dashboard", detail: "Panels refreshing every 10s. Trending topics, sentiment distribution, volume time-series.", icon: TrendingUp },
];

const repoStructure = [
  { folder: "/kafka-producer", desc: "Twitter ingestion, Avro serialization" },
  { folder: "/spark-streaming", desc: "Stream processing, transformations" },
  { folder: "/data-storage", desc: "ClickHouse schemas, migrations" },
  { folder: "/dashboard", desc: "Grafana provisioning, panel configs" },
  { folder: "/infra", desc: "Docker Compose, environment configs" },
  { folder: "/monitoring", desc: "Prometheus rules, alerting" },
];

const keyFiles = [
  "producer.py",
  "streaming_job.py",
  "schema.sql",
  "docker-compose.yml",
  "prometheus.yml",
];

const commits = [
  { hash: "a3f8c21", msg: "feat: add backpressure handling for Kafka consumer lag", time: "2 days ago" },
  { hash: "91be4d7", msg: "fix: ClickHouse partition pruning on timestamp queries", time: "5 days ago" },
  { hash: "c72a9e3", msg: "perf: reduce Spark checkpoint interval to 30s", time: "1 week ago" },
  { hash: "48df1b0", msg: "feat: add dead letter queue for malformed events", time: "2 weeks ago" },
];

const FlagshipProject = () => (
  <section id="flagship" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      {/* Header */}
      <AnimatedSection>
        <p className="mono-label mb-6">Flagship System</p>
        <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Stream Processing Pipeline
        </h2>
        <p className="mb-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          End-to-end streaming pipeline built as a learning project. Ingests Twitter data through Kafka,
          processes with Spark Structured Streaming, stores in ClickHouse, and renders real-time dashboards.
          Tested with simulated workloads and sample datasets.
        </p>
        <div className="mb-16 flex flex-wrap gap-3">
          <a href="#" className="glass-chip inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-medium text-foreground">
            <Github className="h-3 w-3" /> Repository
          </a>
          <a href="#" className="glass-chip inline-flex items-center gap-1.5 px-4 py-2 text-[11px] font-medium text-foreground">
            <ExternalLink className="h-3 w-3" /> Screenshots
          </a>
        </div>
      </AnimatedSection>

      {/* Pipeline Architecture */}
      <AnimatedSection delay={0.1}>
        <div className="mb-20">
          <p className="mono-label mb-8">Pipeline Architecture</p>
          <div className="space-y-0">
            {pipelineStages.map((stage, i) => {
              const Icon = stage.icon;
              return (
                <motion.div
                  key={stage.label}
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="relative"
                >
                  {i < pipelineStages.length - 1 && (
                    <div className="absolute left-[19px] top-[56px] h-[calc(100%-32px)] w-px bg-border" />
                  )}
                  <div className="flex gap-5 py-4">
                    <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-card">
                      <Icon className="h-4 w-4 text-muted-foreground" />
                    </div>
                    <div className="flex-1 pt-0.5">
                      <h4 className="text-sm font-semibold text-foreground">{stage.label}</h4>
                      <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{stage.detail}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </AnimatedSection>

      {/* System Details Grid */}
      <div className="mb-20 grid gap-6 md:grid-cols-2">
        {/* Deployment */}
        <AnimatedSection delay={0.15}>
          <div className="rounded-2xl border border-border bg-card p-7">
            <p className="mono-label mb-5">Deployment & Infrastructure</p>
            <div className="space-y-4 text-sm">
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Cloud</p>
                <p className="text-muted-foreground">GCP Compute Engine — 2× e2-standard-2 instances</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Services</p>
                <p className="text-muted-foreground">Kafka (self-managed), Spark on YARN, ClickHouse single-node, Grafana</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Containerization</p>
                <p className="text-muted-foreground">Docker Compose for local dev. Designed for Terraform provisioning.</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Monitoring</p>
                <p className="text-muted-foreground">Prometheus + Grafana. Alerts on consumer lag {">"} 5k, Spark job failures, disk usage {">"} 80%</p>
              </div>
              <div>
                <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Cost</p>
                <p className="text-muted-foreground">~$180/month dev infrastructure</p>
              </div>
            </div>
          </div>
        </AnimatedSection>

        {/* Failure Handling & Scaling */}
        <AnimatedSection delay={0.2}>
          <div className="rounded-2xl border border-border bg-card p-7">
            <div className="mb-8">
              <p className="mono-label mb-5">
                <AlertTriangle className="mr-1.5 inline h-3 w-3" />
                Failure Handling
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <p className="text-muted-foreground">Dead letter queue for malformed events — logged for manual inspection</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <p className="text-muted-foreground">Kafka consumer offsets committed after successful Spark write — at-least-once delivery</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <p className="text-muted-foreground">Spark checkpointing to GCS every 30s for stateful recovery</p>
                </div>
              </div>
            </div>

            <div>
              <p className="mono-label mb-5">
                <TrendingUp className="mr-1.5 inline h-3 w-3" />
                Scaling Strategy
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <p className="text-muted-foreground">Horizontal: add Kafka partitions + Spark executors for throughput</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <p className="text-muted-foreground">ClickHouse sharding designed for {">"} 500M rows</p>
                </div>
                <div className="flex gap-3">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-muted-foreground/40" />
                  <p className="text-muted-foreground">Currently tested at moderate throughput with room for growth</p>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>

      {/* Performance Metrics */}
      <AnimatedSection delay={0.1}>
        <div className="mb-20">
          <p className="mono-label mb-8">Performance Metrics (Test Environment)</p>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { value: "~8k", label: "Events/min (simulated)" },
              { value: "~2.1s", label: "End-to-end latency" },
              { value: "~180ms", label: "ClickHouse p95 query" },
              { value: "50M+", label: "Rows tested" },
            ].map((m) => (
              <div key={m.label} className="bg-background p-6">
                <p className="text-2xl font-bold tracking-tight text-foreground">{m.value}</p>
                <p className="mt-1 text-[11px] text-muted-foreground">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </AnimatedSection>

      {/* Sentiment Analysis — AI layer */}
      <AnimatedSection delay={0.12}>
        <div className="mb-20 rounded-2xl border border-border bg-card p-7">
          <p className="mono-label mb-5">
            <Brain className="mr-1.5 inline h-3 w-3" />
            AI Layer: Sentiment Analysis
          </p>
          <div className="grid gap-5 md:grid-cols-2">
            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Approach</p>
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                Each tweet is classified as positive / negative / neutral during the Spark processing stage.
                Uses a lightweight TextBlob model for throughput. Considered fine-tuned BERT but latency budget was too tight for streaming.
              </p>
            </div>
            <div>
              <p className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Trade-off</p>
              <p className="text-[12px] leading-relaxed text-muted-foreground">
                TextBlob accuracy is lower than transformer models (~68% vs ~85%) but processes in {"<"}5ms per tweet.
                For dashboard-level aggregation, the accuracy trade-off is acceptable. Would upgrade to a distilled BERT model if per-tweet accuracy mattered.
              </p>
            </div>
          </div>
        </div>
      </AnimatedSection>

      {/* GitHub Credibility */}
      <AnimatedSection delay={0.15}>
        <div className="mb-8">
          <p className="mono-label mb-8">
            <Github className="mr-1.5 inline h-3 w-3" />
            Repository Structure
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Directories</p>
              <div className="space-y-2.5">
                {repoStructure.map((r) => (
                  <div key={r.folder} className="flex items-baseline gap-3">
                    <span className="font-mono text-[12px] font-medium text-foreground">{r.folder}</span>
                    <span className="text-[11px] text-muted-foreground">— {r.desc}</span>
                  </div>
                ))}
              </div>

              <p className="mb-3 mt-6 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Key Files</p>
              <div className="flex flex-wrap gap-2">
                {keyFiles.map((f) => (
                  <span key={f} className="rounded-md border border-border bg-background px-2.5 py-1 font-mono text-[11px] text-muted-foreground">
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6">
              <p className="mb-4 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">Recent Commits</p>
              <div className="space-y-3">
                {commits.map((c) => (
                  <div key={c.hash} className="flex gap-3">
                    <span className="shrink-0 font-mono text-[11px] text-muted-foreground/50">{c.hash}</span>
                    <div className="flex-1">
                      <p className="text-[12px] leading-snug text-foreground">{c.msg}</p>
                      <p className="mt-0.5 text-[10px] text-muted-foreground">{c.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default FlagshipProject;
