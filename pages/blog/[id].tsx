import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import { getAllPostIds, getPostData } from "@/utils/posts";
import Navbar from "@/components/navbar";
import Box from "@/components/box";
import styles from "@/styles/Domains.module.css";
import boxStyles from "@/styles/Box.module.css";
import mdstyles from "@/styles/Markdown.module.css";
import blogstyles from "@/styles/Blog.module.css";

export async function getStaticPaths() {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false
    } 
}

// yappy mcyapface

export async function getStaticProps({ params }: any) {
    const postData = await getPostData(params.id);
    return {
        props: {
            postData
        }
    }
}

export default function Post({ postData }: any) {
    return (
        <>
            <Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>{postData.title} // MAЯTÍN's blog</title>
                <link rel="icon" href="/favicon.ico" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Assistant&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inter" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Inconsolata:wght@300&display=swap" />
                <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Unbounded:wght@900&display=swap" />
                <meta name="description" content={postData.description} />
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
                <meta property="og:title" content={postData.title} />
                <meta property="og:description" content={postData.description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={"https://marrtin.com/blog/" + postData.id} />
                <meta property="og:image" content="https://marrtin.com/og.png" />
                <meta property="og:image:alt" content="MAЯTÍN" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@t_ub3" />
                <meta name="twitter:creator" content="@t_ub3" />
                <meta name="twitter:title" content={postData.title} />
                <meta name="twitter:description" content={postData.description} />
                <meta name="twitter:image" content="https://marrtin.com/og.png" />
                <meta name="twitter:image:alt" content="MAЯTÍN" />
                <link rel="favicon" href="/favicon.ico" />
            </Head>
            <main className={styles.main}>
                <Navbar active="blog" />
                <header className={styles.header}>
                    <h1 className={[styles.title, "glitch"].join(" ")}>
                        <span aria-hidden="true">{postData.title}</span>
                        {postData.title}
                        <span aria-hidden="true">{postData.title}</span>
                    </h1>
                    <p className={styles.description}>{postData.description}</p>
                    <p className={styles.description}>published on {postData.date}</p>
                </header>
                {/* TAILWIND TIME */}
                <div className={'flex flex-row flex-wrap items-center justify-center text-slate-200 font-sans'}>
                    <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} className={[mdstyles.md, blogstyles.blog].join(' ')} />
                </div>
            </main>
        </>
    )
}