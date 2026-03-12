import { ArrowUpRight } from "lucide-react";
import AnimatedSection from "./AnimatedSection";

const links = [
  { label: "Email", href: "mailto:hello@example.com" },
  { label: "GitHub", href: "https://github.com" },
  { label: "LinkedIn", href: "https://linkedin.com" },
];

const Contact = () => (
  <section id="contact" className="section-padding px-6">
    <div className="container mx-auto max-w-3xl text-center">
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
              className="hover-lift group flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-medium text-foreground transition-colors hover:border-foreground/25"
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
