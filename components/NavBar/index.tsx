// Heavily-inspired by https://flowbite.com/docs/components/navbar/
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import { useState } from "react"

import { useRouter } from "next/router"

import MenuItem from "./MenuItem"
import { MenuToggle } from "./MenuToggle"
import NavLink, { NavLinkType } from "./NavLink"

const Navbar = () => {
	const links = [
		{
			name: "Home",
			path: "",
		},
		{
			name: "Courses",
			path: "courses",
		},
		{
			name: "About",
			path: "about",
		},
		{
			name: "Contact",
			path: "contact",
		},
	] as NavLinkType[]

	const { height, width } = useWindowDimensions();
	const router = useRouter();
	const [isOpen, toggleOpen] = useState(false);

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
						className="hidden lg:flex justify-between items-center"
						id="mobile-menu-4"
					>
						<ul className="text-white flex flex-row space-x-8 text-sm font-medium" >
							{
								links.map((link, i) =>
									<NavLink link={link} key={i} toggle={toggleOpen}/>
								)
							}
						</ul>
					</div>

					{/* Right side */}
					<div className="flex items-center">
						<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 lg:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
							<Link href="/register">
								<a>
									Get started
								</a>
							</Link>
						</button>
						<MenuToggle isOpen={isOpen} toggle={toggleOpen} />
					</div>

					{/* Mobile Links */}
					<div className="w-full absolute top-[100%] left-0">
						<motion.ul className="flex flex-col" >
							<AnimatePresence>
								{
									isOpen &&
									links.map((link, i) =>
										<MenuItem link={link} key={i} elementNum={i} toggle={toggleOpen}/>
									)
								}
							</AnimatePresence>
						</motion.ul>
					</div>
				</div>
			</nav>
		</motion.div>
	)
}

export default Navbar;