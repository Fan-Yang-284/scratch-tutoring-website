// Heavily-inspired by https://flowbite.com/docs/components/navbar/
import { motion, useCycle } from "framer-motion"
import useWindowDimensions from "../../hooks/useWindowDimensions"
import MenuItem from "./MenuItem"
import { MenuToggle } from "./MenuToggle"

const Navbar = ({ current }: {current: string}) => {
	const links = [
		"Home",
		"About",
		"Course Materials",
		"Contact",
	]

	const listVariants = {
		open: {
			transition: { staggerChildren: 0.07, delayChildren: 0.2 }
		},
		closed: {
			transition: { staggerChildren: 0.05, staggerDirection: -1 }
		}
	};

	const { height, width } = useWindowDimensions();
	const [isOpen, toggleOpen] = useCycle(false, true);
	
	return (
		<motion.div
			className="absolute w-full"
			animate={{ y: [-60, width! > 768 ? 15 : 0] }}
			viewport={{ once: true }}
			transition={{ delay: 0.4, duration: 0.4 }}
		>
			<nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 md:rounded-lg dark:bg-gray-800 mx-auto md:w-11/12 relative">
				<div className="flex flex-wrap justify-between items-center">
					{/* Left Side Image */}
					<a href="https://flowbite.com/" className="flex items-center">
						<img src="https://scratch.mit.edu/images/scratch-og.png" className="rounded mr-3 h-12 sm:h-9" alt="Scratch Logo" />
						<span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white hidden sm:block">Scratch Coding</span>
					</a>
					{/* Center links */}
					<div
						className="
							justify-between items-center w-full
							absolute top-[68px] left-0
							md:flex md:static md:w-auto"
						id="mobile-menu-4"
					>
						<motion.ul
							className="flex flex-col md:flex-row md:space-x-8 mt-0 md:text-sm md:font-medium"
							variants={listVariants}
							animate={isOpen || width! > 768 ? "open" : "closed"}
							initial={false}
						>
							{
								links.map((link, i) => <MenuItem isCurrent={current === link} linkName={link} key={i}/>)
							}
						</motion.ul>
					</div>

					{/* Right side */}
					<div className="flex items-center">
						<button type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
						<MenuToggle isOpen={isOpen} toggle={toggleOpen} />
					</div>
				</div>
			</nav>
		</motion.div>
	)
}

export default Navbar;