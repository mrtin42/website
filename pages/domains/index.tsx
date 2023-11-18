import Head from "next/head";
import Link from "next/link";
import Navbar from "@/components/navbar";
import Box from "@/components/box";
import styles from "@/styles/Domains.module.css";
import boxStyles from "@/styles/Box.module.css";

export default function Domains() {
    return (
        <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Domains // MAЯTÍN</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistan&display=swap" />
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
                <header className={styles.header}>
                    <h1 className={[styles.title, "glitch"].join(" ")}>
                        <span aria-hidden="true">domains</span>
                        domains
                        <span aria-hidden="true">domains</span>
                    </h1>
                    <p className={styles.description}>i find myself somewhat obsessed with domains and DNS, so heres the plenty of domains i own</p>
                </header>
                <div className={styles.grid}>
                    <Box title="marrtin.com" className={boxStyles.card}>
                        <p className={styles.description}>this website's main domain</p>
                    </Box>
                    <Box title="mbfrias.co.uk + .me.uk" className={boxStyles.card}>
                        <p className={styles.description}>
                            this website's redirect domains
                            <br />
                            <br />
                            .co.uk: my email domain (big up <Link href="https://protonmail.com" className={styles.link}>protonmail</Link>)
                            <br />
                            .me.uk: automated emails (big up <Link href="https://spacemail.com" className={styles.link}>spacemail</Link>)
                        </p>
                    </Box>
                    <Box title="londontransit.org.uk + .me.uk + .xyz" className={boxStyles.card}>
                        <p className={styles.description}>
                            my discord bot's website [org.uk mainly]
                            <br />
                            (i am not planning on renewing the .me.uk and .xyz domains)
                        </p>
                    </Box>
                    <Box title="mrtin.co, mvrt.in, mbfr.me" className={boxStyles.card}>
                        <p className={styles.description}>url shorteners (big up <Link href="https://dub.co" className={styles.link}>dub.co</Link>)</p>
                    </Box>
                    <Box title="mbfr.app" className={boxStyles.card}>
                        <p className={styles.description}>subdomain for any of my web apps that dont remit a domain of their own</p>
                    </Box>
                    <Box title="formaliser.net" className={boxStyles.card}>
                        <p className={styles.description}>that backend for web forms that i made</p>
                    </Box>
                    <Box title="mbfrias.pp.ua, tub3.uk, tub3.tech" className={boxStyles.card}>
                        <p className={styles.description}>random domains i got for free and i only use for testing</p>
                    </Box>

                </div>
            </main>
        </div>
    );
}