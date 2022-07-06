import CourseCard from "../../components/CourseCard";
import Course from "../../types/Course";
import { motion } from "framer-motion";

const course_materials = () => {
	const courses = [
		{
			title: "Scratch",
			description: "Scratch is a visual programming language developed by MIT.",
			startDate: new Date("07-11-2022"),
			endDate: new Date("07-15-2022"),
			backgroundImage:"https://cnprodstorage1.blob.core.windows.net/images/camp-images/2022/Intro_to_Roblox_Development.jpg",
			courseURL: "/courses/scratch2022",
		},
		{
			title: "Python",
			description: "Python is a programming language that is interpreted and high-level.",
			startDate: new Date("07-11-2022"),
			endDate: new Date("07-15-2022"),
			backgroundImage:"https://www.simplilearn.com/ice9/free_resources_article_thumb/Important_Python_Features.jpg",
			courseURL: "/courses/python2022",
		}
	] as Course[];
	return (
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
	);
}

export default course_materials;