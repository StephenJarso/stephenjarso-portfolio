import { Link } from "@tanstack/react-router";
import { ArrowRight, Github } from "lucide-react";
import type { Project } from "@/data/portfolio";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-number">{project.number}</div>
      <div className="project-copy">
        <div className="project-kicker">{project.category}</div>
        <h3>{project.name}</h3>
        <p>{project.description}</p>
        <ul className="tags" aria-label="Technologies">
          {project.technologies.map((tech) => <li key={tech}>{tech}</li>)}
        </ul>
        <div className="project-actions">
          <span className="text-link is-muted" aria-label="GitHub repository link to add">
            <Github size={16} /> GitHub <small>link to add</small>
          </span>
          <Link to="/projects/$slug" params={{ slug: project.slug }} className="text-link">
            Read case study <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
