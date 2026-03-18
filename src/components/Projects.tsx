import AnimatedSection from "./AnimatedSection";
import ProjectCard from "./projects/ProjectCard";
import { projects } from "./projects/projectData";

const Projects = () => (
  <section id="projects" className="section-padding px-6">
    <div className="container mx-auto max-w-5xl">
      <AnimatedSection>
        <p className="mono-label mb-6">Selected Work</p>
        <h2 className="mb-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Systems in production.
        </h2>
        <p className="mb-20 max-w-xl text-base text-muted-foreground">
          Each project documented as an engineering case study — what broke, what worked, and what I'd change.
        </p>
      </AnimatedSection>

      <div className="space-y-6">
        {projects.map((project, i) => (
          <AnimatedSection key={project.num} delay={i * 0.06}>
            <ProjectCard project={project} />
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
