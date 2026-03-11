import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const blocks = [
  {
    title: "Data Infrastructure",
    description: "Building scalable pipelines using Kafka, Spark, and modern data warehouses.",
  },
  {
    title: "AI Automation",
    description: "Creating intelligent automation workflows using n8n and AI agents.",
  },
  {
    title: "Generative AI Systems",
    description: "Developing LLM applications using vector databases and RAG pipelines.",
  },
  {
    title: "Cloud Data Platforms",
    description: "Deploying scalable systems using Google Cloud infrastructure.",
  },
];

const About = () => (
  <section id="about" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">What I Build</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Engineering intelligent systems at scale
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 sm:grid-cols-2">
        {blocks.map((block, i) => (
          <AnimatedSection key={block.title} delay={i * 0.1}>
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-surface p-8"
            >
              <h3 className="mb-3 text-lg font-semibold text-foreground">{block.title}</h3>
              <p className="text-sm leading-relaxed text-muted-foreground">{block.description}</p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
