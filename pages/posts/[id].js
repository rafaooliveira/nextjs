import Head from 'next/head'
import Layout from '../../components/layout'
import { getAllPostIds, getPostData } from '../../components/posts'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.css'

export default function Post({postData}) {
  console.log(postData)
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
      {/* after install remark I added this to this page, but I really don't know what It means, maybe to render in html the text without props of markdown file  */}
      <br />
      <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> 
    </Layout>
  )
}
export async function getStaticPaths() {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}
// getPostData retorna um objeto props 
export async function getStaticProps({ params }) {
  // Add the "await" keyword like this: because we're using remark
  const postData = await getPostData(params.id)
  // params id é o nome do arquivo
  // postData é o novo props dessa pagina que pegará os metadados do md
  return {
    props: {
      postData
    }
  }
}