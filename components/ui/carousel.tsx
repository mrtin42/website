"use client"

import Image from "next/image"

type Project = {
  title: string
  description: string
  image?: string
  flags: string[]
}

const projects: Project[] = [
  {
    title: "Project One",
    description: "Description for project one.",
    image: "/images/project1.png",
    flags: [],
  },
  {
    title: "Project Two",
    description: "Description for project two.",
    image: "/images/project2.png",
    flags: ["invertColours", "titleInImage"],
  },
  // Add more projects as needed
]

export function Content() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      {projects.map((project, index) => (
        <div
          key={index}
          className="snap-center h-screen w-full flex flex-col items-center justify-center text-center p-6 border-b border-neutral-800"
        >
          {project.image && (
            <Image
              src={project.image}
              alt={project.title}
              width={400}
              height={400}
              className={project.flags.includes("invertColours") ? "invert" : ""}
            />
          )}
          <h2 className={`text-3xl mt-4 ${project.flags.includes("titleInImage") ? "sr-only" : ""}`}>
            {project.title}
          </h2>
          <p className="max-w-xl mt-2">{project.description}</p>
        </div>
      ))}
    </div>
  )
}
