import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Braces, Boxes, Code2, Database, Github, Mail, Network, Server, ShieldCheck } from "lucide-react";
import { ContactBand, SectionHeading } from "@/components/portfolio/PageElements";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { buildAreas, diagramIcons, journey, projects, skills } from "@/data/portfolio";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Stephen Jarso — Backend Developer | Go • DevOps • Security" },
      { name: "description", content: "Portfolio of Stephen Jarso, a backend-focused software developer building systems with Go, DevOps, databases, and security in mind." },
      { property: "og:title", content: "Stephen Jarso — Backend Developer | Go • DevOps • Security" },
      { property: "og:description", content: "Backend-focused software developer building practical systems with Go, DevOps, databases, and security in mind." },
      { property: "og:type", content: "website" }, { property: "og:url", content: "/" }, { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "Person", name: "Stephen Jarso", jobTitle: "Backend Developer", knowsAbout: ["Go", "Backend engineering", "DevOps", "Software security"] }) }],
  }), component: HomePage,
});

function SystemMap() {
  const nodes = [
    [Code2, "Developer", "input"], [Braces, "Code", "source"], [Server, "API", "service"],
    [Database, "Database", "state"], [Boxes, "Docker", "runtime"], [Network, "Deployment", "live"],
  ] as const;
  return <div className="system-map" aria-label="Software system from developer to deployment"><div className="system-stack">{nodes.map(([Icon, name, label]) => <div className="system-node" key={name}><Icon size={16}/><span>{name}</span>{name === "Deployment" ? <span className="system-pulse"/> : <small>{label}</small>}</div>)}</div></div>;
}

function HomePage() {
  return <main>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy"><p className="eyebrow">Backend Developer • Go • DevOps • Security</p><h1>Building reliable software systems from <em>code to deployment.</em></h1><p>Backend developer focused on Go, DevOps, and secure software systems. I build practical applications, APIs, developer tools, and infrastructure with a focus on reliability and real-world problems.</p><div className="button-row"><Link to="/projects" className="button-primary">View projects <ArrowRight size={16}/></Link><Link to="/contact" className="button-secondary">Get in touch</Link></div><div className="micro-links"><span>GitHub</span><span>LinkedIn</span><Link to="/contact">Email</Link></div></div>
      <SystemMap />
    </div></section>

    <section className="intro-band"><div className="container intro-layout"><p className="eyebrow">01 / Approach</p><div className="intro-copy"><h2>Engineering beyond the interface.</h2><p>I started by building what people could see. Over time, I became more interested in everything supporting it: how requests move, how data is modeled, how services communicate, how software is deployed, and where systems can fail or be misused.</p><div className="progression">{["Mobile / Full Stack","Backend","Go","DevOps","Security"].map(x=><div className="progress-step" key={x}>{x}</div>)}</div></div></div></section>

    <section><div className="container"><SectionHeading eyebrow="02 / Focus" title="What I build" copy="Practical software shaped around clear boundaries, dependable behavior, and the environments where it needs to run."/><div className="build-grid">{buildAreas.map(({title,text,icon:Icon})=><article className="build-item" key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section className="projects-section"><div className="container"><SectionHeading eyebrow="03 / Selected work" title="Systems, tools, and useful experiments." copy="A collection of work built while exploring backend engineering, DevOps, and security."/><div className="project-list">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} reverse={index%2===1}/>)}</div></div></section>

    <section><div className="container"><SectionHeading eyebrow="04 / Toolkit" title="Technical toolkit" copy="Organized around the work each technology helps me do—not arbitrary percentages."/><div className="toolkit-grid">{skills.map(group=><div className="skill-group" key={group.category}><h3>{group.category}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></div></section>

    <section className="journey-section"><div className="container"><SectionHeading eyebrow="05 / Journey" title="The path so far" copy="A progression toward understanding more of the system, from the interaction surface to its operating environment."/><div className="journey-list">{journey.map(([title,text])=><article className="journey-step" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section><div className="container"><SectionHeading eyebrow="06 / Open source" title="Code in the open." copy="Repositories and contribution activity will appear here once Stephen’s public GitHub profile and selected repository links are connected."/><div className="github-panel"><div className="project-kicker"><span>GitHub / Public work</span><Github size={16}/></div><h3 style={{marginTop:28}}>The work should speak for itself.</h3><p style={{color:"var(--muted-foreground)",maxWidth:620}}>This area is intentionally waiting for real repository data rather than presenting invented contribution counts or activity.</p><span className="placeholder-label">Profile link to add</span></div></div></section>

    <ContactBand />
  </main>;
}
