import '../styles/globals.css'
import 'public/Playfair-Display/playfair-display-sheet.css'
import 'public/Raleway/raleway-sheet.css'

import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar'

function MyApp({ Component, pageProps }: AppProps) {
  return(
  <>
			<Navbar/>
      <Component {...pageProps} />
  </>
  )
}

export default MyApp
