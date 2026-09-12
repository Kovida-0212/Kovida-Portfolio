import { ArrowDown, ArrowUpRight, BrainCircuit, Code2, Database, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../data/projects";

export default function Home() {
  const featured = projects.filter(p => p.featured);

  return (
    <>
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="status-pill"><span className="status-dot" /> Open to AI/ML opportunities</span>
            <p className="hero-kicker">AI / ML DEVELOPER</p>
            <h1>Building intelligent systems from <span>data to deployment.</span></h1>
            <p className="hero-text">
              I’m Kovida Munnangi, an AI/ML-focused Computer Science graduate building practical
              solutions across machine learning, deep learning, NLP and computer vision.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" to="/projects">Explore my work <ArrowUpRight size={18} /></Link>
              <Link className="btn btn-secondary" to="/contact">Let’s connect</Link>
              <a className="btn btn-ghost" href="/Kovida-Munnangi-Resume.pdf" target="_blank" rel="noreferrer">View resume</a>
            </div>
            <div className="hero-meta">
              <span><Code2 size={16}/> Python</span>
              <span><BrainCircuit size={16}/> ML / DL</span>
              <span><Database size={16}/> Data & Analytics</span>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="ai-card">
              <div className="ai-card-header">
                <span className="mini-label">AI SYSTEMS</span>
                <Sparkles size={18} />
              </div>
              <div className="ai-core">
                <div className="core-ring"><BrainCircuit size={54}/></div>
              </div>
              <div className="signal-list">
                <div><span>Machine Learning</span><b>01</b></div>
                <div><span>Deep Learning</span><b>02</b></div>
                <div><span>NLP & Transformers</span><b>03</b></div>
                <div><span>Computer Vision</span><b>04</b></div>
              </div>
            </div>
          </div>
        </div>
        <a href="#featured" className="scroll-cue"><ArrowDown size={16}/> Scroll to explore</a>
      </section>

      <section className="section" id="featured">
        <div className="container">
          <SectionTitle eyebrow="Selected work" title="Projects that show how I think." text="From multilingual NLP to disaster-response computer vision, these projects highlight model comparison, experimentation and practical problem solving." />
          <div className="project-grid">
            {featured.map(project => <ProjectCard key={project.slug} project={project} />)}
          </div>
          <div className="center-action">
            <Link className="text-link large" to="/projects">View all projects <ArrowUpRight size={18}/></Link>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container split-section">
          <div>
            <span className="eyebrow">Profile</span>
            <h2>Strong ML foundations, growing toward modern AI.</h2>
          </div>
          <div>
            <p>
              My current focus is building a strong foundation across machine learning,
              deep learning, NLP, computer vision and software development. I’m also
              actively expanding into Generative AI and production-oriented AI engineering.
            </p>
            <Link className="text-link" to="/about">More about me <ArrowUpRight size={17}/></Link>
          </div>
        </div>
      </section>
    </>
  );
}