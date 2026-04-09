import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const specializations = [
  "Data Pipelines",
  "Stream Processing",
  "RAG Systems",
  "AI Automation",
];

const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-32 top-[20%] h-[500px] w-[500px] rounded-full bg-muted/60 blur-[140px]" />
      <div className="absolute -left-32 bottom-[20%] h-[420px] w-[420px] rounded-full bg-muted/40 blur-[120px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="mb-10 flex justify-center"
      >
        <div className="glass-chip px-5 py-2.5">
          <span className="mono-label text-[10px]">AI & Data Engineer</span>
        </div>
      </motion.div>

      <div className="overflow-hidden text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.2rem,6vw,5rem)] font-bold leading-[1.08] tracking-[-0.035em] text-foreground"
        >
          I build data systems
          <br />
          <span className="text-gradient">that actually run.</span>
        </motion.h1>
      </div>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mx-auto mt-8 max-w-2xl text-center text-base leading-relaxed text-muted-foreground md:text-lg"
      >
        Building streaming pipelines, RAG applications, and AI automation workflows.
        Focused on clean architecture, realistic constraints, and working code.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-2"
      >
        {specializations.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-4 py-1.5 font-mono text-[11px] text-muted-foreground"
          >
            {s}
          </span>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="#projects"
          className="group relative overflow-hidden rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-all duration-500 hover:shadow-[0_8px_30px_-6px_hsl(0_0%_0%/0.25)]"
        >
          <span className="relative z-10">View Projects</span>
        </a>
        <a
          href="#contact"
          className="glass-chip px-8 py-3.5 text-sm font-medium text-foreground"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-12 flex flex-col items-center gap-2"
    >
      <span className="mono-label text-[10px]">Scroll</span>
      <ChevronDown className="h-4 w-4 animate-scroll-hint text-muted-foreground" />
    </motion.div>
  </section>
);

export default Hero;
