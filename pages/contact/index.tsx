import Head from 'next/head'
import Link from 'next/link'
import FlipCard from '@/components/flipcard'
import Navbar from '@/components/navbar'
import styles from '@/styles/Contact.module.css'
import { Inter } from 'next/font/google'
import { GetStaticProps } from 'next'
import rateLimit from 'express-rate-limit'


export default function Contact() {
    return (
            <div className={styles.container}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Contact // MAЯTÍN</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant&display=swap" />
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
            <Navbar active="contact" />
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
                        <div className={styles.cardwrapper}>
                            <FlipCard frontContent={
                                <div className={styles.card}>
                                    <h2 className={styles.cardtitle}>email</h2>
                                </div>
                            } backContent={
                                <div className={styles.card}>
                                    <h2 className={styles.cardtitle}>email</h2>
                                    <p className={styles.cardtext}>you can email me at <a href="mailto:martin@mbfrias.co.uk" className={styles.link}>martin@mbfrias.co.uk</a></p>
                                </div>
                            } />
                            <FlipCard frontContent={
                                <div className={styles.card}>
                                    <h2 className={styles.cardtitle}>socials</h2>
                                </div>
                            } backContent={
                                <div className={styles.card}>
                                    <h2 className={styles.cardtitle}>socials</h2>
                                    <p className={styles.cardtext}>
                                        <a href="https://twitter.com/t_ub3" className={styles.link}>twitter</a><br />
                                        <a href="https://github.com/mbfrias" className={styles.link}>github</a><br />
                                    </p>
                                </div>
                            } />
                        </div>
                        <div className={styles.form}>
                            <h1 className={styles.formtitle}>or drop me a message</h1>
                            <form action="https://formaliser.net/send?to=martin@mbfrias.co.uk" method="POST" className={styles.formelement}>
                                <label className={styles.formlabel} htmlFor="name">name</label><br />
                                <input className={styles.smallinput} type="text" name="name" id="name" placeholder="Charlie Woodhead" required /><br />
                                <label className={styles.formlabel} htmlFor="email">email</label><br />
                                <input className={styles.smallinput} type="email" name="email" id="email" placeholder="panic@thedis.co" required /><br />
                                <label className={styles.formlabel} htmlFor="subject">subject</label><br />
                                <input className={styles.smallinput} type="text" name="subject" id="subject" placeholder="i love your website" required /><br />
                                <label className={styles.formlabel} htmlFor="message">message</label><br />
                                <textarea className={styles.textarea} name="message" id="message" placeholder="bingle bongle dingle dangle yickety doo yickety da ping pong lippy tappy too tah" required></textarea><br />
                                <input className={styles.submitbutton} type="submit" value="send" />
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
