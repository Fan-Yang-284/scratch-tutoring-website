// Inspiration https://cdn.dribbble.com/userupload/2715803/file/original-2daa043d16e519835d6a677fe2ee0b93.png
import DateComponent from "../../components/DateComponent"
import courses from '../../data/courses';
import Course from '../../types/Course';

import { Select, TextInput, Skeleton } from '@mantine/core';
import { useForm } from '@mantine/form';
import Link from 'next/link';
import Head from 'next/head';

// analytics
import { app } from '../../firebase/index'
import { logEvent, isSupported, getAnalytics } from 'firebase/analytics'
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from 'axios';

interface fieldProps {
	fieldFor: string,
	placeholder: string,
	type: string,
	className?: string,
	formObject: any
}
const Field = ({ fieldFor, placeholder, type, className, formObject }: fieldProps)=>{
	if(type == "text"){
		return(
			<div className={className}>
				<TextInput className="w-full" label={fieldFor} placeholder={placeholder} required {...formObject}/>
			</div>
		)
	}
	return( <div></div> )
}

const Title = ({ children }: { children: any }) =>
	<h1 className="col-span-1 sm:col-span-2 text-xl font-bold mt-4 font-serif text-blue-800" style={{ fontVariant: "small-caps" }}>{children}</h1>

const CourseDescriptionCard = ({ selectedCourse }: { selectedCourse?: Course})=>{
	return (
		<div className="xl:w-2/3">
			<Link href={selectedCourse ? ("/courses/" + selectedCourse.courseID) : ""}>
				<a className={!selectedCourse ? "hover:cursor-default" : ""}>
					<div className="flex flex-col lg:flex-row gap-y-3 gap-x-3 border-2 rounded-lg p-4">
						{/* Image */}
						<div className="h-36 w-full lg:w-48 overflow-hidden grid place-items-center">
							{selectedCourse ?
								<img src={selectedCourse.backgroundImage} className="w-full" alt="Selected Course Image"/> :
								<Skeleton className="w-full h-full" />
							}
						</div>
						{/* Right Text */}
						<div className="flex-1">
							{selectedCourse ?
								<>
									<h1 className="text-2xl font-bold">
										{selectedCourse.title}
									</h1>
									<p>
										{selectedCourse.description}
									</p>
									<DateComponent startDate={selectedCourse.startDate} endDate={selectedCourse.endDate}/>
								</>
								:
								<>
									<Skeleton height={32} mb={8}/>
									<Skeleton height={20} mb={4}/>
									<Skeleton height={20} mb={4}/>
									<Skeleton height={20} mb={4}/>
								</>
							}
						</div>
					</div>
				</a>
			</Link>
		</div>
	)
}

const Register = () => {
	const form = useForm({
		initialValues: {
			email: '',
			firstname: '',
			lastname: '',
			course: '',
		},

		validate: {
			email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),
		},
	});

	useEffect(()=>{
		isSupported().then(supported => {
			const analytics = supported ? getAnalytics(app) : null
			if (process.env.NODE_ENV === 'production' && analytics != null) {
				logEvent(analytics, "register_view")
			}
		});
	}, [])

	const router = useRouter()
	const onSubmit = async (values: any) => {
		if(process.env.NODE_ENV === 'production'){
			await axios.post(`https://scratch-tutoring-backend.herokuapp.com/register`, values).catch(err=>{
				console.log(err)
				alert("Database Error, try again")
				return
			})
			if (await isSupported()) logEvent(getAnalytics(app), "register_submit")
		}else{
			alert("Post to Server")
		}
		router.push({
			pathname: '/register/success',
			query: {
				courseID: selectedCourse?.courseID
			}
		})
	}

	const selectedCourseName = form.getInputProps('course').value as string | undefined
	const selectedCourse = courses.find(course => course.title == selectedCourseName)

	return (
		<>
			<Head>
				<title>Register | Flare</title>
			</Head>
			<div className="grid md:grid-cols-5 pt-24 lg:pt-32 pb-12 px-4 lg:px-16 bg-slate-200 min-h-screen">
				<div className="md:col-span-2">
					<h1 className="font-bold text-6xl text-blue-800 mb-4 md:mb-0" style={{fontVariant:"small-caps"}}>
						Register<br />for a<br />Course
					</h1>
				</div>
				<div className="md:col-span-3">
					<form
						className="p-4 border-2 rounded-lg bg-white grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-2"
						onSubmit={form.onSubmit((values) => onSubmit(values))}
					>
						<Title>Personal Information</Title>
						{/* first name last name */}
						<Field fieldFor="First Name" type="text" placeholder="First Name" formObject={form.getInputProps("firstname")}/>
						<Field fieldFor="Last Name" type="text" placeholder="Last Name" formObject={form.getInputProps("lastname")}/>
						{/* email */}
						<TextInput
							label="Email"
							// error="Invalid email"
							className="col-span-1 sm:col-span-2"
							icon={
								<svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
									<path fillRule="evenodd" d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z" clipRule="evenodd" /></svg>
							}
							placeholder="Email"
							{...form.getInputProps('email')}
							required
						/>
						
						<Title>Course Information</Title>
						{/* course dropdown */}
						<Select
							style={{  }}
							data={courses.map(course=>course.title)}
							placeholder="Offered Courses"
							label="Pick Course"
							required
							{...form.getInputProps('course')}
						/>
						{/* course description box */}
						<div className="col-span-1 sm:col-span-2">
							<CourseDescriptionCard selectedCourse={selectedCourse}/>
						</div>
						<div className="md:col-span-2">
							<hr className="mt-4"/>
							<div className="flex flex-row justify-between items-end mt-2">
								<p>
									Amount
								</p>
								{
									selectedCourse ? 
									<p className="text-3xl font-bold">
										${selectedCourse?.price}
									</p>
									:
									<p className="text-3xl font-bold">-</p>
								}
							</div>
						</div>
						

						{/* Register Button */}
						<button
							type="submit"
							className="col-span-1 sm:col-span-2 p-2 rounded-full font-bold text-white bg-blue-500 my-4 hover:shadow-lg transition-shadow"
						>
							Register
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Register;