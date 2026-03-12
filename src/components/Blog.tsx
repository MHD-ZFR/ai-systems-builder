import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const articles = [
  {
    title: "Designing Real-Time Data Pipelines using Kafka and Spark",
    summary:
      "A deep dive into building low-latency streaming pipelines that process millions of events per second.",
    readTime: "8 min",
    url: "#",
  },
  {
    title: "Building AI Automation Workflows using n8n and APIs",
    summary:
      "How to create intelligent automation systems that connect AI models to business processes.",
    readTime: "6 min",
    url: "#",
  },
  {
    title: "Understanding RAG Architecture for Generative AI",
    summary:
      "Exploring retrieval-augmented generation patterns for building knowledge-powered AI applications.",
    readTime: "10 min",
    url: "#",
  },
  {
    title: "Scaling Cloud Data Warehouses using BigQuery",
    summary:
      "Best practices for designing and optimizing cloud-scale analytics infrastructure.",
    readTime: "7 min",
    url: "#",
  },
];

const Blog = () => (
  <section id="blog" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Writing</p>
        <h2 className="mb-20 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Thinking in public.
        </h2>
      </AnimatedSection>

      <div className="space-y-0">
        {articles.map((article, i) => (
          <AnimatedSection key={article.title} delay={i * 0.06}>
            <motion.a
              href={article.url}
              whileHover={{ x: 4 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group flex items-start justify-between border-t border-border py-8 first:border-t-0"
            >
              <div className="flex-1 pr-8">
                <h3 className="mb-2 text-base font-semibold tracking-tight text-foreground md:text-lg">
                  {article.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {article.summary}
                </p>
              </div>
              <div className="flex shrink-0 items-center gap-3">
                <span className="mono-label hidden text-[10px] sm:inline">
                  {article.readTime}
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground/30 transition-all duration-300 group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
