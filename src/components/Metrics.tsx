import AnimatedSection from "./AnimatedSection";

const metrics = [
  {
    label: "5+",
    title: "Data Engineering Projects",
    description: "Real-time pipelines processing event data at scale.",
  },
  {
    label: "AI",
    title: "Automation Workflows",
    description: "Multiple production automation systems built with n8n.",
  },
  {
    label: "Gen AI",
    title: "Applications",
    description: "LLM + vector database applications in production.",
  },
  {
    label: "Cloud",
    title: "Data Platforms",
    description: "Data infrastructure deployed on Google Cloud.",
  },
];

const Metrics = () => (
  <section id="metrics" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Impact</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Engineering at scale
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <AnimatedSection key={metric.title} delay={i * 0.1}>
            <div className="glass-surface p-8 text-center">
              <p className="mb-2 text-3xl font-bold tracking-tight text-foreground">{metric.label}</p>
              <h3 className="mb-2 text-sm font-semibold text-foreground">{metric.title}</h3>
              <p className="text-xs leading-relaxed text-muted-foreground">{metric.description}</p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
