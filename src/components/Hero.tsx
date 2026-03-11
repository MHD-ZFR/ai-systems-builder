import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
    <div className="mx-auto max-w-4xl text-center">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mb-6 text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground"
      >
        Data Engineering · AI Automation · Generative AI · Cloud Systems
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
        className="mb-6 text-5xl font-bold leading-[1.08] tracking-tight text-foreground md:text-7xl lg:text-8xl"
      >
        Hi, I'm <span className="text-gradient">Your Name</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="mx-auto mb-12 max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl"
      >
        Data & AI Systems Engineer building scalable data pipelines, AI automation workflows, and generative AI applications.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
      >
        <a
          href="#projects"
          className="hover-lift rounded-full bg-foreground px-8 py-3.5 text-sm font-medium text-background transition-colors hover:bg-foreground/90"
        >
          View Projects
        </a>
        <a
          href="#contact"
          className="hover-lift rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/40"
        >
          Contact
        </a>
      </motion.div>
    </div>

    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2, duration: 0.8 }}
      className="absolute bottom-12"
    >
      <ChevronDown className="h-5 w-5 animate-scroll-hint text-muted-foreground" />
    </motion.div>
  </section>
);

export default Hero;
