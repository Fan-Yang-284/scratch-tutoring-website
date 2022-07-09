import CourseCard from "../../components/CourseCard";
import Course from "../../types/Course";
import { motion } from "framer-motion";
import courses from "../../data/courses";
import Head from "next/head";

const course_materials = () => {
	return (
		<>
			<Head>
				<title>Flare Courses</title>
			</Head>
			<div>
				<div className="h-96 grid place-items-center bg-blue-400">
					<h1 className="text-white font-black text-5xl">Offered Courses</h1>
				</div>
				<div className="grid place-items-center">
					<motion.div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 w-11/12 py-4">
						{ courses.map((course: Course, i) => <CourseCard course={course} key={i} />) }
					</motion.div>
				</div>
			</div>
		</>
	);
}

export default course_materials;