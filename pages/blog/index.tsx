import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import { getSortedPostsData } from '@/utils/posts'
import Navbar from '@/components/navbar'
import Box from '@/components/box'
import styles from '@/styles/Domains.module.css'
import boxStyles from '@/styles/Box.module.css'
import mdstyles from '@/styles/Markdown.module.css'

export async function getStaticProps() {
    const allPostsData = getSortedPostsData()
    return {
        props: {
        allPostsData
        }
    }
}

export default function Home({ allPostsData }: any) {
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
                <meta name="description" content="MAЯTÍN" />
                <meta name="keywords" content="web, developer, web developer, trains, code, martin, tube" />
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
                <meta property="og:title" content="MAЯTÍN" />
                <meta property="og:description" content="MAЯTÍN" />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://marrtin.com" />
                <meta property="og:image" content="https://marrtin.com/og.png" />
                <meta property="og:image:alt" content="MAЯTÍN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@t_ub3" />
                <meta name="twitter:creator" content="@t_ub3" />
                <meta name="twitter:title" content="MAЯTÍN" />
                <meta name="twitter:description" content="MAЯTÍN" />
                <meta name="twitter:image" content="https://marrtin.com/og.png" />
                <meta name="twitter:image:alt" content="MAЯTÍN" />
                <link rel="favicon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Navbar active="blog" />
                <header className={styles.header}>
                    <h1 className={[styles.title, 'glitch'].join(' ')}>
                        <span aria-hidden="true">the yap zone</span>
                        the yap zone
                        <span aria-hidden="true">the yap zone</span>
                    </h1>
                    <p className={styles.description}>its like a blog but its just me waffling on about stuff</p>
                    <p className='text-xs'>wait a moment thats literally what a blog is- oh well</p>
                </header>
                <div className={styles.grid}>
                    {allPostsData.map(({ id, date, title, description }: any) => (
                        <Box title={title} key={id} className={boxStyles.card}>
                            <p className={styles.description}>{description}</p>
                            <p className={styles.description}>{date}</p>
                            <Link href={`/blog/${id}`} className={[styles.description, 'underline hover:no-underline'].join(' ')}>
                                read more
                            </Link>
                        </Box>
                    ))}
                </div>
            </main>
        </>
    )
}