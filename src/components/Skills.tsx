import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const categories = [
  { title: "Languages", items: ["Python", "SQL", "JavaScript"] },
  { title: "Data Engineering", items: ["Apache Kafka", "Spark", "Airflow", "dbt"] },
  { title: "AI / ML", items: ["LangChain", "OpenAI API", "Pinecone", "RAG Pipelines"] },
  { title: "Automation", items: ["n8n", "Webhooks", "REST APIs"] },
  { title: "Cloud & Infra", items: ["GCP", "Docker", "Prometheus", "Grafana"] },
  { title: "Databases", items: ["PostgreSQL", "ClickHouse", "BigQuery", "Redis"] },
];

const Skills = () => (
  <section id="skills" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Stack</p>
        <h2 className="mb-20 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Tools I work with.
        </h2>
      </AnimatedSection>

      <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
        {categories.map((cat, i) => (
          <AnimatedSection key={cat.title} delay={i * 0.06}>
            <div>
              <h3 className="mono-label mb-5">{cat.title}</h3>
              <div className="space-y-2">
                {cat.items.map((item) => (
                  <motion.div
                    key={item}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.3 }}
                    className="group flex items-center gap-3 text-sm text-foreground"
                  >
                    <span className="h-px w-4 bg-border transition-all duration-300 group-hover:w-6 group-hover:bg-foreground" />
                    {item}
                  </motion.div>
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
