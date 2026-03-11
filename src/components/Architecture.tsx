import AnimatedSection from "./AnimatedSection";

const diagrams = [
  {
    title: "Streaming Data Pipeline",
    nodes: ["Data Sources", "Kafka", "Spark Streaming", "PostgreSQL", "Dashboard"],
  },
  {
    title: "AI Automation Architecture",
    nodes: ["Trigger Event", "n8n Workflow", "OpenAI API", "Business Logic", "Slack / Email"],
  },
  {
    title: "RAG Pipeline",
    nodes: ["Documents", "Embeddings", "Vector DB", "LLM", "Response"],
  },
  {
    title: "Cloud Data Warehouse",
    nodes: ["Raw Data", "Cloud Storage", "ETL / dbt", "BigQuery", "Analytics"],
  },
];

const Architecture = () => (
  <section id="architecture" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Architecture</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          System designs
        </h2>
      </AnimatedSection>

      <div className="grid gap-8 md:grid-cols-2">
        {diagrams.map((diagram, i) => (
          <AnimatedSection key={diagram.title} delay={i * 0.1}>
            <div className="glass-surface rounded-xl p-8">
              <h3 className="mb-8 text-sm font-semibold uppercase tracking-wider text-foreground">
                {diagram.title}
              </h3>
              <div className="flex flex-col items-center gap-2">
                {diagram.nodes.map((node, j) => (
                  <div key={node} className="flex w-full flex-col items-center">
                    <div className="w-full rounded-lg border border-border bg-background/50 px-4 py-3 text-center text-xs font-medium text-text-secondary">
                      {node}
                    </div>
                    {j < diagram.nodes.length - 1 && (
                      <div className="h-4 w-px bg-border" />
                    )}
                  </div>
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
