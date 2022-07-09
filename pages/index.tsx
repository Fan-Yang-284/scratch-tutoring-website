import Hero from '../components/Hero'
import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Flare Code Academy</title>
      </Head>
      <div>
        {/* <Banner/> */}
        <Hero/>
      </div>
    </>
  )
}
