const Footer = () => (
  <footer className="border-t border-border px-6 py-8">
    <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-xs text-text-secondary">
        © {new Date().getFullYear()} · Built with precision
      </p>
      <div className="flex gap-6">
        {["GitHub", "LinkedIn", "Email"].map((item) => (
          <a key={item} href="#" className="text-xs text-text-secondary transition-colors hover:text-foreground">
            {item}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
