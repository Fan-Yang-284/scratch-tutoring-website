import Hero from '../components/Hero'
import Head from 'next/head'

import { app } from '../firebase/index'
import { logEvent, isSupported, getAnalytics } from 'firebase/analytics'
import { useEffect } from 'react'

export default function Home() {
  useEffect(() => {
    isSupported().then(supported => {
      const analytics = supported ? getAnalytics(app) : null
      if (process.env.NODE_ENV === 'production' && analytics != null) {
        logEvent(analytics, "home_view")
      }
    });
  }, [])

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
