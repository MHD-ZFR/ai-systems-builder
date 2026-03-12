import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const roles = [
  "Data Engineering",
  "AI Automation",
  "Generative AI",
  "Cloud Systems",
];

const Hero = () => (
  <section className="relative flex min-h-screen flex-col items-center justify-center px-6">
    {/* Ambient background element */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute -right-40 top-1/4 h-[500px] w-[500px] rounded-full bg-muted/50 blur-[120px]" />
      <div className="absolute -left-40 bottom-1/4 h-[400px] w-[400px] rounded-full bg-muted/30 blur-[100px]" />
    </div>

    <div className="relative z-10 mx-auto max-w-4xl">
      {/* Roles marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="mb-10 flex justify-center"
      >
        <div className="flex items-center gap-3">
          {roles.map((role, i) => (
            <span key={role} className="flex items-center gap-3">
              <span className="mono-label">{role}</span>
              {i < roles.length - 1 && (
                <span className="h-1 w-1 rounded-full bg-muted-foreground/40" />
              )}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Main headline — cinematic reveal */}
      <div className="overflow-hidden text-center">
        <motion.h1
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="text-[clamp(2.5rem,7vw,6rem)] font-bold leading-[1.05] tracking-[-0.035em] text-foreground"
        >
          I build systems that
          <br />
          <span className="text-gradient">turn data into products.</span>
        </motion.h1>
      </div>

      {/* Supporting line */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.8 }}
        className="mx-auto mt-8 max-w-xl text-center text-base leading-relaxed text-muted-foreground md:text-lg"
      >
        Data & AI Systems Engineer — designing scalable pipelines, 
        intelligent automation, and generative AI applications.
      </motion.p>

      {/* CTAs */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
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
          className="rounded-full border border-border px-8 py-3.5 text-sm font-medium text-foreground transition-all duration-500 hover:border-foreground/30 hover:shadow-[0_8px_30px_-6px_hsl(0_0%_0%/0.06)]"
        >
          Get In Touch
        </a>
      </motion.div>
    </div>

    {/* Scroll indicator */}
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
