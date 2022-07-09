import { GetStaticPaths, GetStaticProps } from "next";
import DateComponent from "../../components/DateComponent";
import courses from "../../data/courses";
import Course from "../../types/Course";
import Head from "next/head";

const courseID = ({ activeCourseString }: { activeCourseString: string}) => {
	const activeCourse = JSON.parse(activeCourseString) as Course;
	activeCourse.startDate = new Date(activeCourse.startDate);
	activeCourse.endDate = new Date(activeCourse.endDate);

	if(!activeCourse){
		return (
			<div className="grid place-items-center h-screen">
				<h1 className="text-4xl font-bold">Course Not Found</h1>
			</div>
		)
	}
	return (
		<>
			<Head>
				<title>{activeCourse.title}</title>
			</Head>
			<div>
				<div className="grid md:grid-cols-2 mx-4 md:mx-16 pt-32 gap-x-4 gap-y-6">
					<img src={activeCourse.backgroundImage} className="rounded-lg" alt="Course Background Image"/>
					{/* words */}
					<div>
						<h1 className="font-bold text-6xl mb-2">
							{activeCourse.title}
						</h1>
						<p className="text-lg">
							{activeCourse.description}
						</p>
						<DateComponent startDate={activeCourse.startDate} endDate={activeCourse.endDate}/>
						<p>9-11am EST</p>
						<p className="text-green-600 font-bold text-2xl">${activeCourse.price}</p>
					</div>
				</div>
			</div>
		</>
	);
}

export const getStaticPaths: GetStaticPaths = async () => {
	const paths = courses.map((course) => ({
		params: { id: course.courseURL.slice(1) },
	}))
	return {
		paths,
		fallback: false
	};
}

export const getStaticProps: GetStaticProps = async (context) => {
	return {
		props: {
			activeCourseString: JSON.stringify(courses.find(course => course.courseURL === "/" + context.params!.id))
		},
	}
}

export default courseID;