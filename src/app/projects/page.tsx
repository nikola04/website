import Project from "@/components/project";
import { projects } from "@/data/projects";

export default function Home() {
  return (<div className="w-full py-14 flex flex-wrap">
    <section className="w-full py-6">
      <h1 className="tracking-wider font-bold text-gray dark:text-white text-2xl">My Projects</h1>
      <div className="grid grid-cols-3 gap-4 my-4">
        {projects.map((project, i) => <Project key={i} project={project} />)}
      </div>
    </section>
  </div>)
}
