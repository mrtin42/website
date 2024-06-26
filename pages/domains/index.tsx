import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Box from "@/components/box";
import DBox from "@/components/dbox";
import styles from "@/styles/Domains.module.css";
import boxStyles from "@/styles/Box.module.css";
import {
    Carousel,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
    CarouselContent
} from '@/components/ui/carousel'

export default function Domains() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Domains // MAЯTÍN</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:wght@300&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap" />
                <meta name="description" content="a list of all of my domains" />
                <meta name="keywords" content="web, developer, web developer, trains, code, martin, tube, domains" />
                <meta name="author" content="MAЯTÍN" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="language" content="English" />
                <meta name="revisit-after" content="7 days" />
                <meta name="generator" content="MAЯTÍN using Next.js" />
                <meta name="rating" content="General" />
                <meta name="distribution" content="Global" />
                <meta property="og:title" content="Domains // MAЯTÍN" />
                <meta property="og:description" content="a list of all of my domains" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://marrtin.com/domains" />
                <meta property="og:image" content="https://marrtin.com/domains/og.png" />
                <meta property="og:image:alt" content="MAЯTÍN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@t_ub3" />
                <meta name="twitter:creator" content="@t_ub3" />
                <meta name="twitter:title" content="Domains // MAЯTÍN" />
                <meta name="twitter:description" content="a list of all of my domains" />
                <meta name="twitter:image" content="https://marrtin.com/domains/og.png" />
                <meta name="twitter:image:alt" content="MAЯTÍN" />
                <link rel="favicon" href="/favicon.ico" />
            </Head>
            <Navbar active="domains" />
            <main className={styles.main}>
                <div className="bg-red-600 rounded-md text-white m-2 p-2 w-[70%]">
                    <p className="text-center font-sans">
                        excuse the mess - this page is mid-redesign. expect a neater look once the exam season is over
                    </p>
                </div>
                <header className={styles.header}>
                    <h1 className={[styles.title, "glitch"].join(" ")}>
                        <span aria-hidden="true">domains</span>
                        domains
                        <span aria-hidden="true">domains</span>
                    </h1>
                    <p className={styles.description}>i find myself somewhat obsessed with domains and DNS, so heres the plenty of domains i own</p>
                </header>
                {/* <div className={styles.grid}>
                    <DBox title="martin.blue" domainlink="martin.blue" className={boxStyles.card}>
                        <p className={styles.description}>
                            literally me in a domain blue is my favourite colour and my name is martin
                            <br /><br />
                            main domain for my websites and other internet accesible resources i host
                        </p>
                    </DBox>
                    <DBox title="marrtin.com" domainlink="marrtin.com" className={boxStyles.card}>
                        <p className={styles.description}>legacy main domain, redirects to martin.blue now (it was great while it lasted)</p>
                    </DBox>
                    <DBox domainlink="mbfrias.com" title="mbfrias.co.uk + .me.uk + .com" className={boxStyles.card}>
                        <p className={styles.description}>
                            my name, in various TLDs
                            <br /><br />
                            .co.uk: main email domain (big up <Link href="https://protonmail.com">protonmail</Link>)<br />
                            .me.uk: kinda useless, got it for automated emails which is now obsolete<br />
                            .com: kinda useless, got it for internet accesible resources which is now down to martin.blue (things will begin to disappear from mbfrias.com soon)
                        </p>
                    </DBox>
                    <DBox domainlink="mrtin.co" title="mrtin.co + .cl" className={boxStyles.card}>
                        <p className={styles.description}>
                            subdomain for things that don't need a full domain (e.g. <Link href="https://landingpages.mrtin.co">landingpages.mrtin.co</Link>)
                        </p>
                    </DBox>
                    <DBox domainlink="mvrt.in" title="mvrt.in" className={boxStyles.card}>
                        <p className={styles.description}>
                            my personal URL shortener, powered by <Link href="https://dub.co">dub</Link>
                            <br /><br />
                            (feeling like ditching dub.co and making my own URL shortener because someone fell victim to CAPITLISM and nerfed the free plan while DOUBLING the price of the paid plan)
                        </p>
                    </DBox>
                    <DBox domainlink="martinservers.cloud" title="martinservers.cloud" className={boxStyles.card}>
                        <p className={styles.description}>
                            domain for servers / VPSs i own and manage (to make CNAMEs easier)
                            <br /><br />
                             
                        </p>
                    </DBox>
                    <DBox domainlink="martinmail.one" title="martinmail.one" className={boxStyles.card}>
                        <p className={styles.description}>
                            general email domain, used for automated emails from my projects (when will everyone stop limiting custom domains to just one domain)
                        </p>
                    </DBox>

                    <br />
                    <h2 className={styles.description}>other, usually inactive domains that i own/manage</h2>
                    <br />
                    <DBox domainlink="tubee.dev" title="tubee.dev" className={boxStyles.card}>
                        <p className={styles.description}>
                            the first domain i ever bought, based off my dying online alias "tube" and the fact that i am a developer
                        </p>
                    </DBox>
                    <DBox domainlink="tub3.uk" title="tub3.uk + .tech" className={boxStyles.card}>
                        <p className={styles.description}>
                            same as above, but with a 3 instead of an e (also i got them for free) - used for testing and is usually broken
                        </p>
                    </DBox>
                    <DBox domainlink="mbfrias.pp.ua" title="mbfrias.pp.ua" className={boxStyles.card}>
                        <p className={styles.description}>
                            free domain which i use for testing and is usually broken
                        </p>
                    </DBox>
                    <p className={styles.description}>i also manage a few domains for friends/family, but i won't list them here for privacy reasons</p>
                    <p>***</p>
                    <p className={styles.description}>i also have one more domain, but due to its possibly explicit nature (landed me in an hour long detention in school), i won't list it here but it is connected to my <Link href="https://discord.com/users/488061232461381643">discord account</Link> (should save you from also getting detention if you happen to be on a school computer)</p>

                </div> */}
                <div className="flex flex-col space-y-4">
                    <Carousel orientation="vertical">
                        <CarouselContent>
                            <CarouselItem>
                                <DBox title="martin.blue" domainlink="martin.blue" className={boxStyles.card}>
                                    <p className={styles.description}>
                                        literally me in a domain blue is my favourite colour and my name is martin
                                        <br /><br />
                                        main domain for my websites and other internet accesible resources i host
                                    </p>
                                </DBox>
                            </CarouselItem>
                            <CarouselItem>
                                <DBox title="mvrt.in" domainlink="mvrt.in" className={boxStyles.card}>
                                    <p className={styles.description}>
                                        my personal URL shortener, powered by <Link href="https://dub.co">dub</Link>
                                        <br /><br />
                                        (feeling like ditching dub.co and making my own URL shortener because someone fell victim to CAPITLISM and nerfed the free plan while DOUBLING the price of the paid plan)
                                    </p>
                                </DBox>
                            </CarouselItem>
                            <CarouselItem>
                                <DBox domainlink="mrtin.co" title="mrtin.co + .cl" className={boxStyles.card}>
                                    <p className={styles.description}>
                                        subdomain for things that don't need a full domain (e.g. <Link href="https://landingpages.mrtin.co">landingpages.mrtin.co</Link>)
                                    </p>
                                </DBox>
                            </CarouselItem>
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
            </main>
        </div>
    );
}