// libraries
import Head from "next/head";
import Link from "next/link";
import { Avatar, AvatarsGroup } from '@mantine/core';
import { GetStaticPaths, GetStaticProps } from "next";

// types, components and data
import DateComponent from "../../components/DateComponent";
import courses from "../../data/courses";
import Course from "../../types/Course";
import gradientAnimation from "../../styles/gradientAnimation.module.scss";

// analytics
import { analytics } from "../../firebase";
import { logEvent } from "firebase/analytics";

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

	if(process.env.NODE_ENV === "production"){
		logEvent(analytics, "course_view", {
			courseTitle: activeCourse.title,
		})
	}
	return (
		<>
			<Head>
				<title>{activeCourse.title}</title>
			</Head>

			{/* Banner */}
			<div className="overflow-hidden h-[60vh] relative bg-cover mb-8" style={{ backgroundImage: `url(${activeCourse.backgroundImage})`}} />
			
			{/* Content */}
			<div className="mx-4">
				<div className="flex flex-row justify-between items-center mb-6">
					<h1 className="font-bold text-6xl">
						{activeCourse.title}
					</h1>
					<AvatarsGroup limit={2} size="lg">
						<Avatar src="/Edwin_Avatar.png"/>
						<Avatar src="/Fan_Avatar.png"/>
					</AvatarsGroup>
				</div>
				<div className="grid grid-cols-3">
					<div className="col-span-1">
					</div>
					<div className="col-span-2 grid grid-cols-3 gap-y-2">
						<h2>Description</h2>
						<p className="text-lg col-span-2">
							{activeCourse.description}
						</p>

						<hr className="col-span-3"/>

						<h2>Time</h2>
							<DateComponent startDate={activeCourse.startDate} endDate={activeCourse.endDate} />
						<div className="col-span-2">
							<p>9-11am EST</p>
						</div>

						<hr className="col-span-3"/>

						<h2>Price</h2>
						<p className="text-green-600 font-bold text-2xl col-span-2">${activeCourse.price}</p>
					</div>
				</div>

				<div className="flex justify-center mt-4">
					<Link href="/register">
						<a>
							<button
								className={"p-4 text-7xl rounded-lg " + gradientAnimation.animateGradientBackground}
							>
								REGISTER NOW!!!!!
							</button>
						</a>
					</Link>
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