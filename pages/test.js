import Head from 'next/head'

const Test = () => {
  return (
    <div className="container">
      <Head>
        <title>App Next Rafa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Text with <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p>
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>
    </div>
  )
}
export default Test