import Head from 'next/head'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import Box from '@/components/box'
import styles from '@/styles/Projects.module.css'
import boxStyles from '@/styles/Box.module.css'
import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next'

export default function Projects() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Projects // MAЯTÍN</title>
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:wght@300&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap" />
                <meta name="description" content="i have made things and i think they're cool and you should check them out" />
                <meta name="keywords" content="web, developer, web developer, trains, code, martin, tube, projects" />
                <meta property="og:title" content="Projects // MAЯTÍN" />
                <meta property="og:description" content="i have made things and i think they're cool and you should check them out" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://marrtin.com/projects" />
                <meta property="og:image" content="https://marrtin.com/projects/og.png" />
                <meta property="og:image:alt" content="MAЯTÍN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@t_ub3" />
                <meta name="twitter:creator" content="@t_ub3" />
                <meta name="twitter:title" content="Projects // MAЯTÍN" />
                <meta name="twitter:description" content="i have made things and i think they're cool and you should check them out" />
                <meta name="twitter:image" content="https://marrtin.com/projects/og.png" />
                <meta name="twitter:image:alt" content="MAЯTÍN" />
                <meta name="author" content="MAЯTÍN" />
                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="notranslate" />
                <meta name="google" content="nositelinkssearchbox" />
                <meta name="generator" content="MAЯTÍN using Next.js" />
                <meta name="rating" content="General" />
                <meta name="distribution" content="Global" />
                <meta name="revisit-after" content="7 days" />
                <meta name="language" content="English" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar active="projects" />
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1 className={[styles.title, 'glitch'].join(' ')}>
                        <span aria-hidden="true">projects</span>
                        projects
                        <span aria-hidden="true">projects</span>
                    </h1>
                    <p className={styles.description}>i have made things and i think they're cool and you should check them out</p>
                </header>
                <div className={styles.grid}>
                    <Box title="LondonTransit" className={boxStyles.card}>
                        <p className={styles.description}>A discord bot that provides information about the London, UK public transport system.</p>
                        <Link href="https://londontransit.mrtin.co" className={boxStyles.boxurl} target='_blank'>londontransit.org.uk</Link>
                    </Box>
                    <Box title="FORMALISER" className={boxStyles.card}>
                        <p className={styles.description}>A backend for web forms that allows you to submit HTML forms to your email.</p>
                        <Link href="https://formaliser.mrtin.co" className={boxStyles.boxurl} target='_blank'>formaliser.net</Link>
                    </Box>
                    <Box title="Kool Kookie Klicker" className={boxStyles.card}>
                        <p className={styles.description}>Basic cookie clicker game made in raw HTML, CSS and JS that i made purely to test my client side JS skills.</p>
                        <Link href="https://koolkookieklicker.mrtin.co" className={boxStyles.boxurl} target='_blank'>koolkookieklicker.mrtin.co</Link>
                    </Box>
                    <Box title="MAЯTÍN" className={boxStyles.card}>
                        <p className={styles.description}>This website, made in Next.js and React. Adapted from its original form in raw HTML, CSS and JS.</p>
                        <Link href="https://www.mrtin.co" className={boxStyles.boxurl} target='_blank'>marrtin.com</Link>
                    </Box>
                    {/* <Box title="Scriptables" className={boxStyles.card}>
                        <p className={styles.description}>A collection of scripts for the iOS app Scriptable.</p>
                        <Link href="./scriptables" className={boxStyles.boxurl} target='_blank'>scriptables</Link>
                    </Box> */}
                </div>
                <p className={styles.belowbox}>theyre so cool arent they</p>
            </main>
        </div>
    )
}
