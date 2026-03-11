import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="about" className="section-padding px-6">
    <div className="container mx-auto max-w-3xl">
      <AnimatedSection>
        <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-text-secondary">About</p>
      </AnimatedSection>
      <AnimatedSection delay={0.1}>
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
          Engineering intelligent systems at scale
        </h2>
      </AnimatedSection>
      <AnimatedSection delay={0.2}>
        <p className="text-lg leading-relaxed text-text-secondary md:text-xl">
          I build modern data and AI systems that combine scalable pipelines, intelligent automation, and generative AI to turn raw data into powerful products. My work spans the full stack of data infrastructure — from ingestion and transformation to AI-powered applications that deliver real business value.
        </p>
      </AnimatedSection>
    </div>
  </section>
);

export default About;
