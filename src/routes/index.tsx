import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Braces, Boxes, Code2, Database, Github, Network, Server } from "lucide-react";
import { ContactBand, SectionHeading } from "@/components/portfolio/PageElements";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { TalksGallery } from "@/components/portfolio/TalksGallery";
import { JourneyMap } from "@/components/portfolio/JourneyMap";
import { buildAreas, projects, skills, talksEvents } from "@/data/portfolio";

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
  }),
  component: HomePage,
});

function SystemMap() {
  const nodes = [
    [Code2, "Developer", "input"], [Braces, "Code", "source"], [Server, "API", "service"],
    [Database, "Database", "state"], [Boxes, "Docker", "runtime"], [Network, "Deployment", "live"],
  ] as const;
  return <div className="system-map" aria-label="Software system from developer to deployment"><div className="system-stack">{nodes.map(([Icon, name, label]) => <div className="system-node" key={name}><Icon size={16}/><span>{name}</span><small>{label}</small></div>)}</div></div>;
}

function HomePage() {
  return <main>
    <section className="hero"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Backend developer — Go / DevOps / Security</p>
        <h1>Building reliable systems from <em>code to deployment.</em></h1>
        <p>Backend developer focused on Go, DevOps, and secure software systems. I build practical applications, APIs, developer tools, and infrastructure around real-world constraints.</p>
        <div className="button-row"><Link to="/projects" className="button-primary">View projects <ArrowRight size={16}/></Link><Link to="/contact" className="button-secondary">Get in touch</Link></div>
        <div className="micro-links"><a href="https://github.com/StephenJarso" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/stephenjarso/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:stephenjacob815@gmail.com">Email</a></div>
        <div className="hero-stats">
          <div><span>Specialization</span><strong>Backend systems</strong></div>
          <div><span>Primary language</span><strong>Go</strong></div>
          <div><span>Current focus</span><strong>DevOps + security</strong></div>
          <div><span>Status</span><strong>Open to work</strong></div>
        </div>
      </div>
      <div className="hero-portrait"><img src="/profile.jpeg" alt="Stephen Jarso" width={400} height={400} /></div>
    </div></section>

    <SystemMap />

    <section className="intro-band"><div className="container intro-layout"><p className="eyebrow">01 / Approach</p><div className="intro-copy"><h2>Engineering beyond the interface.</h2><p>I started by building what people could see. Over time, I became more interested in everything supporting it: how requests move, how data is modeled, how services communicate, how software is deployed, and where systems can fail or be misused.</p><div className="progression">{["Mobile / Full Stack","Backend","Go","DevOps","Security"].map(x=><div className="progress-step" key={x}>{x}</div>)}</div></div></div></section>

    <section><div className="container"><SectionHeading eyebrow="02 / Focus" title="What I build" copy="Practical software shaped around clear boundaries, dependable behavior, and the environments where it needs to run."/><div className="build-grid">{buildAreas.map(({title,text,icon:Icon})=><article className="build-item" key={title}><Icon size={22}/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="selected-work" className="projects-section"><div className="container"><SectionHeading eyebrow="03 / Selected work" title="Systems, tools, and useful experiments." copy="Each project solves a different practical problem—designed, built, and documented end to end."/><div className="project-list">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} reverse={index%2===1}/>)}</div></div></section>

    <section><div className="container"><SectionHeading eyebrow="04 / Toolkit" title="Technical toolkit" copy="Organized around the work each technology helps me do—not arbitrary percentages."/><div className="toolkit-grid">{skills.map(group=><div className="skill-group" key={group.category}><h3>{group.category}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></div></section>

    <section className="journey-section"><div className="container"><SectionHeading eyebrow="05 / Journey" title="The path so far" copy="Choose a stage to trace the progression—from the first interface to the systems, infrastructure, and security behind it."/><JourneyMap /></div></section>

    <section><div className="container"><SectionHeading eyebrow="06 / Talks & events" title="Out in the community." copy="Talks Stephen has given and events he has attended. Photos and details are placeholders until the real ones are shared."/><TalksGallery items={talksEvents}/></div></section>

    <section><div className="container"><SectionHeading eyebrow="07 / Open source" title="Code in the open." copy="Explore Stephen’s public work on GitHub. Repository details and contribution activity will only appear when verified data is connected."/><div className="github-panel"><div className="project-kicker"><span>GitHub / Public work</span><Github size={16}/></div><h3>The work should speak for itself.</h3><p>Browse the public profile now. Contribution counts stay intentionally absent until live GitHub data is connected.</p><a className="button-secondary" href="https://github.com/StephenJarso" target="_blank" rel="noreferrer">View @StephenJarso <ArrowRight size={16}/></a></div></div></section>

    <ContactBand />
  </main>;
}
