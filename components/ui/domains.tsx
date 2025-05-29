'use client';

import { cn } from '@/utils';
import { toast } from 'sonner';

export type Domain = {
  name: string;
  description: string;
  self?: true;
}

export const domains: Domain[] = [
  {
    name: "mbfrias.com",
    description: "main url which redirects to this site, my personal portfolio and blog. i sometimes put other things under subdomains too.",
    self: true,
  }, {
    name: "mbfrias.co.uk",
    description: "my main email domain. visiting this domain will redirect you to mbfrias.com, but if you ever email me, it'll be to and from an mbfrias.co.uk address. i use this domain for most my personal email.",
    self: true,
  }, {
    name: "md3v.co.uk",
    description: "another url that i used for my personal portfolio and blog.",
    self: true,
  }, {
    name: "achtung.dev",
    description: "i really like the word acthung. thus, a domain i bought to host development projects and api-ish endpoints. isn't that cool?"
  }, {
    name: "martinsmacbook.net",
    description: "sometimes i run things temporarily on my macbook — ESPECIALLY things im developing and testing. i often need the assistance of other people or devices so with the help of Cloudflare Zero Trust, some ports on my macbook are exposed to the internet. this domain is used to access those ports.",
  }, {
    name: "mrtin.co",
    description: "similar to achtung.dev, but for web-based / publically accessible projects."
  }, {
    name: "mvrt.in",
    description: "my personal URL shortener. my first one too. i use it to shorten links to anything i share or something. initially powered by Dub.co, i then migrated it to a project of mine: MLINX. i then had to shut it down because of cost restraints and since then moved back to Dub.co."
  }, {
    name: "mbfr.me",
    description: "another one. used for more permanent, static shortlinks, like ones that point to my social media accounts."
  }, {
    name: "md3v.co",
    description: "another url shortener. sorry lmao"
  }, {
    name: "mdev.lol",
    description: "my fourth url shortener. looking back, there really is no need. i think i have a problem."
  }, {
    name: "tubee.dev",
    description: "this one was my first domain. it was originally my portfolio because everyone knew me as \"tubee\" because it was my roblox username because i really liked the london underground. i eventually just became known by my actual name, so there's no point of it now. come to think of it, i'm pretty sure it expired when i wrote this (may 2025). LOL"
  }
];

export default function Domains() {
  return (
    <div className="h-[65svh] md:h-[85svh] w-[80svw] md:w-full flex flex-col items-center md:pr-4 md:m-2 overflow-custom-scrollbar overscroll-contain overflow-x-hidden overflow-y-auto ios-scroll-fix">
      {domains.map((domain, index) => (
        <div
          key={index}
          className={cn(
            "my-2 md:m-2 bg-[#1a1a1a89] backdrop-blur-xl border-2 rounded-2xl px-3 md:p-3 w-full flex flex-col items-center justify-center text-center",
            index === 0 ? "mt-0" : "",
          )}
        >
          <div className="flex flex-row items-center justify-between w-full my-2 px-3">
            <div className="flex flex-row items-start justify-center gap-2">
              <h2 className="text-xl md:text-xl font-semibold">{domain.name}</h2>
            </div>
            <a
              href={`https://${domain.name}`}
              rel="noopener noreferrer"
              target="_blank"
              onClick={(e) => {
                if (domain.self) {
                  e.preventDefault();
                  toast('this is that. that is this. you are already here!');
                }
              }}
              className="text-sm md:text-base border-mdv text-white px-4 py-1 rounded-md hover:bg-blue-600 transition-colors"
              aria-label={`Visit ${domain.name}`}
            >
              visit <span className="hidden md:inline">{domain.name}</span>
            </a>
          </div>
          <p className="px-3 mb-2 w-full text-left text-sm md:text-base text-gray-300">
            {domain.description}
          </p>

        </div>
      ))}
    </div>
  )
}