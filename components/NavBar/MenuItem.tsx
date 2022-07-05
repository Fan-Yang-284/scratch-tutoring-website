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
				<a className={"block py-2 px-4 transition-colors lg:bg-transparent hover:text-white " +
					(router.pathname.split("/")[1] == linkPath ?
					"bg-blue-700 text-white" :
					"bg-blue-900 text-gray-400"
					)}
				>
					{linkName}
				</a>
			</Link>
		</motion.li>
	)
}

export default MenuItem;