import { motion } from "framer-motion";
import { NavLinkType } from "./NavLink";
import NavLink from "./NavLink";

const MenuItem = ({ link, elementNum, toggle }: { link: NavLinkType, elementNum : number, toggle:any}) => {
	
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
			<NavLink link={link} toggle={toggle}/>
		</motion.li>
	)
}

export default MenuItem;