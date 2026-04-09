export interface AiDesign {
  promptStrategy: string;
  ragDetails?: string;
  relevanceFiltering?: string;
  hallucinationControl?: string;
  evaluation: string;
  optimization: string;
}

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
  aiDesign?: AiDesign;
}

export const projects: Project[] = [
  {
    num: "01",
    title: "Real-Time Data Pipeline",
    problem:
      "Batch ETL ran every 6 hours. Needed sub-minute freshness for a fraud detection dashboard prototype.",
    architecture:
      "Kafka ingests events → Spark Structured Streaming transforms → PostgreSQL stores → Grafana renders.",
    tech: ["Apache Kafka", "Spark", "Python", "PostgreSQL"],
    metrics: [
      "Tested at ~8k events/min on sample data",
      "End-to-end latency ~2.1s",
      "3 brokers, 12 partitions",
      "~1.2 GB/day on test workloads",
    ],
    deployment: {
      cloud: "GCP Compute Engine — 2× e2-standard-2",
      services: "Kafka (self-hosted), Spark on YARN, PostgreSQL 15",
      monitoring: "Prometheus + Grafana for consumer lag and throughput",
      cost: "~$180/month on dev infrastructure",
    },
    failureHandling:
      "Dead letter queue for malformed events. Consumer commits after successful Spark write. Checkpoints to GCS every 30s.",
    scaling:
      "Designed for horizontal scaling via Kafka partitions + Spark executors. Current setup handles ~3× headroom before needing additional nodes.",
    githubUrl: "#",
    repoFolders: ["/kafka-producer", "/spark-jobs", "/sql-schemas", "/monitoring"],
    challenges: [
      "Started with 6 partitions — consumer lag hit 45s during simulated peak. Increased to 12 partitions and rebalanced consumer groups. Lag dropped to ~3s.",
      "Spark checkpointing to local disk caused state loss on restart. Moved to GCS.",
      "PostgreSQL COPY inserts blocked reads. Switched to partitioned tables with concurrent inserts.",
      "Kafka broker ran out of disk after 3 days with default 7-day retention. Set to 48 hours, added disk alerts at 70%.",
    ],
    tradeoffs: [
      "Kafka over Pub/Sub: needed consumer group rebalancing control. Pub/Sub simpler but less configurable.",
      "PostgreSQL over BigQuery: dashboards needed sub-second reads. BigQuery starts at ~2s minimum.",
      "Self-hosted Kafka: ~$180/month vs ~$600+ for Confluent Cloud. Accepted the ops overhead.",
    ],
    improvements: [
      "Single-region only. Would add MirrorMaker 2 for cross-region failover.",
      "No schema registry yet. Would add Confluent Schema Registry for breaking change detection.",
      "Spark on YARN — would migrate to Kubernetes for simpler scaling.",
    ],
    proof: [
      "Grafana dashboard tracks consumer lag, throughput per partition, and Spark batch duration.",
      "Prometheus metrics exported from Kafka JMX and Spark REST API.",
      "Load tested with synthetic event generator at controlled throughput levels.",
    ],
  },
  {
    num: "02",
    title: "AI Automation Workflow",
    problem:
      "Ops team spent ~15 hours/week manually triaging support tickets and sending status updates.",
    architecture:
      "Webhook → n8n orchestrates branching → OpenAI classifies intent → routes to Slack or sends email.",
    tech: ["n8n", "OpenAI", "REST APIs", "Node.js"],
    metrics: [
      "~120 tasks/day automated in testing",
      "Avg classification latency ~1.4s",
      "Manual work reduced by ~10 hrs/week (estimated)",
      "Runs on 1× 2-vCPU instance",
    ],
    deployment: {
      cloud: "Docker on GCP Compute Engine — 1× e2-medium",
      services: "n8n (self-hosted), OpenAI API, Slack API, SendGrid",
      monitoring: "n8n execution logs, Uptime Robot health checks",
      cost: "~$65/month infra + ~$25 OpenAI API",
    },
    failureHandling:
      "Retry with exponential backoff on API failures. Failed workflows queued and replayed. Slack alert on 3+ consecutive failures.",
    scaling:
      "Stateless workflows — designed for horizontal scaling by adding n8n workers.",
    githubUrl: "#",
    repoFolders: ["/workflows", "/webhook-handlers", "/prompts", "/scripts"],
    challenges: [
      "OpenAI API returned 429 rate limits during burst tests. Added request queuing with 200ms delay between calls.",
      "n8n crashed when webhook payload exceeded 1MB. Added payload size validation at ingress.",
      "Initial version used GPT-4 for all classifications. Switched to GPT-3.5-turbo for simple routing — cut API cost by ~60%.",
      "Slack API rate limit (1 msg/sec per channel) caused dropped notifications. Batched messages into digests every 5 minutes.",
    ],
    tradeoffs: [
      "n8n over Airflow: needed visual workflow editing for non-engineers. Airflow is more powerful but requires Python for everything.",
      "Self-hosted n8n over cloud: saved ~$120/month. Accepted uptime responsibility.",
      "OpenAI API over fine-tuned model: faster iteration, no training pipeline. Accepted higher per-query cost.",
    ],
    improvements: [
      "No persistent queue between webhook and n8n. Would add Redis or SQS to prevent message loss during restarts.",
      "Classification prompt is a single template. Would build prompt versioning to track accuracy across changes.",
      "Single instance, no failover. Would deploy behind a load balancer.",
    ],
    proof: [
      "n8n execution logs show per-workflow success rate and duration.",
      "Uptime Robot tracks endpoint availability with 1-minute checks.",
      "Weekly report aggregates: tasks processed, failures, avg latency.",
    ],
    aiDesign: {
      promptStrategy:
        "System prompt defines role as a ticket classifier with strict output schema (JSON). Few-shot examples embedded for each category. Temperature set to 0.1 to reduce randomness.",
      hallucinationControl:
        "Output constrained to predefined category enum. If confidence score < 0.6, ticket is flagged for manual review instead of auto-routing.",
      evaluation:
        "Tested on 200 labeled tickets. Classification accuracy: ~89%. Misclassifications mostly in ambiguous 'billing vs. refund' edge cases.",
      optimization:
        "Switched simple routing from GPT-4 to GPT-3.5-turbo — latency dropped from ~2.8s to ~1.4s, cost reduced ~60%. GPT-4 reserved for complex multi-intent tickets only.",
    },
  },
  {
    num: "03",
    title: "RAG Knowledge Assistant",
    problem:
      "Internal docs spread across Notion, Confluence, and Google Drive. Engineers spent ~20 min per question searching across tools.",
    architecture:
      "Documents chunked → embedded with ada-002 → stored in Pinecone → user query embedded → top-k retrieval → GPT-4 generates answer via FastAPI.",
    tech: ["LangChain", "Pinecone", "OpenAI", "FastAPI"],
    metrics: [
      "~1,200 doc chunks indexed",
      "Retrieval p95 ~320ms",
      "Answer accuracy ~84% on 50-question eval set",
      "~$0.04 avg cost per query",
    ],
    deployment: {
      cloud: "GCP Cloud Run — auto-scaling 0→3 instances",
      services: "Pinecone (starter tier), OpenAI API, Cloud Storage for source docs",
      monitoring: "Cloud Run metrics, custom accuracy tracking spreadsheet",
      cost: "~$45/month Cloud Run + ~$30 Pinecone + OpenAI per-query",
    },
    failureHandling:
      "Fallback to keyword search if embedding service is unavailable. Circuit breaker on OpenAI API with 3 retries. Response caching for repeated queries (Redis, 1hr TTL).",
    scaling:
      "Cloud Run auto-scales on request count. Pinecone scales independently. Embedding pipeline runs as a batch job.",
    githubUrl: "#",
    repoFolders: ["/embeddings", "/retrieval", "/api", "/eval"],
    challenges: [
      "First chunking strategy split mid-sentence. Switched to recursive text splitter with 200-token chunks and 50-token overlap — retrieval relevance improved noticeably.",
      "Pinecone cold starts added ~800ms on first query after idle. Added a warm-up cron every 10 minutes.",
      "LLM hallucinated when retrieval returned low-relevance chunks. Added a similarity score threshold — below 0.72 returns 'I don't have enough context to answer this.'",
      "Embedding 1,200 chunks sequentially took ~4 hours. Parallelized with asyncio batch calls — dropped to ~45 minutes.",
    ],
    tradeoffs: [
      "Pinecone over pgvector: managed service, no index tuning needed. pgvector would save ~$30/month but adds operational complexity.",
      "Cloud Run over a persistent server: pay-per-request fits low query volume (~50/week currently). Would switch to a VM if volume grew 10×.",
      "GPT-4 over GPT-3.5: accuracy on eval set jumped from ~71% to ~84%. Accepted the higher per-query cost.",
    ],
    improvements: [
      "Batch embedding misses same-day doc updates. Would add a webhook trigger for near-real-time re-embedding.",
      "Single embedding model (ada-002). Would benchmark Cohere embed-v3 or open-source alternatives to reduce vendor lock-in.",
      "No user feedback loop yet. Would add thumbs-up/down to track answer quality over time and build a ground-truth dataset.",
      "Would experiment with re-ranking (e.g., Cohere Rerank) to improve retrieval precision before passing to LLM.",
    ],
    proof: [
      "50-question eval set with manually written ground-truth answers. Compared via GPT-4 judge scoring.",
      "Cloud Run metrics show request count, latency percentiles, and cold start frequency.",
      "Query logs stored in a spreadsheet for periodic accuracy reviews.",
    ],
    aiDesign: {
      promptStrategy:
        "System prompt instructs the model to answer only from provided context. Uses a structured template: [CONTEXT] block followed by [QUESTION]. Explicit instruction: 'If the context does not contain the answer, say so.' Temperature: 0.2.",
      ragDetails:
        "Documents chunked with LangChain RecursiveCharacterTextSplitter (200 tokens, 50-token overlap). Embedded with OpenAI ada-002. Stored in Pinecone with metadata (source, section, last_updated). Query-time: user question embedded → cosine similarity search → top-5 chunks retrieved.",
      relevanceFiltering:
        "Similarity score threshold at 0.72. Chunks below threshold are excluded from the context window. If fewer than 2 chunks pass, the system returns a low-confidence response instead of generating an answer.",
      hallucinationControl:
        "Context-only generation enforced via system prompt. No answer fabrication — if retrieval quality is low, the model declines. Considering adding source citation extraction as a next step.",
      evaluation:
        "50-question eval set scored by GPT-4 judge (correct / partially correct / wrong). Current accuracy: ~84%. Main failure mode: questions spanning multiple documents where chunks don't overlap enough.",
      optimization:
        "Response caching in Redis (1hr TTL) for repeated queries. Async embedding pipeline reduced indexing time from 4hrs to 45min. Cloud Run scales to zero when idle to minimize cost.",
    },
  },
];
