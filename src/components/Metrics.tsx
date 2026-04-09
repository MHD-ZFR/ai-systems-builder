import { motion, useInView, useSpring, useTransform, useMotionValue } from "framer-motion";
import { useRef, useEffect } from "react";
import AnimatedSection from "./AnimatedSection";

const AnimatedNumber = ({ value, suffix = "+" }: { value: number; suffix?: string }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 2000, bounce: 0 });
  const display = useTransform(springValue, (v) => `${Math.round(v)}${suffix}`);

  useEffect(() => {
    if (isInView) motionValue.set(value);
  }, [isInView, motionValue, value]);

  return <motion.span ref={ref} className="stat-number">{display}</motion.span>;
};

const metrics = [
  {
    value: 3,
    suffix: "",
    title: "End-to-End Systems",
    description: "Streaming pipeline, RAG assistant, and AI automation — each built with working code.",
  },
  {
    value: 84,
    suffix: "%",
    title: "RAG Accuracy",
    description: "Measured on a 50-question eval set with GPT-4 judge scoring.",
  },
  {
    value: 89,
    suffix: "%",
    title: "Classification Accuracy",
    description: "Ticket intent classification tested on 200 labeled samples.",
  },
  {
    value: 2,
    suffix: "s",
    title: "Pipeline Latency",
    description: "End-to-end p95 from Kafka ingestion to database write on test workloads.",
  },
];

const Metrics = () => (
  <section id="metrics" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Results</p>
        <h2 className="mb-20 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Measured, not claimed.
        </h2>
      </AnimatedSection>

      <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {metrics.map((metric, i) => (
          <AnimatedSection key={metric.title} delay={i * 0.1}>
            <div className="flex h-full flex-col bg-background p-8">
              <AnimatedNumber value={metric.value} suffix={metric.suffix} />
              <h3 className="mt-3 text-sm font-semibold text-foreground">
                {metric.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                {metric.description}
              </p>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Metrics;
