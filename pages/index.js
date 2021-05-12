import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import { getSortedPostsData } from '../components/posts'
import Link from 'next/link'
import Date from '../components/date'

//  2 OBJ allPostsData COMO PARAMETRO DA FUNCAO
export default function Home ({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Props abaixo que passei pelo getStaticProps</h2>
        <ul className={utilStyles.list}>
          {/* allPostsData.map PRA RENDERIZAR CADA ITEM DO OBJ */}
          { allPostsData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
              <hr/>
            </li>
            ))
          }
        </ul>
      </section>
    </Layout>
  )
}
//  1 USANDO getStaticProps() PARA RETORNAR OS PROPS INSTANCIADOS NO CONST allPostsData QUE RECEBE VALOR DA FUNÇÃO QUE RETORNA O METADATA COMO OBJ
export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}