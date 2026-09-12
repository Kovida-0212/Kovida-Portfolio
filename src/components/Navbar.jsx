import { NavLink } from "react-router-dom";
import { Github, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    ["/", "Home"],
    ["/about", "About"],
    ["/projects", "Projects"],
    ["/contact", "Contact"]
  ];

  return (
    <header className="nav-wrap">
      <nav className="nav container">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">K</span>
          <span>Kovida<span className="brand-dot">.</span></span>
        </NavLink>

        <button className="menu-btn" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

        <div className={`nav-links ${open ? "nav-open" : ""}`}>
          {links.map(([path, label]) => (
            <NavLink
              key={path}
              to={path}
              end={path === "/"}
              className={({ isActive }) => isActive ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {label}
            </NavLink>
          ))}
          <a
            className="nav-resume"
            href="/Kovida-Munnangi-Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a
            className="nav-github"
            href="https://github.com/Kovida-0212"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={17} /> GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}