import Head from 'next/head'
import Link from 'next/link'
import utilStyles from '../styles/utils.module.css'
// import {Grid, Row} from 'react-flexbox-grid';
const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={utilStyles.about}>
          <h1>
            Já fui dev FullStack
          </h1>
          <ul>
            <li>Front: Vue.js + Quasar</li>
            <li>Back: Node.js + Feathers</li>
            <li>RPAS: Puppeteer</li>
          </ul>
        </div>
        <div>
          <Link href="/">
            <a className={utilStyles.back}> Voltar </a>
          </Link>
        </div>
      </main>
    </div>
  )
}
export default About