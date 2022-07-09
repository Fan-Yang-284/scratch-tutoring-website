import Hero from '../components/Hero'
import Head from 'next/head'

import { analytics } from '../firebase'
import { logEvent } from 'firebase/analytics'

export default function Home() {
  if(process.env.NODE_ENV === "production"){
    logEvent(analytics, "home_view")
  }
  return (
    <>
      <Head>
        <title>Flare Code Academy</title>
      </Head>
      <div>
        {/* <Banner/> */}
        <Hero/>
        {/* About us */}
        
      </div>
    </>
  )
}
