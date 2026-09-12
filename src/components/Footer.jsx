import { Github, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div>
          <strong>Kovida Munnangi</strong>
          <p>AI/ML Developer · Machine Learning · Deep Learning</p>
        </div>
        <div className="footer-links">
          <a href="mailto:kovidamunnangi@gmail.com" aria-label="Email"><Mail size={18} /></a>
          <a href="https://www.linkedin.com/in/kovida-munnangi-b7b2aa259/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Linkedin size={18} /></a>
          <a href="https://github.com/Kovida-0212" target="_blank" rel="noreferrer" aria-label="GitHub"><Github size={18} /></a>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Kovida Munnangi</span>
        <a href="/Kovida-Munnangi-Resume.pdf" target="_blank" rel="noreferrer">View resume</a>
      </div>
    </footer>
  );
}