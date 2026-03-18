export interface Project {
  num: string;
  title: string;
  problem: string;
  architecture: string;
  tech: string[];
  metrics: string[];
  deployment: {
    cloud: string;
    services: string;
    monitoring: string;
    cost: string;
  };
  failureHandling: string;
  scaling: string;
  githubUrl: string;
  repoFolders: string[];
  challenges: string[];
  tradeoffs: string[];
  improvements: string[];
  proof: string[];
}

export const projects: Project[] = [
  {
    num: "01",
    title: "Real-Time Data Pipeline",
    problem:
      "Batch ETL ran every 6 hours. Business needed sub-minute freshness for fraud detection dashboards.",
    architecture:
      "Kafka ingests events → Spark Structured Streaming transforms → PostgreSQL stores for dashboards.",
    tech: ["Apache Kafka", "Spark", "Python", "PostgreSQL"],
    metrics: [
      "~120k events/min throughput",
      "End-to-end latency ~2.1s",
      "3 brokers, 12 partitions",
      "~18 GB/day ingested",
    ],
    deployment: {
      cloud: "GCP Compute Engine — 2× n2-standard-2",
      services: "Kafka (self-hosted), Spark on YARN, PostgreSQL 15",
      monitoring: "Prometheus + Grafana, PagerDuty alerts",
      cost: "~$310/month",
    },
    failureHandling:
      "Dead letter queue for malformed events. Consumer commits after Spark write. Checkpointing to GCS.",
    scaling:
      "Horizontal via Kafka partitions + Spark executors. Current headroom ~3× before scaling needed.",
    githubUrl: "#",
    repoFolders: ["/kafka-producer", "/spark-jobs", "/sql-schemas", "/monitoring"],
    challenges: [
      "Initial setup had 6 partitions. Consumer lag hit 45 seconds during peak. Increased to 12 partitions and rebalanced consumer groups — lag dropped to ~3s.",
      "Spark checkpointing to local disk caused data loss on node restart. Moved checkpoints to GCS.",
      "PostgreSQL COPY inserts blocked reads during bulk loads. Switched to partitioned tables with concurrent inserts on separate partitions.",
      "Kafka broker ran out of disk after 3 days — default retention was 7 days. Set retention to 48 hours, added disk usage alerts at 70%.",
    ],
    tradeoffs: [
      "Kafka over Pub/Sub: needed consumer group rebalancing control and exactly-once semantics. Pub/Sub was simpler but less configurable.",
      "PostgreSQL over BigQuery: dashboards needed sub-second reads. BigQuery query latency starts at ~2s minimum.",
      "Self-hosted Kafka over Confluent Cloud: cost was $310/month vs ~$800/month. Accepted the ops overhead.",
    ],
    improvements: [
      "Single-region deployment. Would add a second region with MirrorMaker 2 for failover.",
      "No schema registry. Adding Confluent Schema Registry would catch breaking changes before they hit Spark.",
      "Spark runs on YARN — migration to Kubernetes would simplify scaling and deployment.",
    ],
    proof: [
      "Grafana dashboard tracks consumer lag, throughput per partition, and Spark batch duration.",
      "PagerDuty alert fires if consumer lag exceeds 30 seconds for 5 minutes.",
      "Prometheus metrics exported from Kafka JMX and Spark REST API.",
    ],
  },
  {
    num: "02",
    title: "AI Automation Workflow",
    problem:
      "Ops team spent ~15 hours/week manually triaging tickets and sending status updates. Needed automated routing.",
    architecture:
      "Webhook triggers → n8n orchestrates branching → OpenAI classifies intent → routes to Slack or sends email.",
    tech: ["n8n", "OpenAI", "REST APIs", "Node.js"],
    metrics: [
      "~400 tasks/day automated",
      "Avg response ~1.8s per task",
      "Manual ops reduced by ~12 hrs/week",
      "Runs on 1× 2-vCPU instance",
    ],
    deployment: {
      cloud: "Docker on GCP Compute Engine — 1× e2-medium",
      services: "n8n (self-hosted), OpenAI API, Slack API, SendGrid",
      monitoring: "n8n execution logs, Uptime Robot health checks",
      cost: "~$65/month + ~$40 OpenAI API",
    },
    failureHandling:
      "Retry with exponential backoff on API failures. Failed workflows queued and replayed. Slack alert on 3+ consecutive failures.",
    scaling:
      "Stateless workflows — horizontally scalable by adding n8n workers.",
    githubUrl: "#",
    repoFolders: ["/workflows", "/webhook-handlers", "/templates", "/scripts"],
    challenges: [
      "OpenAI API returned 429 rate limits during spikes. Added request queuing with 200ms delay between calls.",
      "n8n crashed silently when webhook payload exceeded 1MB. Added payload size validation at the ingress layer.",
      "First version used GPT-4 for all classifications. Switched to GPT-3.5-turbo for simple routing — cut API cost by 60%.",
      "Slack API rate limit (1 msg/sec per channel) caused dropped notifications. Batched messages into digests every 5 minutes.",
    ],
    tradeoffs: [
      "n8n over Airflow: needed visual workflow editing for non-engineers. Airflow is more powerful but requires Python for everything.",
      "Self-hosted n8n over n8n Cloud: saved ~$120/month. Accepted responsibility for uptime.",
      "OpenAI over fine-tuned model: faster iteration, no training pipeline. Accepted higher per-query cost.",
    ],
    improvements: [
      "No persistent queue between webhook and n8n. Would add Redis or SQS to prevent data loss during restarts.",
      "Classification prompt is a single template. Would build a prompt versioning system to track accuracy across changes.",
      "Single instance — no failover. Would deploy a second instance behind a load balancer.",
    ],
    proof: [
      "n8n execution logs show per-workflow success rate and duration.",
      "Uptime Robot tracks endpoint availability with 1-minute checks.",
      "Weekly Slack digest reports automation stats: tasks processed, failures, avg latency.",
    ],
  },
  {
    num: "03",
    title: "Generative AI Knowledge Assistant",
    problem:
      "Engineers searched Notion, Confluence, and Drive for 20+ minutes per question. Needed a single search interface.",
    architecture:
      "Documents chunked and embedded → Pinecone stores vectors → query embedded → top-k retrieval → LLM generates answer via FastAPI.",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    metrics: [
      "~1,200 doc chunks indexed",
      "Retrieval p95 ~320ms",
      "Answer accuracy ~91% on eval set",
      "~$0.04 avg cost per query",
    ],
    deployment: {
      cloud: "GCP Cloud Run — auto-scaling 0→4 instances",
      services: "Pinecone (managed), OpenAI API, Cloud Storage for docs",
      monitoring: "Cloud Run metrics, custom accuracy dashboard",
      cost: "~$85/month + ~$30 Pinecone + OpenAI usage",
    },
    failureHandling:
      "Fallback to keyword search if embedding service is down. Circuit breaker on OpenAI API. Response caching for repeated queries.",
    scaling:
      "Cloud Run auto-scales on request count. Pinecone scales independently. Embedding pipeline runs nightly.",
    githubUrl: "#",
    repoFolders: ["/embeddings", "/retrieval", "/api", "/eval"],
    challenges: [
      "First chunking strategy split mid-sentence. Switched to recursive text splitter with 200-token chunks and 50-token overlap.",
      "Pinecone cold starts added ~800ms on first query after idle. Kept a warm-up cron hitting the index every 10 minutes.",
      "LLM hallucinated answers when retrieval returned low-relevance chunks. Added a relevance score threshold — below 0.72 returns 'no confident answer found'.",
      "Embedding pipeline took 4 hours for 1,200 chunks. Parallelized with asyncio — dropped to 45 minutes.",
    ],
    tradeoffs: [
      "Pinecone over pgvector: managed service, no index tuning needed. pgvector would save ~$30/month but adds ops work.",
      "Cloud Run over a persistent server: pay-per-request model fits low query volume (~200/week). Would switch if volume 10×'d.",
      "GPT-4 over GPT-3.5: accuracy jumped from ~78% to ~91%. Accepted the 10× cost increase.",
    ],
    improvements: [
      "Nightly batch embedding misses same-day doc updates. Would add a webhook trigger for real-time re-embedding.",
      "Single embedding model (ada-002). Would test Cohere or open-source models to reduce vendor lock-in.",
      "No user feedback loop. Would add thumbs-up/down to track answer quality over time.",
    ],
    proof: [
      "Custom eval dashboard compares LLM answers against ground-truth for 50 test questions.",
      "Cloud Run metrics show request count, latency percentiles, and cold start frequency.",
      "Query logs stored in BigQuery for weekly accuracy reviews.",
    ],
  },
  {
    num: "04",
    title: "Cloud Data Warehouse",
    problem:
      "Data lived in 5 separate systems. Cross-team reporting required manual exports and spreadsheet joins.",
    architecture:
      "Airflow schedules extraction → dbt transforms and tests → BigQuery serves analytics → Looker dashboards.",
    tech: ["BigQuery", "Airflow", "dbt", "Looker"],
    metrics: [
      "~2.4 TB processed daily",
      "38 dbt models, 95% test coverage",
      "Query p95 ~4.2s on 500M+ rows",
      "~$280/month BigQuery cost",
    ],
    deployment: {
      cloud: "GCP — Cloud Composer (Airflow), BigQuery, Looker",
      services: "Cloud Storage (staging), Pub/Sub (triggers), Cloud Scheduler",
      monitoring: "Airflow DAG SLAs, dbt test results, BigQuery slot utilization",
      cost: "~$280 BigQuery + ~$350 Composer",
    },
    failureHandling:
      "Airflow retries with 5-min backoff. dbt tests gate production models. Incremental loads with merge keys prevent duplicates.",
    scaling:
      "BigQuery auto-scales compute. Partitioned + clustered tables for cost control. Airflow parallelism set to 16.",
    githubUrl: "#",
    repoFolders: ["/dags", "/dbt-models", "/schemas", "/looker-views"],
    challenges: [
      "First dbt run on full dataset took 3 hours. Added incremental models with merge keys — dropped to 20 minutes.",
      "Airflow DAG had 40+ tasks in a single file. Split into sub-DAGs with clear dependencies — reduced debugging time by half.",
      "BigQuery costs spiked to $600/month from unpartitioned tables. Added date partitioning and clustering — cost dropped to ~$280.",
      "One source system changed its API schema without notice. Added schema drift detection in the extraction layer with Slack alerts.",
    ],
    tradeoffs: [
      "BigQuery over Redshift: serverless pricing fit the variable workload. Redshift reserved instances would be cheaper at steady state.",
      "Cloud Composer over self-hosted Airflow: 2× the cost (~$350 vs ~$150) but zero ops overhead.",
      "Looker over Metabase: better governed metrics layer. Metabase was faster to set up but lacked version-controlled definitions.",
    ],
    improvements: [
      "No real-time layer. Would add Pub/Sub → Dataflow for streaming inserts alongside the batch pipeline.",
      "dbt tests run after full model build. Would add pre-build source freshness checks.",
      "Single-project BigQuery setup. Would move to a multi-project structure for better cost attribution.",
    ],
    proof: [
      "Airflow UI tracks DAG run duration, task success rates, and SLA misses.",
      "dbt generates test reports after every run — stored in Cloud Storage.",
      "BigQuery admin dashboard monitors slot utilization and per-query cost.",
    ],
  },
  {
    num: "05",
    title: "AI Data Analytics System",
    problem:
      "Non-technical stakeholders filed tickets to the data team for every ad-hoc query. Turnaround was 1–2 days.",
    architecture:
      "Natural language → GPT-4 generates SQL → executes against PostgreSQL → Streamlit renders charts.",
    tech: ["GPT-4", "PostgreSQL", "Streamlit", "Python"],
    metrics: [
      "Supports ~60 table schemas",
      "SQL accuracy ~87%",
      "Avg query-to-chart ~3.5s",
      "~200 queries/week from 12 users",
    ],
    deployment: {
      cloud: "GCP Cloud Run for API, Cloud SQL for PostgreSQL",
      services: "OpenAI API, Streamlit Cloud, Cloud SQL Proxy",
      monitoring: "Query logs with accuracy tracking, error rate dashboard",
      cost: "~$120/month + OpenAI usage",
    },
    failureHandling:
      "SQL validation rejects DROP, DELETE, and UPDATE. 10s timeout on long queries. Fallback to suggested queries on generation failure.",
    scaling:
      "Read replicas for query load. Schema metadata cached in Redis. Prompt engineering cut token usage by ~40%.",
    githubUrl: "#",
    repoFolders: ["/nl-to-sql", "/streamlit-app", "/schema-cache", "/prompts"],
    challenges: [
      "GPT-4 generated JOINs on wrong columns for tables with similar names. Added explicit column descriptions to the schema prompt — accuracy went from ~72% to ~87%.",
      "Streamlit reloaded the entire page on each query. Switched to st.fragment for partial re-renders.",
      "Users asked ambiguous questions like 'show me sales'. Added a clarification step that asks the user to pick a time range and metric.",
      "Redis cache grew unbounded. Added TTL of 1 hour for schema metadata and LRU eviction for query results.",
    ],
    tradeoffs: [
      "GPT-4 over fine-tuned model: no training data needed, works across all 60 schemas. Fine-tuning would reduce per-query cost but requires maintenance.",
      "PostgreSQL over DuckDB: existing infrastructure, read replicas available. DuckDB would be faster for analytics but adds another system.",
      "Streamlit over custom React frontend: 10× faster to build. Accepted limited UI customization.",
    ],
    improvements: [
      "No query result caching beyond Redis TTL. Would add a materialized view layer for frequent queries.",
      "SQL validation is regex-based. Would switch to a proper SQL parser for better coverage.",
      "Single-tenant setup. Would add user-level query limits and cost tracking.",
    ],
    proof: [
      "Query logs in PostgreSQL track every generated SQL, execution time, and user rating.",
      "Weekly accuracy report compares generated SQL against manually verified queries.",
      "Error rate dashboard in Grafana shows failed generations and timeout frequency.",
    ],
  },
];
