const Footer = () => (
  <footer className="border-t border-border px-6 py-10">
    <div className="container mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 sm:flex-row">
      <p className="text-[11px] text-muted-foreground">
        © {new Date().getFullYear()} · Designed & engineered with precision
      </p>
      <div className="flex gap-6">
        {["GitHub", "LinkedIn", "Email"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-[11px] text-muted-foreground transition-colors duration-300 hover:text-foreground"
          >
            {item}
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
