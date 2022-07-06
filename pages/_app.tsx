import '../styles/globals.css'
import 'public/Playfair-Display/playfair-display-sheet.css'
import 'public/Raleway/raleway-sheet.css'

import type { AppProps } from 'next/app'
import Navbar from '../components/NavBar'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
  return(
    <>
      <Navbar/>
      <AnimatePresence exitBeforeEnter initial={false}>
        <motion.div
          key={router.route}
          initial="pageInitial"
          animate="pageAnimate"
          exit="pageExit"
          variants={{
            pageInitial: { opacity: 0, },
            pageAnimate: {
              opacity: 1,
              transition: { duration: 0.4, ease: 'easeInOut' }
            },
            pageExit: {
              opacity: 0,
              transition: { duration: 0.2, ease: 'easeInOut' }
            }
          }}
        >
          <Component {...pageProps} />
        </motion.div>
      </AnimatePresence>
    </>
  )
}

export default MyApp
