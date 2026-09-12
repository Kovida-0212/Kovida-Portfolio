import { ArrowLeft, ExternalLink, Github, CheckCircle2 } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  if (!project) {
    return (
      <div className="page">
        <section className="section">
          <div className="container narrow">
            <h1>Project not found.</h1>
            <Link className="text-link" to="/projects"><ArrowLeft size={17}/> Back to projects</Link>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="page">
      <section className="project-detail-hero">
        <div className="container">
          <Link className="back-link" to="/projects"><ArrowLeft size={16}/> All projects</Link>
          <span className="eyebrow">{project.category}</span>
          <h1>{project.title}</h1>
          <p>{project.description}</p>
          <div className="detail-actions">
            {project.github && <a className="btn btn-primary" href={project.github} target="_blank" rel="noreferrer"><Github size={17}/> View on GitHub</a>}
            {project.report && project.github && <a className="btn btn-secondary" href={project.report} target="_blank" rel="noreferrer"><ExternalLink size={17}/> Repository files</a>}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container detail-grid">
          <article className="detail-main">
            <div className="detail-block">
              <span className="eyebrow">Overview</span>
              <h2>What the project does</h2>
              <p>{project.overview}</p>
            </div>
            <div className="detail-block">
              <span className="eyebrow">Problem</span>
              <h2>The challenge</h2>
              <p>{project.challenge}</p>
            </div>
            <div className="detail-block">
              <span className="eyebrow">Key points</span>
              <h2>What stands out</h2>
              <ul className="check-list">
                {project.highlights.map(item => <li key={item}><CheckCircle2 size={18}/><span>{item}</span></li>)}
              </ul>
            </div>

            {project.metrics && (
              <div className="detail-block">
                <span className="eyebrow">Results</span>
                <h2>Reported model performance</h2>
                <div className="table-wrap">
                  <table>
                    <thead><tr>{project.metricHeaders.map(h => <th key={h}>{h}</th>)}</tr></thead>
                    <tbody>
                      {project.metrics.map(row => (
                        <tr key={row[0]}>{row.map((cell, i) => <td key={i}>{cell}</td>)}</tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </article>

          <aside className="detail-side">
            <div className="side-card">
              <span className="eyebrow">Technology</span>
              <div className="chips detail-chips">{project.stack.map(t => <span key={t}>{t}</span>)}</div>
            </div>
            <div className="side-card accent-card">
              <span className="eyebrow">Project link</span>
              {project.github ? (
                <a className="text-link" href={project.github} target="_blank" rel="noreferrer">Open GitHub <ExternalLink size={16}/></a>
              ) : (
                <p>This is currently presented as an academic/internship case study. Add the repository URL later if you publish one.</p>
              )}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}