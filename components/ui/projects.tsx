'use client';

import Image from "next/image";
import { cn } from "@/utils";
import * as Tooltip from "@/components/ui/tooltip";
import { toast } from "sonner";

export type Project = {
  title: string;
  description: string;
  link?: string;
  image?: string | null;
  repo?: string;
  tags: string[];
  flags: string[];
  displayFlags?: string[]; // flags that affect how the project is displayed in the carousel item
};

export const projects: Project[] = [
  {
    title: "LondonTransit",
    description: "a comprehensive discord bot for information on transport for london services. written in javaScript with node.js and discord.js, it provides real-time updates on bus, tube, and train services, including live service status, station departures and disruptions. interacts directly with TfL's api to deliver accurate and timely information to users. londontransit was my first fully-fledged project, and it was (and still is) a great learning experience.",
    link: "https://londontransit.org.uk",
    image: "https://londontransit.org.uk/assets/images/botlogo.svg",
    repo: "https://github.com/mrtin42/londontransit",
    tags: ["discord", "bot", "transport", "tfl", "nodejs"],
    flags: ["active"],
    displayFlags: ["titleInImage"]
  },
  {
    title: "FORMALISER.net",
    description: "an extremely basic endpoint for html form submissions, allowing users to send data from forms to an email address written into the url. zero-setup, no database. written in javascript with node.js and express, it provides a simple solution for handling form submissions without the need for complex backend systems. unfortunately, it is frequently marked as spam by email providers and is consequently no longer worth maintaining, so it is not recommended for production use. it was honestly just a for fun project. don't use it.",
    link: "https://formaliser.net",
    image: "https://formaliser.net/formaliser.svg",
    repo: "https://github.com/mrtin42/formaliser.net",
    tags: ["form", "endpoint", "nodejs", "express"],
    flags: ["deprecated"],
    displayFlags: ["titleInImage", "invertColours"]
  },
  {
    title: "Last.fm Listening Streamer",
    description: "a websocket-based application that streams last.fm listening data to a web client. written in javascript with node.js and express, it provides real-time updates on users' last.fm listening activity. the application connects to the last.fm api to fetch user data and streams it to connected clients via websockets, allowing for live updates on what users are listening to. you can see it in action on my website – if i'm listenning to music, it will show up as a spinning album cover in the bottom right corner of my name on the homepage. for your own use, you can run it locally by cloning the repository and following the instructions in the readme.",
    link: "https://github.com/mrtin42/listening-streamer",
    image: null,
    repo: "https://github.com/mrtin42/listening-streamer",
    tags: ["last.fm", "websocket", "nodejs", "express"],
    flags: ["active"]
  },
  {
    title: "monzocord",
    description: "an experimental discord bot for the monzo api, written in javascript with node.js and discord.js. it allows users to interact with their monzo accounts directly from discord, providing features such as balance checks, transaction history, and more. it's a work in progress and due to it handling sensitive financial data, you will ONLY be able to self-host it with your own monzo credentials. there is and will never be a public instance of this bot. cool if you need to flex your 6 figures on your homeboys.",
    link: "https://github.com/mrtin42/monzocord",
    image: null,
    repo: "https://github.com/mrtin42/monzocord",
    tags: ["discord", "bot", "monzo", "nodejs", "express"],
    flags: ["wip", "experimental"]
  },
  {
    title: "FreedomBot",
    description: "a custom-commissioned discord bot for a discord community, written in javascript with node.js and discord.js. it provides various features such as moderation tools, verification systems, and more. the bot is designed to enhance the user experience within the community, providing a range of functionalities to help manage and engage with members effectively. it is a private bot, so you will not be able to use it unless you are in the community it was made for.",
    link: "https://github.com/mrtin42/freedombot",
    image: null,
    repo: "https://github.com/mrtin42/freedombot",
    tags: ["discord", "bot", "nodejs", "express"],
    flags: ["active", "private"]
  },
  {
    title: "MLINX",
    description: "a simple, easy-to-use, and lightweight link-shortening service written in javascript with node.js and express. it allowed users to shorten long URLs into short, shareable links, even offering the option to add custom domains. the service was designed to be user-friendly and efficient, providing a straightforward solution for link management. however, the service had to be shut down when the database provider, planetscale, decided to stop offering a free tier. lacking the funds to pay for the service, and due to functionality being specifically engineered to work with planetscale, the service was discontinued. it was a fun project to work on, and i learned a lot about link management and database integration. i've since them used dub.com for my link-shortening needs, which is a great service that offers similar functionality with a free tier.",
    // link: "https://mlinxapp.com",
    image: null,
    repo: "https://github.com/mrtin42/mlinx",
    tags: ["link", "shortener", "nodejs", "express"],
    flags: ["discontinued"]
  },
  {
    title: "this website",
    description: "exactly what it says on the tin. this website is a personal portfolio and blog, showcasing my projects, skills, and experiences. it is built with next.js and tailwindcss, providing a modern and responsive design. the website features a blog section where i share my thoughts on various topics, as well as a projects section where i showcase my work. it is designed to be a simple and effective way to present myself online.",
    link: "https://mbfrias.com", /* that link will always point here. im never abandoning this domain. */
    image: null,
    repo: "https://github.com/mrtin42/website",
    tags: ["nextjs", "tailwindcss", "portfolio", "blog"],
    flags: ["active"]
  }
];

export const ProjectTypeFlags = {
  private: {
    label: "private",
    description: "this project is not available to the general public.",
    bgColor: "bg-black",
    icon: "🔒",
  },
  experimental: {
    label: "experimental",
    description: "this project experiments with new ideas or integrations, and may not be fully reliable or functional.",
    bgColor: "bg-purple-500",
    icon: "🧪",
  }
}

export const ProjectStatusFlags = {
  active: {
    label: "active",
    description: "this project is actively maintained and updated.",
    bgColor: "bg-green-500",
  },
  wip: {
    label: "work in progress",
    description: "this project is a work in progress and may not be fully functional or reliable yet.",
    bgColor: "bg-yellow-500",
  },
  deprecated: {
    label: "deprecated",
    description: "this project is no longer maintained and may not work as intended, or at all.",
    bgColor: "bg-orange-500",
  },
  discontinued: {
    label: "discontinued",
    description: "this project has been discontinued and is no longer available.",
    bgColor: "bg-red-500",
  }    
}

export function ProjectFlagTooltip({ flag, flagType }: {
  flag: string,
  flagType?: "status" | "type"
}) {
  if (flagType === "type") {
    var typeObj: any = ProjectTypeFlags[flag as keyof typeof ProjectTypeFlags];
  } else {
    var statusObj: any = ProjectStatusFlags[flag as keyof typeof ProjectStatusFlags];
  }
  const obj = flagType === "type" ? typeObj : statusObj;
  return (
    <>
      <Tooltip.TooltipProvider>
        <Tooltip.Tooltip delayDuration={100}>
          <Tooltip.TooltipTrigger className="hidden md:inline-flex items-center gap-2">
            <div className={cn(
              "w-7 h-7 rounded-full flex items-center justify-center",
              obj.bgColor,
            )}>
              {flagType === "type" && (
                <span className="text-white text-lg cursor-pointer">{obj.icon}</span>
              )}
            </div>
          </Tooltip.TooltipTrigger>
          <Tooltip.TooltipContent side="top" className="bg-white text-black p-2 rounded-lg text-xl shadow-lg">
            {obj.label}
          </Tooltip.TooltipContent>
        </Tooltip.Tooltip>
      </Tooltip.TooltipProvider>
      {/* but martin, what about mobile? they can't hover! */}
      {/* thanks sherlock, here you go */}
      <div className="md:hidden inline-flex items-center gap-2">
        <div 
          className={cn(
            "w-7 h-7 rounded-full flex items-center justify-center",
            obj.bgColor,
          )}
          onClick={() => {
            toast(
              <div className="flex items-center gap-4">
                <div className={`min-w-8 max-w-8 min-h-8 max-h-8 rounded-full flex items-center justify-center ${obj.bgColor}`}>
                  {flagType === "type" && (
                    <span className="text-white text-lg">{obj.icon}</span>
                  )}
                </div>
                <div className="text-black text-lg">
                  <h6 className="font-bold">{obj.label}</h6>
                  <p className="text-sm">{obj.description}</p>
                </div>
              </div>
            )}}
          >
          {flagType === "type" && (
            <span className="text-white text-lg">{obj.icon}</span>
          )}
          </div>
        </div>
    </>
  );
}

/**
 * Flag meanigs:
 * 
 * Project status flags:
 * - `active`: the project is actively maintained and updated. will show a green dot in the carousel item.
 * - `wip`: the project is a work in progress and may not be fully functional. will show a yellow dot with a hammer in the carousel item.
 * - `deprecated`: the project is no longer maintained and may not work as intended. will show an orange dot with a warning in the carousel item.
 * - `discontinued`: the project has been discontinued and is no longer available. Will show a red dot with a cross in the carousel item.
 * 
 * Project type flags:
 * - `private`: the project is private and not available for public use. Will show a grey dot with a lock in the carousel item.
 * - `experimental`: the project is experimental and may not be fully reliable or functional. Will show a purple dot with a beaker in the carousel item.
 * 
 * Project display flags:
 * - `titleInImage`: the project title is displayed in the image, so it doesn't need to be displayed as text. will hide title text in the carousel item and make it screen reader only.
 * - `invertColours`: the project image has primarily black / dark text or wrapping, making it difficult to see or read on the website's dark background. will invert the colours of the image in the carousel item to make it more readable.
 * 
 * These flags are used to indicate the status and type of the project, as well as how it should be displayed in the carousel item.
 * 
 */

export default function Projects() {
  return (
    <div className="h-[65svh] md:h-[85svh] w-[80svw] md:w-full flex flex-col items-center md:pr-4 md:m-2 overflow-custom-scrollbar overscroll-contain overflow-x-hidden overflow-y-auto ios-scroll-fix">
      {projects.map((project, index) => (
        <div
          key={index}
          className={cn(
            "my-2 md:m-2 bg-[#1a1a1a89] backdrop-blur-xl border-2 rounded-2xl px-3 md:p-3 w-full flex flex-col items-center justify-center text-center",
            index === 0 ? "mt-0" : "",
          )}
        >
          <div className="flex flex-row items-center justify-between w-full my-2 px-3">
            <div className="flex flex-row items-start justify-center gap-2">
              {project.image ? (
                <>
                  <Image
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    width={400}
                    height={400}
                    className={`hidden md:block ${project.displayFlags?.includes("invertColours") ? "invert" : ""}`}
                  />
                  <Image
                    src={project.image}
                    alt={project.title}
                    title={project.title}
                    width={200}
                    height={200}
                    className={`block md:hidden ${project.displayFlags?.includes("invertColours") ? "invert" : ""}`}
                  />
                </>
              ) : null}
              <h2 className={cn(
                "text-left text-xl md:text-3xl font-bold",
                project.displayFlags && project.displayFlags.includes("titleInImage") ? "sr-only" : "",
              )}>
                {project.title}
              </h2>
            </div>
            <div className="flex flex-row items-center gap-2">
              {project.flags.slice(1).map((flag, idx) => (
                <ProjectFlagTooltip key={idx} flag={flag} flagType="type" />
              ))}
              <ProjectFlagTooltip flag={project.flags[0]} /* the first flag is always the status flag, so we can make this tooltip always appear and not worry about conditional rendering */ flagType="status" />
            </div>
          </div>
          <p className="text-sm md:text-base text-gray-300 mb-2 w-full">
            {project.description}
          </p>
          <div className="flex flex-row items-center justify-center gap-4 w-full mb-2">
            {project.repo && (
              <a
                href={project.repo}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-mdv text-white px-4 py-2 rounded-full hover:bg-gray-900 transition-colors"
              >
                View Repo
              </a>
            )}
            {(project.link && project.link !== project.repo) && (
              <a
                href={project.link}
                onClick={(e) => {
                  if (project.title === "this website") {
                    e.preventDefault();
                    toast('this is that. that is this. you are already here!');
                  }
                }}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full border-mdv text-white px-4 py-2 rounded-full hover:bg-blue-600 transition-colors"
              >
                Project Site
              </a>
            )}
          </div>
        </div>
      ))}
    </div>
  )
} 
