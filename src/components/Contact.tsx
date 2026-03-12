import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Contact = () => (
  <section id="contact" className="relative section-padding px-6">
    {/* Ambient glow for CTA depth */}
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-muted/30 blur-[120px]" />
    </div>

    <div className="container relative z-10 mx-auto max-w-3xl text-center">
      <AnimatedSection>
        <p className="mono-label mb-6">Contact</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
          Let's build
          <br />
          <span className="text-gradient">something real.</span>
        </h2>
        <p className="mb-14 text-base text-muted-foreground md:text-lg">
          Interested in building intelligent systems and AI-powered products.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.15}>
        <div className="flex flex-wrap items-center justify-center gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-chip group flex items-center gap-2 px-7 py-3.5 text-sm font-medium text-foreground hover:shadow-[0_12px_40px_-12px_hsl(0_0%_0%/0.06)]"
            >
              {link.label}
              <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Contact;
