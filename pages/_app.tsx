import '../styles/globals.css'
import '../public/Playfair-Display/playfair-display-sheet.css'
import '../public/Raleway/raleway-sheet.css'

import { AppProps } from 'next/app'
import Head from 'next/head'
import Navbar from '../components/NavBar'
import { motion, AnimatePresence } from 'framer-motion'

function MyApp({ Component, pageProps, router }: AppProps) {
	return(
		<>
			<Head>
				<link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

				<title>Flare Code Academy</title>
				<meta name="description" content="Learn Coding today" />

				<meta property="og:url" content="https://flarecodeacademy.tech/" />
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Flare Code Academy" />
				<meta property="og:description" content="Learn Coding today" />
				<meta property="og:image" content="/Logo.svg" />

				<meta name="twitter:card" content="summary_large_image" />
				<meta property="twitter:domain" content="flarecodeacademy.tech" />
				<meta property="twitter:url" content="https://flarecodeacademy.tech/" />
				<meta name="twitter:title" content="Flare Code Academy" />
				<meta name="twitter:description" content="Learn Coding today" />
				<meta name="twitter:image" content="/Logo.svg" />
			</Head>
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
