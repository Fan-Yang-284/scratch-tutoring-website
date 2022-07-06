import { motion, SVGMotionProps } from "framer-motion";
import { RefAttributes } from "react";

const Path = (props: JSX.IntrinsicAttributes & SVGMotionProps<SVGPathElement> & RefAttributes<SVGPathElement>) => (
	<motion.path
		fill="transparent"
		strokeWidth="3"
		stroke="hsl(0, 0%, 80%)"
		strokeLinecap="round"
		{...props}
	/>
);

export const MenuToggle = ({ toggle, isOpen }: {isOpen: boolean, toggle: any}) => (
	<motion.button
		onClick={()=>toggle((e:boolean)=>!e)} 
		animate={isOpen ? "open" : "closed"}
		className="inline-flex items-center p-[0.55rem] rounded-lg lg:hidden 
			hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200
			dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-4"
	>
		<svg width="20" height="20" viewBox="0 0 20 20">
			<Path
				variants={{
					closed: { d: "M 2 2.5 L 20 2.5" },
					open: { d: "M 3 16.5 L 17 2.5" }
				}}
			/>
			<Path
				d="M 2 9.423 L 20 9.423"
				variants={{
					closed: { opacity: 1 },
					open: { opacity: 0 }
				}}
				transition={{ duration: 0.1 }}
			/>
			<Path
				variants={{
					closed: { d: "M 2 16.346 L 20 16.346" },
					open: { d: "M 3 2.5 L 17 16.346" }
				}}
			/>
		</svg>
	</motion.button>
);
