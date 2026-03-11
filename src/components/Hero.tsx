import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
    <div className="mx-auto max-w-4xl text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary"
      >
        Data Engineering · AI Automation · Cloud Systems
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="text-gradient mb-8 text-5xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl"
      >
        Building Scalable Data & AI Systems
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-text-secondary md:text-xl"
      >
        I design data pipelines, AI automation workflows, generative AI applications, and cloud infrastructure that power intelligent systems.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="#projects"
          className="hover-lift rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-accent-hover hover:text-background"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="hover-lift rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-accent-hover hover:text-accent-hover"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-12"
    >
      <ChevronDown className="h-5 w-5 animate-scroll-hint text-text-secondary" />
    </motion.div>
  </section>
);

export default Hero;
