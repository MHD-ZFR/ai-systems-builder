import AnimatedSection from "./AnimatedSection";

const categories = [
  { title: "Languages", items: ["Python", "SQL", "TypeScript", "Bash"] },
  { title: "Data Engineering", items: ["Spark", "Kafka", "Airflow", "dbt", "Flink"] },
  { title: "AI / LLM Systems", items: ["LangChain", "OpenAI", "Pinecone", "Hugging Face"] },
  { title: "Automation", items: ["n8n", "AI Agents", "REST APIs", "Webhooks"] },
  { title: "Cloud Infrastructure", items: ["GCP", "BigQuery", "Cloud Functions", "AWS"] },
  { title: "DevOps", items: ["Docker", "Kubernetes", "CI/CD", "Terraform"] },
];

const Skills = () => (
  <section id="skills" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Stack</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Technologies
        </h2>
      </AnimatedSection>

      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.08}>
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-widest text-text-secondary">
                {cat.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-border px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-foreground/30"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
