import { createFileRoute } from "@tanstack/react-router";
import { PageIntro, ContactBand } from "@/components/portfolio/PageElements";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { projects } from "@/data/portfolio";
export const Route = createFileRoute("/projects/")({
  head:()=>({meta:[{title:"Projects — Stephen Jarso"},{name:"description",content:"Selected backend systems, developer tools, and engineering projects by Stephen Jarso."},{property:"og:title",content:"Projects — Stephen Jarso"},{property:"og:description",content:"Selected backend systems, developer tools, and engineering projects."},{property:"og:type",content:"website"},{property:"og:url",content:"/projects"},{name:"twitter:card",content:"summary_large_image"}],links:[{rel:"canonical",href:"/projects"}]}), component: ProjectsPage });
function ProjectsPage(){return <main><div className="page-shell"><PageIntro eyebrow="Selected work / 2026" title="Software designed around the system."><p>A closer look at practical projects spanning secure developer tooling, community finance, real-time applications, and retrieval systems.</p></PageIntro><section className="project-list">{projects.map((p,i)=><ProjectCard key={p.slug} project={p} reverse={i%2===1}/>)}</section></div><ContactBand/></main>}
