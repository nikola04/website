import { ProjectType } from "@/data/projects";
import Image from "next/image";

const images = [{
    name: 'nodejs',
    href: '/nodejs-wide.png'
}, {
    name: 'nextjs',
    href: '/nextjs-wide.png'
}]

export default function Project({ project }: {
    project: ProjectType
  }){
    const image = images.find((image) => image.name == project.type)
    return <div className="w-full bg-white border-2 border-accent hover:scale-105 transition-all h-48 rounded-md relative flex items-center rounded-md overflow-hidden group">
        <div className="w-full h-full flex items-cetner justify-center">
            { image && <Image src={image.href} alt={image.name} /> }
        </div>
        <div className="invisible w-full h-full z-10 flex flex-col absolute">
            <div className="h-full flex justify-center items-center">
                <p className="text-2xl font-bold text-white">{project.name}</p>
            </div>
            <div className="h-full flex justify-center items-center">

            </div>
        </div>
    </div>
}