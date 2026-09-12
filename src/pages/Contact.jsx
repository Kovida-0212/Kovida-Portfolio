import { Github, Linkedin, Mail, Phone, ArrowUpRight, Award } from "lucide-react";

export default function Contact() {
  return (
    <div className="page">
      <section className="contact-hero">
        <div className="container narrow">
          <span className="eyebrow">Contact</span>
          <h1>Let’s build something useful.</h1>
          <p>
            I’m interested in entry-level AI/ML, machine learning and software opportunities
            where I can learn quickly and contribute to real-world problems.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <a className="contact-card" href="mailto:kovidamunnangi@gmail.com">
            <Mail size={22}/><span>Email</span><strong>kovidamunnangi@gmail.com</strong><ArrowUpRight size={18}/>
          </a>
          <a className="contact-card" href="tel:+919866928304">
            <Phone size={22}/><span>Phone</span><strong>+91 98669 28304</strong><ArrowUpRight size={18}/>
          </a>
          <a className="contact-card" href="https://www.linkedin.com/in/kovida-munnangi-b7b2aa259/" target="_blank" rel="noreferrer">
            <Linkedin size={22}/><span>LinkedIn</span><strong>linkedin.com/in/kovida-munnangi</strong><ArrowUpRight size={18}/>
          </a>
          <a className="contact-card" href="https://github.com/Kovida-0212" target="_blank" rel="noreferrer">
            <Github size={22}/><span>GitHub</span><strong>github.com/Kovida-0212</strong><ArrowUpRight size={18}/>
          </a>
          <a className="contact-card resume-card" href="/Kovida-Munnangi-Resume.pdf" target="_blank" rel="noreferrer">
            <Award size={22}/><span>Resume</span><strong>View my resume</strong><ArrowUpRight size={18}/>
          </a>
        </div>
      </section>
    </div>
  );
}