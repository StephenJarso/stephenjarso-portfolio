import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  ["About", "/about"], ["Projects", "/projects"], ["Skills", "/skills"],
  ["Experience", "/experience"], ["Writing", "/writing"], ["Contact", "/contact"],
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-header-inner">
        <Link to="/" className="brand" aria-label="Stephen Jarso, home">
          <span className="brand-mark">SJ</span><span>Stephen Jarso</span>
        </Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {links.map(([label, to]) => <Link key={to} to={to} activeProps={{ className: "nav-active" }}>{label}</Link>)}
          <a className="resume-link" href="/stephen-jarso-resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={13} /></a>
        </nav>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-controls="mobile-navigation" aria-label={open ? "Close menu" : "Open menu"}>
          {open ? <X size={21} /> : <Menu size={21} />}
        </button>
      </div>
      {open && (
        <nav id="mobile-navigation" className="mobile-nav" aria-label="Mobile navigation">
          {links.map(([label, to]) => <Link key={to} to={to} onClick={() => setOpen(false)}>{label}<ArrowUpRight size={15} /></Link>)}
          <a href="/stephen-jarso-resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15} /></a>
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <div><Link to="/" className="footer-name">Stephen Jarso</Link><p>Backend Developer • Go • DevOps • Security</p></div>
        <div className="footer-links">
          <a href="https://github.com/StephenJarso" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/stephenjarso/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:stephenjacob815@gmail.com">Email</a><a href="/stephen-jarso-resume.pdf" target="_blank" rel="noreferrer">Resume</a>
        </div>
      </div>
      <div className="footer-bottom"><span>© 2026 Stephen Jarso</span><span>Building beyond the interface.</span></div>
    </footer>
  );
}

export function PlaceholderNotice({ children }: { children: React.ReactNode }) {
  return <div className="placeholder-notice"><Mail size={16} />{children}</div>;
}
