import { motion } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="about" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      {/* Story-driven intro — not blocks */}
      <AnimatedSection>
        <div className="mx-auto max-w-3xl">
          <p className="mono-label mb-6">What I Build</p>
          <h2 className="mb-8 text-3xl font-bold leading-[1.2] tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Engineering intelligent systems
            <br />
            <span className="text-muted-foreground">from raw data to product.</span>
          </h2>
          <p className="text-base leading-[1.8] text-muted-foreground md:text-lg">
            I design and build the infrastructure behind modern data products — 
            from real-time streaming pipelines to AI-powered automation and generative AI systems. 
            Every system I build prioritizes reliability, scalability, and clarity of purpose.
          </p>
        </div>
      </AnimatedSection>

      {/* Capability pillars — horizontal rhythm */}
      <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {[
          {
            num: "01",
            title: "Data Infrastructure",
            text: "Scalable pipelines with Kafka, Spark, and modern warehouses.",
          },
          {
            num: "02",
            title: "AI Automation",
            text: "Intelligent workflows connecting AI agents to business processes.",
          },
          {
            num: "03",
            title: "Generative AI",
            text: "LLM applications powered by vector databases and RAG pipelines.",
          },
          {
            num: "04",
            title: "Cloud Platforms",
            text: "Production-grade systems deployed on Google Cloud infrastructure.",
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
