import Link from "next/link";
import Course from "../../types/Course";
import { motion } from "framer-motion";

const CourseCard = ({course}: {course: Course}) => {
	const variants = {
		hidden: { opacity: 0, y: 60 },
		visible: { opacity: 1, y: 0 },
	}

	return (
		<Link href={"/courses" + course.courseURL}>
			<motion.a
				className="w-full h-full block rounded-lg pt-16 text-white hover:cursor-pointer relative overflow-hidden group"
				initial={"hidden"}
				whileInView={"visible"}
				variants={variants}
				transition={{
					y:{
						duration: 0.75,
						type: "tween",
						ease: "easeOut"
					}
				}}
				viewport={{ once: true }}
			>
				{/* Background Image */}
				<div
					className="absolute top-0 left-0 w-full h-full bg-cover bg-center -z-10"
					style={{ backgroundImage:`url("${course.backgroundImage}")`}}
				/>
				{/* Background Dark */}
				<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-[#000000cc] -z-10"/>


				{/* Card Body */}
				<div className="p-4">
					<h2 className="text-4xl font-bold mb-4">
						{course.title}
					</h2>
					<p>
						{course.description}
					</p>
					<div className="flex flex-row mt-8 gap-x-2 items-center">
						<svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
						</svg>
						<span>{course.startDate.toLocaleString(undefined, { weekday: 'short', day: "numeric", month: "short" })} - {course.endDate.toLocaleString(undefined, { weekday: 'short', day: "numeric", month: "short" })}</span>
					</div>
				</div>

				{/* Card Meta */}
				<div className="p-4 py-6 font-bold">
					<hr className="border-gray-400 mb-5"/>
					<div className="flex flex-row items-center gap-x-1">
						<span>
							DETAILS AND AVAILABILITY
						</span>
						<svg className="w-6 h-6 group-hover:translate-x-3 transition-transform" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
						</svg>
					</div>
				</div>
			</motion.a>
		</Link>
	);
}

export default CourseCard;