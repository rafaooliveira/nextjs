import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>
          (Esse exemplo foi feito pelo tutorial do Next.js{' '}
          <a href="https://nextjs.org/learn">Vem na vibe sinistra</a>.)
        </p>
      </section>
    </Layout>
  )
}