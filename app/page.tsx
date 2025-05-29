'use client';

import Image from "next/image";
import Link from "next/link";
import { Roboto } from "next/font/google";
import { useState } from 'react';
import Navbar from "@/components/main/nav";
import MusicStream from "@/components/stream/music";
import { Unbounded } from "next/font/google";
import { cn } from "@/utils";

const r = Roboto({
  subsets: ["latin"],
})

const u = Unbounded({
  subsets: ["latin"],
})

export default function Home() {
  const [openPanel, setOpenPanel] = useState<'about' | 'testimonials' | 'socials' | false>(false);
  return (
    <>
      <Navbar active='home' />
      <main className="flex flex-col row-start-2 items-center md:items-start">
        <div className="flex gap-2 items-center">
          <Image
            src="/logos/logo.svg"
            alt="MAЯTÍN logo"
            width={180}
            height={38}
            className="hidden md:block"
          />
          <Image
            src="/logos/logo.svg"
            alt="MAЯTÍN logo"
            width={80}
            height={38}
            className="md:hidden"
          />
          <div className="relative">
            <h1 className={cn(
              "glitch-index text-[3rem] md:text-[7rem] font-bold",
              u.className
            )} aria-hidden>
              <span>MAЯTÍN</span>
              MAЯTÍN
              <span>MAЯTÍN</span>
            </h1>
            <MusicStream />
            <p className="sr-only">
              martin
            </p> {/* this is for screen readers, so they dont try readiing the backward R as its actual cyrillic character */}
          </div>
        </div>
        <div className="flex gap-4 items-center flex-row">
          <button
            onClick={() => setOpenPanel(openPanel === 'about' ? false : 'about')}
            className="border-mdv transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            <span>about</span>
          </button>
          <button
            onClick={() => setOpenPanel(openPanel === 'testimonials' ? false : 'testimonials')}
            className="border-mdv transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            <span>testimonials</span>
          </button>
          <button
            onClick={() => setOpenPanel(openPanel === 'socials' ? false : 'socials')}
            className="border-mdv transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
          >
            <span>socials</span>
          </button>
        </div>
      </main>
      <div
        className={`fixed top-0 right-0 p-4 h-full w-full md:w-90 flex flex-row md:block bg-transparent transform transition-transform duration-300 ease-in-out ${openPanel === "about" ? 'translate-x-0' : 'translate-x-full'} z-50`}
      >
        <button onClick={() => setOpenPanel(false)} className="md:hidden p-2 mx-2 rounded-lg h-full bg-red-700 hover:bg-red-800">
          {`>`}
        </button>
        <div className="bg-[#1a1a1a99] h-full rounded-lg border-2 border-[#fcfcfc] backdrop-blur-sm z-51 flex flex-col justify-between items-start overflow-y-auto">
          <div className={`text-[#fcfcfc] p-4 ${r.className} popout-text`}>
            <p>
              <strong>hi, i'm martin.</strong>
              <br /><br />
              i'm a rail enthusiast and a javascript/typescript developer. i'm 17, born in chile and currently living in the united kingdom.
              <br /><br />
              i've been big into computers since i was well young, but never really got into programming until i was about 14 and it became part of my school curriculum. having started with python, i quickly moved on to javascript and typescript, and now i mainly work with react and next.js.
              <br /><br />
              i'm also proficient with node.js, and have made many simple servers and bots with it. i also have experience with express.js, and have made a few simple web apps with it.
              <br /><br />
              my passion for the railways started the second i step foot in the country — the london underground fascinated me since young, and my enthusiasm has only grown since then. i trainspot quite often: i log my sightings on <a href="https://www.trainlogger.co.uk/" className="text-[#fcfcfc] hover:underline hover:underline-offset-4">trainlogger</a>. go check it out :p
            </p>
          </div>
          <div className="hidden md:flex md:flex-row">
            <button onClick={() => setOpenPanel(false)} className="p-2 m-4 bg-red-700 hover:bg-red-800 text-white rounded-2xl hover:cursor-pointer transition-all duration-300 ease-in-out">
              close
            </button>
            <p className="text-[#b5b5b552] text-sm py-4 mr-4 hidden md:block">
              or click the "about" button again to close this panel.
            </p>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 right-0 p-4 h-full w-full md:w-90 flex flex-row md:block bg-transparent transform transition-transform duration-300 ease-in-out ${openPanel === "testimonials" ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <button onClick={() => setOpenPanel(false)} className="md:hidden p-2 mx-2 rounded-lg h-full bg-red-700 hover:bg-red-800">
          {`>`}
        </button>
        <div className="bg-[#1a1a1a99] h-full rounded-lg border-2 border-[#fcfcfc] backdrop-blur-sm z-51 flex flex-col justify-between items-start overflow-y-auto">
          <div className={`text-[#fcfcfc] p-4 ${r.className} popout-text`}>
            <p>
              <strong>things people have said about me:</strong>
              <br /><br />
              <span className="block border-l-2 border-[#b2b2b2] rounded-xs pl-2 mb-2 italic">this lads coding skills are insane</span>
              some kid from my school who lowkey seems uneducated with computers
              <br /><br />
              <span className="block border-l-2 border-[#b2b2b2] rounded-xs pl-2 mb-2 italic">martin ur development skills are so amazing and awesome and they give me great joy i love how you develop so skilfully and your website is awesome</span>
              veni, shortest girl on the planet
              <br /><br />
              <span className="block border-l-2 border-[#b2b2b2] rounded-xs pl-2 mb-2 italic">if looks could kill this website would be in prison</span>
              edmeister, aura farmer of all time
              <br /><br />
              <span className="block border-l-2 border-[#b2b2b2] rounded-xs pl-2 mb-2 italic">eat some chocolate chocolate chip</span>
              Joseph Robinette Biden Jr., 46th President of the United States of America
            </p>
          </div>
          <div className="hidden md:flex md:flex-row">
            <button onClick={() => setOpenPanel(false)} className="p-2 m-4 bg-red-700 hover:bg-red-800 text-white rounded-2xl hover:cursor-pointer transition-all duration-300 ease-in-out">
              close
            </button>
            <p className="text-[#b5b5b552] text-sm py-4 mr-4 hidden md:block">
              or click the "testimonials" button again to close this panel.
            </p>
          </div>
        </div>
      </div>
      <div className={`fixed top-0 right-0 p-4 h-full w-full md:w-90 flex flex-row md:block bg-transparent transform transition-transform duration-300 ease-in-out ${openPanel === "socials" ? 'translate-x-0' : 'translate-x-full'} z-50`}>
        <button onClick={() => setOpenPanel(false)} className="md:hidden p-2 mx-2 rounded-lg h-full bg-red-700 hover:bg-red-800">
          {`>`}
        </button>
        <div className="bg-[#1a1a1a99] h-full rounded-lg border-2 border-[#fcfcfc] backdrop-blur-sm z-51 flex flex-col justify-between items-start overflow-y-auto">
          <div className={`text-[#fcfcfc] p-4 ${r.className} popout-text`}>
              <strong>my corners of the internet:</strong>
              <br /><br />
              <a target="_blank" href="https://mbfr.me/twitter" className="text-[#fcfcfc] p-2 bg-[#08a0e9] hover:bg-[#0a8dd4] rounded-lg">twitter</a><br />
              <p className="mt-4">where i complain about my country and stuff or something, i'm very opinionated</p>
              <hr className="my-4" />
              <a target="_blank" href="https://mbfr.me/discord" className="text-[#fcfcfc] p-2 bg-[#5865F2] hover:bg-[#4752C4] rounded-lg">discord</a><br />
              <p className="mt-4">where i talk to my friends and stuff, and also where i make cool bots and stuff</p>
              <hr className="my-4" />
              <a target="_blank" href="https://mbfr.me/github" className="text-[#fcfcfc] p-2 bg-[#181717] hover:bg-[#0d0d0d] rounded-lg">github</a><br />
              <p className="mt-4">where i post my projects and stuff, self explanatory</p>
              <hr className="my-4" />
              <a target="_blank" href="https://mbfr.me/instagram" className="text-[#fcfcfc] p-2 bg-[#E1306C] hover:bg-[#D62976] rounded-lg">instagram</a><br />
              <p className="mt-4">where i post my really cool photos of trains and stuff, and my go-to for doomscrolling</p>
              <hr className="my-4" />
              <a target="_blank" href="https://mbfr.me/trainlogger" className="text-[#DFEBF5] p-2 bg-[#4A5F74] hover:bg-[#6e8ba9] rounded-lg">trainlogger</a><br />
              <p className="mt-4">where i log my trainspotting sightings and post more photos than i do on instagram i like it</p>
          </div>
          <div className="hidden md:flex md:flex-row">
            <button onClick={() => setOpenPanel(false)} className="p-2 m-4 bg-red-700 hover:bg-red-800 text-white rounded-2xl hover:cursor-pointer transition-all duration-300 ease-in-out">
              close
            </button>
            <p className="text-[#b5b5b552] text-sm py-4 mr-4 hidden md:block">
              or click the "socials" button again to close this panel.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
