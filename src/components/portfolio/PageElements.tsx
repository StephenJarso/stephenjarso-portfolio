import { Link } from "@tanstack/react-router";
import { ArrowRight, ImagePlus } from "lucide-react";

export function PhotoFrame({ label, ratio = "wide" }: { label: string; ratio?: "wide" | "portrait" }) {
  return (
    <div className={`photo-frame is-${ratio}`} role="img" aria-label={`${label} — placeholder, photo to be added`}>
      <ImagePlus size={22} aria-hidden />
      <span className="placeholder-label">{label}</span>
    </div>
  );
}

export function PageIntro({ eyebrow, title, children }: { eyebrow: string; title: string; children: React.ReactNode }) {
  return <header className="page-intro"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="page-lede">{children}</div></header>;
}

export function ContactBand() {
  return (
    <section className="contact-band" aria-labelledby="contact-heading">
      <p className="eyebrow">Start a conversation</p>
      <div><h2 id="contact-heading">Have something worth building?</h2><p>I’m open to software engineering opportunities, interesting technical problems, collaborations, and projects where I can build and learn.</p></div>
      <Link to="/contact" className="circle-link" aria-label="Contact Stephen"><ArrowRight size={24} /></Link>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return <div className="section-heading"><p className="eyebrow">{eyebrow}</p><h2>{title}</h2>{copy && <p>{copy}</p>}</div>;
}
