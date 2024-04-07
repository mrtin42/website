import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'
import Link from 'next/link'
import Navbar from '@/components/navbar'
import styles from '@/styles/Home.module.css'
import { Inter, Inconsolata, Unbounded } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })
const inconsolata = Inconsolata({ subsets: ['latin'] })
const unbounded = Unbounded({ subsets: ['latin'] })

let open: string | null = null;

export function openPopup(id: string) {
  // Close the current popup if one is open
  if (open) {
    closePopup(open);
  }

  // Show the specified popup
  const showThis = document.getElementById(id);
  if (showThis) {
    showThis.classList.add(styles.active);
    open = id;
  }
}

export function closePopup(id: string) {
  // Hide the specified popup by removing the "active" class
  const closeThis = document.getElementById(id);
  if (closeThis) {
    closeThis.classList.remove(styles.active);
    open = null;
  }
}

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>MAЯTÍN</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:wght@300&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap" />
        <meta name="description" content="i am a web developer im so cool!!! also i really really like trains" />
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
        <meta name="rating" content="general" />
        <meta name="distribution" content="global" />
        <meta name="audience" content="all" />
        <meta name="msapplication-TileColor" content="#19327d" />
        <meta name="generator" content="MAЯTÍN using Next.js" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@t_ub3" />
        <meta name="twitter:creator" content="@t_ub3" />
        <meta name="twitter:title" content="MAЯTÍN" />
        <meta name="twitter:description" content="i am a web developer im so cool!!! also i really really like trains" />
        <meta name="twitter:image" content="https://marrtin.com/og.png" />
        <meta name="twitter:image:src" content="https://marrtin.com/og.png" />
        <meta property="og:url" content="https://marrtin.com" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="MAЯTÍN" />
        <meta property="og:description" content="i am a web developer im so cool!!! also i really really like trains" />
        <meta property="og:image" content="https://marrtin.com/og.png" />
        <meta property="og:image:secure_url" content="https://marrtin.com/og.png" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <div>
        <Navbar active="home" />
        <div className={styles.container}>
          <main className={styles.main}>
            <div className={styles.name}>
              <h1 className={[unbounded.className, 'glitch'].join(' ')}>
                <span aria-hidden="true">MAЯTÍN</span>
                MAЯTÍN
                <span aria-hidden="true">MAЯTÍN</span>
              </h1>
              <div className={styles.sectionbuttons}>
                <button className={styles.sectionopener} id="about" onClick={() => openPopup('aboutpopup')}>about</button>
                <button className={styles.sectionopener} id="skills" onClick={() => openPopup('skillspopup')}>skills</button>
                <button className={styles.sectionopener} id="testimonials" onClick={() => openPopup('testimonialspopup')}>testimonials</button>
              </div>
            </div>
            {/* Why is Minecraft Music so depressing? I don’t fully understand it, I’ll listen to songs like Mice on Venus or Dry Hands and want so sit in a corner and just let my motions overwhelm me, and I’m not a depressed person by what I know. Is it memories? Is it a certain combination of pitch & volume that makes the brain sad? I know it’s not just a sad song, because no other “sad songs” make me feel NEAR what C418 does. If there is anyone who has an answer, just please let me know. */}
            <div className={styles.popup} id="aboutpopup">
              <div className={styles.popupcontent}>
                <h2 className={styles.popuptitle}>about</h2>
                <p className={styles.popupdescription}>
                  16 year old javascript/typescript developer - i make websites and discord bots
                  <br />
                  i really like trains and i also like to play minecraft
                  <br />
                  born in chile, raised and living in the uk
                </p>
                <button className={styles.popupclose} onClick={() => closePopup('aboutpopup')}>close</button>
              </div>
            </div>
            <div className={styles.popup} id="skillspopup">
              <div className={styles.popupcontent}>
                <h2 className={styles.popuptitle}>skills</h2>
                <p className={styles.popupdescription}>
                  i mainly do web development which means im proficient in typescript, javascript, html, css, and react
                  <br />
                  i also know python and sql (blame the uk education curriculum) and can use them to a decent level
                  <br />
                  im an expert in the DNS protocol and can configure DNS servers and records
                </p>
                <button className={styles.popupclose} onClick={() => closePopup('skillspopup')}>close</button>
              </div>
            </div>
            <div className={styles.popup} id="testimonialspopup">
                <div className={styles.popupcontent}>
                  <h2 className={styles.popuptitle}>testimonials</h2>
                  <p className={styles.popupdescription}>
                    "this lads coding skills are insane" - some random kid at my school whos never seen a computer before in his life (probably)
                    <br />
                    "martin ur development skills are so amazing and awesome and they give me great joy i love how you develop so skilfully and your website is awesome" - ven, an eddsworld fan
                    <br />
                    "thats proper splendid" - a guy from stoke-on-trent that i know whos literally the GOAT
                    <br />
                    "eat some chocolate chocolate chip" - Joseph Robinette Biden Jr, 46th President of the United States of America
                    <br />
                    "if looks could kill this website would be in prison " - albanian 
                  </p>
                  <button className={styles.popupclose} onClick={() => closePopup('testimonialspopup')}>close</button>
                </div>
              </div>
          </main>
        </div>
      </div>
    </>
  )
}
