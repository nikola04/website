import Project from "@/components/project";
import { projects } from "@/data/projects";
import { skills, SkillType } from "@/data/skills";
import Image from "next/image";
import Link from "next/link";

const projectsToDisplay = ['GetInsta', 'NxCloud', 'Portfolio']

export default function Home() {
  const highlightedProjects = projects.filter((project) => projectsToDisplay.includes(project.name))
  return (
    <div className="py-14 flex flex-col">
      <section className="py-6 w-full max-w-screen-sm min-h-33-svh">
        <h1 className={`tracking-wider font-bold text-gray dark:text-white text-4xl`}>Hello, I&apos;m Nikola 👋</h1>
        <p className="py-6">a Full Stack Developer with a deep passion for coding. <br/>Currently, I am studying software engineering and working on web projects in my free time. 🍸</p>
        <Button name="About Page" text="Read More" href="/about" />
      </section>
      <section className="py-6">
        <h1 className={`tracking-wider font-bold text-gray dark:text-white text-2xl`}>Skills 🛠️</h1>
        <div className="flex flex-nowrap mt-8 mb-4 gap-4">
          { skills.map((skill, i) => {
            return <Skill skill={skill} key={i}/>
          })}
        </div>
        <div className="flex justify-end mb-8">
          <Button name="About Page" text="View All" href="/about" />
        </div>
      </section>
      <section className="py-6">
        <h1 className={`tracking-wider font-bold text-gray dark:text-white text-2xl pb-4`}>Projects 🧱</h1>
        { false && <div>
          <div className="grid grid-cols-3 gap-4 my-4">
            {highlightedProjects.map((project, i) => <Project key={i} project={project} />)}
          </div>
          <div className="flex justify-end">
            <Button name="Projects Page" text="View All" href="/projects" />
          </div>
        </div> }
      </section>
    </div>
  );
}

function Button({ name, text, href }: Readonly<{
  name: string,
  text: string,
  href: string
}>){
  return <Link title={name} href={href} className="px-3 py-1 border text-gray bg-white hover:text-white hover:bg-black dark:bg-black dark:text-white dark:hover:text-gray dark:hover:bg-white border-gray dark:border-white text-sm rounded-md cursor-pointer transition-all">{text}</Link>
}

function Skill({ skill }: {
  skill: SkillType
}){
  const border = "border-2 border-[" + skill.color + "]"
  return <div className={`w-16 h-16 m-1 rounded-md overflow-hidden flex items-center justify-center select-none ${skill.outline && border}`}>
    <Image className="max-w-full max-h-full" src={skill.image} alt={skill.name} />
  </div>
}