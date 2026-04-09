import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="about" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <div className="mx-auto max-w-3xl">
          <p className="mono-label mb-6">What I Build</p>
          <h2 className="mb-8 text-3xl font-bold leading-[1.2] tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Data infrastructure
            <br />
            <span className="text-muted-foreground">and AI systems.</span>
          </h2>
          <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
            I build data pipelines, RAG-based AI tools, and automation workflows.
            Each project is designed with production constraints in mind — cost, latency, failure recovery.
            I focus on strong fundamentals over scale claims.
          </p>
        </div>
      </AnimatedSection>

      <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            num: "01",
            title: "Data Pipelines",
            text: "Kafka, Spark, Airflow. Built and tested on real workloads.",
          },
          {
            num: "02",
            title: "AI / RAG Systems",
            text: "Retrieval-augmented generation with vector search, prompt engineering, and evaluation.",
          },
          {
            num: "03",
            title: "Automation",
            text: "Workflow orchestration connecting LLMs to business tools.",
          },
          {
            num: "04",
            title: "Cloud Infrastructure",
            text: "Deployed on GCP. Docker, monitoring, cost-aware architecture.",
          },
        ].map((item, i) => (
          <AnimatedSection key={item.num} delay={i * 0.08}>
            <motion.div
              whileHover={{ backgroundColor: "hsl(220 14% 95%)" }}
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col bg-background p-8"
            >
              <span className="mono-label mb-4 text-muted-foreground/50">
                {item.num}
              </span>
              <h3 className="mb-3 text-sm font-semibold tracking-tight text-foreground">
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed text-muted-foreground">
                {item.text}
              </p>
            </motion.div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default About;
