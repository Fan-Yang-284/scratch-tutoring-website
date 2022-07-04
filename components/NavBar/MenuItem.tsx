import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

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

const MenuItem = ({ linkName, linkPath }: { linkName: string, linkPath: string}) => {
	const router = useRouter();
	return (
		<motion.li variants={variants}>
			<Link href={"/" + linkPath} >
			{
					router.pathname == "/" + linkPath ?
					<a className="
						block py-2 pr-4 pl-3 text-white bg-blue-700
						md:rounded md:bg-transparent md:text-blue-700 md:p-0 
						dark:text-white"
					>
						{linkName}
					</a>
				:
					<a className="
						block py-2 pr-4 pl-3 text-gray-700 bg-blue-900 border-gray-100 border-b
						md:bg-transparent hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:dark:hover:text-white 
						dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
					>
						{linkName}
					</a>
			}
			</Link>
		</motion.li>
	)
}

export default MenuItem;