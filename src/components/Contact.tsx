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
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">Contact</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          Let's build something together
        </h2>
        <p className="mb-12 text-lg text-text-secondary">
          Interested in building intelligent systems together.
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover-lift group flex items-center gap-2 rounded-full border border-border px-6 py-3 text-sm font-medium text-foreground transition-colors hover:border-foreground/30"
            >
              {link.label}
              <ArrowUpRight className="h-4 w-4 text-text-secondary transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          ))}
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Contact;
