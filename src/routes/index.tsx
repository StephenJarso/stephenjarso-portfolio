import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";
import { SectionHeading } from "@/components/portfolio/PageElements";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { TalksGallery } from "@/components/portfolio/TalksGallery";
import { JourneyMap } from "@/components/portfolio/JourneyMap";
import { buildAreas, projects, skills, talksEvents, writingTopics } from "@/data/portfolio";
import { withBase } from "@/lib/paths";

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

function HomePage() {
  return <main>
    <section className="hero" id="top"><div className="container hero-grid">
      <div className="hero-copy">
        <p className="eyebrow">Backend developer — Go / DevOps / Security</p>
        <h1>Building reliable systems from <em>code to deployment.</em></h1>
        <p>Backend developer focused on Go, DevOps, and secure software systems. I build practical applications, APIs, developer tools, and infrastructure around real-world constraints.</p>
        <div className="button-row"><a href="#work" className="button-primary">View projects</a><a href="#contact" className="button-secondary">Get in touch</a></div>
        <div className="micro-links"><a href="https://github.com/StephenJarso" target="_blank" rel="noreferrer">GitHub</a><a href="https://www.linkedin.com/in/stephenjarso/" target="_blank" rel="noreferrer">LinkedIn</a><a href="mailto:stephenjacob815@gmail.com">Email</a></div>
        <div className="hero-stats">
          <div><span>Specialization</span><strong>Backend systems</strong></div>
          <div><span>Primary language</span><strong>Go</strong></div>
          <div><span>Current focus</span><strong>DevOps + security</strong></div>
          <div><span>Status</span><strong>Open to work</strong></div>
        </div>
      </div>
      <div className="hero-portrait"><img src={withBase("/profile.jpeg")} alt="Stephen Jarso" width={400} height={400} /></div>
    </div></section>

    <section className="intro-band" id="approach"><div className="container intro-layout"><p className="eyebrow">01 / Approach</p><div className="intro-copy"><h2>Engineering beyond the interface.</h2><p>I started by building what people could see. Over time, I became more interested in everything supporting it: how requests move, how data is modeled, how services communicate, how software is deployed, and where systems can fail or be misused.</p><div className="progression">{["Mobile / Full Stack","Backend","Go","DevOps","Security"].map(x=><div className="progress-step" key={x}>{x}</div>)}</div></div></div></section>

    <section id="focus"><div className="container"><SectionHeading eyebrow="02 / Focus" title="What I build" copy="Practical software shaped around clear boundaries, dependable behavior, and the environments where it needs to run."/><div className="build-grid">{buildAreas.map(({title,text})=><article className="build-item" key={title}><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

    <section id="work"><div className="container"><SectionHeading eyebrow="03 / Selected work" title="Systems, tools, and useful experiments." copy="Each project solves a different practical problem—designed, built, and documented end to end."/><div className="project-list">{projects.map((project,index)=><ProjectCard key={project.slug} project={project} reverse={index%2===1}/>)}</div></div></section>

    <section id="toolkit"><div className="container"><SectionHeading eyebrow="04 / Toolkit" title="Technical toolkit" copy="Organized around the work each technology helps me do—not arbitrary percentages."/><div className="toolkit-grid">{skills.map(group=><div className="skill-group" key={group.category}><h3>{group.category}</h3><ul>{group.items.map(item=><li key={item}>{item}</li>)}</ul></div>)}</div></div></section>

    <section id="journey"><div className="container"><SectionHeading eyebrow="05 / Journey" title="The path so far" copy="Choose a stage to trace the progression—from the first interface to the systems, infrastructure, and security behind it."/><JourneyMap /></div></section>

    <section id="values"><div className="container content-grid"><p className="eyebrow">06 / How I think</p><div className="prose"><h2>Build to understand.</h2><p>Learning by building turns abstract concepts into concrete decisions. I’m drawn to practical problems that reveal how software behaves under real constraints: unreliable networks, changing requirements, deployment boundaries, and users who need predictable outcomes.</p><div className="value-list">{["Learning by building","Understanding fundamentals","Systems thinking","Practical problem solving"].map(x=><div className="value-item" key={x}>{x}</div>)}</div></div></div></section>

    <section id="writing"><div className="container"><SectionHeading eyebrow="07 / Writing" title="Engineering notes." copy="Planned technical topics—dates and reading times will appear only when the writing exists."/><div className="writing-grid">{writingTopics.map((topic,index)=><article className="writing-card" key={topic}><div className="writing-meta"><span>{index<3?"Foundations":"Systems"}</span><span>Planned</span></div><h2>{topic}</h2></article>)}</div></div></section>

    <section><div className="container"><SectionHeading eyebrow="08 / Talks & events" title="Out in the community." copy="Talks Stephen has given and events he has attended. Photos and details are placeholders until the real ones are shared."/><TalksGallery items={talksEvents}/></div></section>

    <section id="opensource"><div className="container"><SectionHeading eyebrow="09 / Open source" title="Code in the open." copy="Explore Stephen’s public work on GitHub. Repository details and contribution activity will only appear when verified data is connected."/><div className="github-panel"><h3>The work should speak for itself.</h3><p>Browse the public profile now. Contribution counts stay intentionally absent until live GitHub data is connected.</p><a className="text-link" href="https://github.com/StephenJarso" target="_blank" rel="noreferrer">View @StephenJarso <ArrowRight size={16}/></a></div></div></section>

    <section className="contact-band" id="contact" aria-labelledby="contact-heading">
      <p className="eyebrow">10 / Contact</p>
      <div><h2 id="contact-heading">Have something worth building?</h2><p>I’m open to software engineering opportunities, interesting technical problems, collaborations, and projects where I can build and learn.</p>
      <div className="contact-links"><div className="value-list">
        <a className="value-item" href="mailto:stephenjacob815@gmail.com"><Mail size={18}/> Email <span>Send a message</span></a>
        <a className="value-item" href="https://github.com/StephenJarso" target="_blank" rel="noreferrer"><Github size={18}/> GitHub <span>@StephenJarso</span></a>
        <a className="value-item" href="https://www.linkedin.com/in/stephenjarso/" target="_blank" rel="noreferrer"><Linkedin size={18}/> LinkedIn <span>Stephen Jarso</span></a>
      </div></div></div>
    </section>
  </main>;
}
