import { motion } from "framer-motion";
import { ArrowUpRight, Clock } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const articles = [
  {
    title: "Designing Real-Time Data Pipelines using Kafka and Spark",
    summary: "A deep dive into building low-latency streaming pipelines that process millions of events per second.",
    readTime: "8 min read",
    url: "#",
  },
  {
    title: "Building AI Automation Workflows using n8n and APIs",
    summary: "How to create intelligent automation systems that connect AI models to business processes.",
    readTime: "6 min read",
    url: "#",
  },
  {
    title: "Understanding RAG Architecture for Generative AI",
    summary: "Exploring retrieval-augmented generation patterns for building knowledge-powered AI applications.",
    readTime: "10 min read",
    url: "#",
  },
  {
    title: "Scaling Cloud Data Warehouses using BigQuery",
    summary: "Best practices for designing and optimizing cloud-scale analytics infrastructure.",
    readTime: "7 min read",
    url: "#",
  },
];

const Blog = () => (
  <section id="blog" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground">Writing</p>
        <h2 className="mb-16 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Engineering blog
        </h2>
      </AnimatedSection>

      <div className="grid gap-6 md:grid-cols-2">
        {articles.map((article, i) => (
          <AnimatedSection key={article.title} delay={i * 0.08}>
            <motion.a
              href={article.url}
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
              className="glass-surface group flex h-full flex-col p-8"
            >
              <div className="mb-4 flex items-center gap-2 text-muted-foreground">
                <Clock className="h-3.5 w-3.5" />
                <span className="text-xs">{article.readTime}</span>
              </div>
              <h3 className="mb-3 text-lg font-semibold text-foreground">{article.title}</h3>
              <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{article.summary}</p>
              <div className="mt-auto flex items-center gap-1.5 text-xs font-medium text-foreground opacity-0 transition-opacity group-hover:opacity-100">
                Read article <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </motion.a>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Blog;
