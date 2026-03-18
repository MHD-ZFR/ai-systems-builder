import { motion } from "framer-motion";
import { ArrowUpRight, Github, Cloud, Shield, TrendingUp, AlertTriangle, Scale, Wrench, CheckCircle } from "lucide-react";
import type { Project } from "./projectData";

const Label = ({ icon: Icon, children }: { icon?: React.ElementType; children: React.ReactNode }) => (
  <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-muted-foreground/60">
    {Icon && <Icon className="mr-1 inline h-3 w-3" />}
    {children}
  </p>
);

const ProjectCard = ({ project }: { project: Project }) => (
  <motion.div
    whileHover={{ x: 4 }}
    transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
    className="group border-t border-border py-8 first:border-t-0 md:py-10"
  >
    {/* Header */}
    <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-baseline md:justify-between">
      <div className="flex items-baseline gap-4">
        <span className="mono-label text-muted-foreground/40">{project.num}</span>
        <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
          {project.title}
        </h3>
      </div>
      <a href={project.githubUrl} className="inline-flex items-center gap-1.5 text-[11px] font-medium text-muted-foreground transition-colors hover:text-foreground">
        <Github className="h-3 w-3" /> View Source
        <ArrowUpRight className="h-3 w-3 opacity-40 transition-all group-hover:opacity-100" />
      </a>
    </div>

    <div className="grid gap-6 md:grid-cols-[1fr_1fr]">
      {/* Left column */}
      <div className="space-y-5">
        <div>
          <Label>Problem</Label>
          <p className="text-sm leading-relaxed text-muted-foreground">{project.problem}</p>
        </div>

        <div>
          <Label>Architecture</Label>
          <div className="rounded-lg border border-border bg-card px-4 py-2.5">
            <p className="font-mono text-[11px] leading-relaxed text-muted-foreground">{project.architecture}</p>
          </div>
        </div>

        <div>
          <Label>Performance</Label>
          <div className="grid grid-cols-2 gap-x-6 gap-y-1.5">
            {project.metrics.map((m) => (
              <p key={m} className="font-mono text-[11px] text-foreground/80">{m}</p>
            ))}
          </div>
        </div>

        <div>
          <Label icon={AlertTriangle}>Engineering Challenges</Label>
          <ul className="space-y-2">
            {project.challenges.map((c) => (
              <li key={c} className="text-[12px] leading-relaxed text-muted-foreground">
                <span className="mr-1.5 text-foreground/40">→</span>{c}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Right column */}
      <div className="space-y-5">
        <div>
          <Label icon={Cloud}>Deployment</Label>
          <div className="space-y-1.5 text-[12px] text-muted-foreground">
            <p><span className="text-foreground/60">Cloud:</span> {project.deployment.cloud}</p>
            <p><span className="text-foreground/60">Services:</span> {project.deployment.services}</p>
            <p><span className="text-foreground/60">Monitoring:</span> {project.deployment.monitoring}</p>
            <p><span className="text-foreground/60">Cost:</span> {project.deployment.cost}</p>
          </div>
        </div>

        <div>
          <Label icon={Shield}>Failure Handling</Label>
          <p className="text-[12px] leading-relaxed text-muted-foreground">{project.failureHandling}</p>
        </div>

        <div>
          <Label icon={Scale}>Trade-offs</Label>
          <ul className="space-y-2">
            {project.tradeoffs.map((t) => (
              <li key={t} className="text-[12px] leading-relaxed text-muted-foreground">
                <span className="mr-1.5 text-foreground/40">→</span>{t}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Label icon={Wrench}>What I Would Improve</Label>
          <ul className="space-y-2">
            {project.improvements.map((imp) => (
              <li key={imp} className="text-[12px] leading-relaxed text-muted-foreground">
                <span className="mr-1.5 text-foreground/40">→</span>{imp}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Label icon={CheckCircle}>Proof & Observability</Label>
          <ul className="space-y-2">
            {project.proof.map((p) => (
              <li key={p} className="text-[12px] leading-relaxed text-muted-foreground">
                <span className="mr-1.5 text-foreground/40">→</span>{p}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Label>Repository</Label>
          <div className="flex flex-wrap gap-1.5">
            {project.repoFolders.map((f) => (
              <span key={f} className="rounded-md border border-border bg-background px-2 py-0.5 font-mono text-[10px] text-muted-foreground">
                {f}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* Tech tags */}
    <div className="mt-5 flex flex-wrap gap-2">
      {project.tech.map((t) => (
        <span
          key={t}
          className="rounded-full border border-border px-3 py-1 text-[11px] text-muted-foreground transition-colors group-hover:border-foreground/15"
        >
          {t}
        </span>
      ))}
    </div>
  </motion.div>
);

export default ProjectCard;
