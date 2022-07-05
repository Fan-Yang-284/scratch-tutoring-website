import { motion } from "framer-motion";
import Link from "next/link";
import { useRouter } from "next/router";

const MenuItem = ({ linkName, linkPath, elementNum }: { linkName: string, linkPath: string, elementNum : number}) => {
	const router = useRouter();
	
	const delay = 0.05;
	const variants = {
		open: {
			y: 0,
			opacity: 1,
			transition: {
				y: { stiffness: 1000, velocity: -100 },
				delay: elementNum * delay
			}
		},
		closed: {
			y: 50,
			opacity: 0,
			transition: {
				y: { stiffness: 1000 },
				delay: (4-elementNum) * delay
			}
		}
	};
	return (
		<motion.li variants={variants} initial={"closed"} animate={"open"} exit={"closed"}>
			<Link href={"/" + linkPath} >
				<a className={"block py-2 px-4 transition-colors lg:bg-transparent hover:text-gray-500 " +
					(router.pathname.split("/")[1] == linkPath ?
					"bg-blue-700 font-bold text-gray-400" :
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