// Heavily-inspired by https://flowbite.com/docs/components/navbar/
import { motion, useCycle, AnimatePresence } from "framer-motion"
import Link from "next/link"
import useWindowDimensions from "hooks/useWindowDimensions"
import MenuItem from "./MenuItem"
import { MenuToggle } from "./MenuToggle"

const Navbar = () => {
	const links = {
		"Home":"",
		"Courses":"courses",
		"About":"about",
		"Contact":"contact",
	}

	const { height, width } = useWindowDimensions();
	const [isOpen, toggleOpen] = useCycle(false, true);

	return (
		<motion.div
			className="fixed w-full z-50"
			animate={{ y: ["-100%", width! > 1024 ? "35%" : "0%"] }}
			viewport={{ once: true }}
			transition={{ delay: 0.4, duration: 0.4 }}
		>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 lg:rounded-lg dark:bg-gray-800 mx-auto lg:w-11/12 relative">
				<div className="flex flex-wrap justify-between items-center">
					{/* Left Side Image */}
					<Link href="/">
						<a className="flex items-center">
							<img src="/scratch.png" className="rounded mr-3 h-12 sm:h-9" alt="Scratch Logo" />
							<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">
								Edwin and Fan Tutoring
							</span>
						</a>
					</Link>
					{/* Center links */}
					<div
						className="
							justify-between items-center w-full
							absolute top-[100%] left-0
							lg:flex lg:static lg:w-auto"
						id="mobile-menu-4"
					>
						<motion.ul className="text-black flex flex-col lg:flex-row lg:space-x-8 mt-0 lg:text-sm lg:font-medium" >
							<AnimatePresence>
								{
									(isOpen || width! > 1024) &&
									Object.entries(links).map((link, i) =>
										<MenuItem linkName={link[0]} linkPath={link[1]} key={i} elementNum={i}/>
									)
								}
								{/* <motion.p initial={{opacity:0}} animate={{opacity:1}} key="22">hello</motion.p> */}
							</AnimatePresence>
						</motion.ul>
					</div>

					{/* Right side */}
					<div className="flex items-center">
						<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
						<MenuToggle isOpen={isOpen} toggle={toggleOpen} />
					</div>
				</div>
			</nav>
		</motion.div>
	)
}

export default Navbar;