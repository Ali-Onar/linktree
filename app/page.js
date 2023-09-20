import Layout from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';
   
export default async function Page() {
    const allPostsData = getSortedPostsData();
    return (
        <Layout home>
            <section className={utilStyles.headingMd}>
            <p>
                Hey! As a software engineer, I thrive on utilizing new technologies and tackling complex structures. 
            <br />
                I share my knowledge through articles and videos, which not only helps me further 
                develop my expertise but also assists others in expanding their understanding.
            </p>
            <p>
                (This site is coded using <a href="https://nextjs.org/learn">Nextjs</a>, 
                blog posts are Markdown, Social links are extracted from JSON format using Vercel - Edge Config.)
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
