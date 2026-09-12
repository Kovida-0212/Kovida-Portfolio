import { ArrowUpRight, Github } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <span className="tag">{project.category}</span>
        <span className="project-number">0{project.slug === "flood-person-detection" ? 1 : project.slug === "twitter-hate-speech" ? 2 : project.slug === "parkinsons" ? 3 : project.slug === "chat-server" ? 4 : project.slug === "employee-burnout" ? 5 : 6}</span>
      </div>
      <h3>{project.title}</h3>
      <p>{project.description}</p>
      <div className="chips">
        {project.stack.slice(0, 4).map((tech) => <span key={tech}>{tech}</span>)}
      </div>
      <div className="card-actions">
        <Link className="text-link" to={`/projects/${project.slug}`}>
          Case study <ArrowUpRight size={17} />
        </Link>
        {project.github && (
          <a className="icon-link" href={project.github} target="_blank" rel="noreferrer" aria-label="Open GitHub">
            <Github size={18} />
          </a>
        )}
      </div>
    </article>
  );
}