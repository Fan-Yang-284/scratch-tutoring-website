import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import courses from "../../data/courses";
import Course from "../../types/Course";

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
		<div>
			<div className="grid grid-cols-2 mx-16 pt-32 gap-x-4">
				<img src={activeCourse.backgroundImage} className="rounded-lg"/>
				{/* words */}
				<div>
					<h1 className="font-bold text-6xl mb-2">
						{activeCourse.title}
					</h1>
					<p className="text-lg">
						{activeCourse.description}
					</p>

					<div className="flex flex-row gap-x-2 items-center">
						<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
							<path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" />
						</svg>
						<span className="text-lg">
							{activeCourse.startDate.toLocaleString(undefined, { weekday: 'short', day: "numeric", month: "short" })} - {activeCourse.endDate.toLocaleString(undefined, { weekday: 'short', day: "numeric", month: "short" })}
						</span>
					</div>
				</div>
			</div>
		</div>
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