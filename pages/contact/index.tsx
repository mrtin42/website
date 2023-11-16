import Head from 'next/head'
import Link from 'next/link'
import styles from '@/styles/Contact.module.css'
import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next'
import FlipCard from '@/components/flipcard'

export default function Contact() {
    return (
            <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
                <title>Contact // MAЯTÍN</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistan&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:wght@300&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap" />
                <meta name="description" content="got a question? want to insult me? want to tell me how cool i am? this is the place to do it" />
                <meta name="theme-color" content="#19327d" />
                <meta name="mobile-web-app-capable" content="yes" />
                <meta name="apple-mobile-web-app-title" content="MAЯTÍN" />
                <meta name="keywords" content='web, developer, web developer, trains, code, martin, tube' />
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
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@t_ub3" />
                <meta name="twitter:creator" content="@t_ub3" />
                <meta name="twitter:title" content="Contact // MAЯTÍN" />
                <meta name="twitter:description" content="got a question? want to insult me? want to tell me how cool i am? this is the place to do it" />
                <meta name="twitter:image" content="https://marrtin.com/contact/og.png" />
                <meta name="twitter:image:src" content="https://marrtin.com/contact/og.png" />
                <meta property="og:url" content="https://marrtin.com/contact" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Contact // MAЯTÍN" />
                <meta property="og:description" content="got a question? want to insult me? want to tell me how cool i am? this is the place to do it" />
                <meta property="og:image" content="https://marrtin.com/contact/og.png" />
                <meta property="og:image:secure_url" content="https://marrtin.com/contact/og.png" />
                <meta property="og:image:type" content="image/png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <link rel="favicon" href="/favicon.ico" />
            </Head>
            <nav className='navbar'>
                <ul>
                    <li><a href="./" className="page-link">home</a></li>
                    <li><a href="./projects" className="page-link">projects</a></li>
                    <li><a href="./contact" className="page-link glitch">contact</a></li>
                    <li><a href="./domains" className="page-link">domains</a></li>
                </ul>
            </nav>
            <main className={styles.main}>
                <header className={styles.header}>
                    <h1 className={[styles.title, 'glitch'].join(' ')}>
                        <span aria-hidden="true">contact</span>
                        contact
                        <span aria-hidden="true">contact</span>
                    </h1>
                    <p className={styles.description}>got a question? want to insult me? want to tell me how cool i am? this is the place to do it</p>
                </header>
                <div className={styles.wrapper}>
                    <div className={styles.grid}>
                        <FlipCard frontContent={
                            <div className={styles.card}>
                                <h2 className={styles.cardtitle}>email</h2>
                            </div>
                        } backContent={
                            <div className={styles.card}>
                                <h2 className={styles.cardtitle}>email</h2>
                                <p className={styles.cardtext}>you can email me at <a href="mailto:martin@mbfrias.co.uk" className="link">martin@mbfrias.co.uk</a></p>
                            </div>
                        }
                        />
                    </div>
                </div>
            </main>
        </div>
    )
}