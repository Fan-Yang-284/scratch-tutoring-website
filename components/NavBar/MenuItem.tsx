import { motion } from "framer-motion";

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: -100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	}
};

const MenuItem = ({ isCurrent, linkName }: { isCurrent: boolean, linkName: string}) => {
	return (
		<motion.li variants={variants}>
			{
				isCurrent ?
				<a
					href="#"
					className="block py-2 pr-4 pl-3 text-white bg-blue-700 md:rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white"
				>
					{linkName}
				</a>
				:
				<a
					href="#"
						className="block py-2 pr-4 pl-3 text-gray-700 bg-blue-900 md:bg-transparent border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
				>
					{linkName}
				</a>
			}
		</motion.li>
	)
}

export default MenuItem;