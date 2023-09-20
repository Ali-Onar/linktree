import Head from 'next/head';
import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
import data from '../data.json';
   
export default function Page() {
    const allPostsData = getSortedPostsData();
    return (
        <Layout home>
            <Head>
            <title>{data.name}</title>
            </Head>
            <section className={utilStyles.headingMd}>
            <p>Hi! I am a Software Engineer.</p>
            <p>
                (This site is coded using <a href="https://nextjs.org/learn">Nextjs</a>, 
                blog posts are Markdown, Social links are extracted from JSON format.)
            </p>
            </section>

            <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
            <h2 className={utilStyles.headingLg}>Blog</h2>
            <ul className={utilStyles.list}>
                {allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br />
                    <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                    </small>
                </li>
                ))}
            </ul>
            </section>
        </Layout>
    );
}
