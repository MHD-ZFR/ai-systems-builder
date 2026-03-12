import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "Work", href: "#projects" },
  { label: "Systems", href: "#architecture" },
  { label: "Stack", href: "#skills" },
  { label: "Writing", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handle);
    return () => window.removeEventListener("scroll", handle);
  }, []);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.1 }}
      className={`fixed left-0 right-0 top-0 z-50 px-6 py-4 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/40"
          : ""
      }`}
    >
      <div className="container mx-auto flex max-w-5xl items-center justify-between">
        <a href="#" className="text-sm font-semibold tracking-tight text-foreground">
          engineer<span className="text-muted-foreground">.</span>
        </a>
        <div className="hidden items-center gap-8 sm:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[11px] font-medium uppercase tracking-[0.08em] text-muted-foreground transition-colors duration-300 hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
