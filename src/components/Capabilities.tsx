import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const capabilities = [
  {
    title: "Data Engineering",
    items: ["Python", "SQL", "Apache Spark", "Kafka", "Airflow"],
  },
  {
    title: "AI Automation",
    items: ["n8n", "AI Agents", "Workflow Automation", "API Integrations"],
  },
  {
    title: "Generative AI",
    items: ["LangChain", "OpenAI APIs", "Vector Databases", "RAG Architectures"],
  },
  {
    title: "Cloud Systems",
    items: ["Google Cloud Platform", "BigQuery", "Cloud Storage", "Docker"],
  },
];

const Capabilities = () => (
  <section id="capabilities" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Capabilities</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Core expertise
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {capabilities.map((cap, i) => (
          <AnimatedSection key={cap.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-surface rounded-xl p-8"
            >
              <h3 className="mb-6 text-lg font-semibold text-foreground">{cap.title}</h3>
              <ul className="space-y-3">
                {cap.items.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-text-secondary">
                    <span className="h-1 w-1 rounded-full bg-text-secondary" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Capabilities;
