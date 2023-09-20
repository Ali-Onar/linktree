import Layout from '../../../components/layout';
import { getAllPostIds, getPostData } from '../../../lib/posts';
import Head from 'next/head';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';

export default async function Page({ params }) {
  const postData = await getPostData(params.id);
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
}

export async function generateStaticParams() {
  const paths = getAllPostIds();
  return paths;
}
