import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Projects() {
  return (
    <div className="page">
      <section className="page-hero">
        <div className="container narrow">
          <span className="eyebrow">Projects</span>
          <h1>A portfolio of experiments, models and systems.</h1>
          <p>
            Explore the problem, approach, technologies and reported results behind my academic, internship and personal projects.
          </p>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <SectionTitle eyebrow="Case studies" title={`${projects.length} projects, one learning path.`} />
          <div className="project-grid">
            {projects.map(project => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="project-note">
            <span>Note</span>
            <p>
              The project pages intentionally distinguish repository-backed projects from
              academic/internship case studies where no public GitHub repository was provided.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}