import { Select, TextInput, Skeleton } from '@mantine/core';
import { useForm } from '@mantine/form';
import { GetStaticProps } from 'next';
import CourseType from "../types/Course"
import courses from '../data/courses';

const Field = ({ fieldFor, placeholder, type, className, formObject }:
	{
		fieldFor: string,
		placeholder: string,
		type: string,
		className?:string,
		formObject: any
	})=>{
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
	<h1 className="col-span-2 text-xl font-bold mt-4 font-serif text-blue-800" style={{ fontVariant: "small-caps" }}>{children}</h1>

const CourseDescriptionCard = ({ selectedCourseName }: { selectedCourseName?: string})=>{
	const selectedCourse = courses.filter(course => course.title == selectedCourseName)[0]
	return (
		<div className="flex flex-row gap-x-2 border-2 rounded-lg p-4 xl:w-2/3">
			<div className="h-32 w-48 overflow-hidden grid place-items-center">
				{selectedCourse ?
					<img src={selectedCourse.backgroundImage} className="w-full" /> :
					<Skeleton className="w-full h-full" />
				}
			</div>
			<div className="flex-1">
				{selectedCourse ?
					<>
						<h1 className="text-2xl font-bold">
							{selectedCourse.title}
						</h1>
						<p>
							{selectedCourse.description}
						</p>
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
	)
}

const register = () => {
	const form = useForm({
		initialValues: {
			email: '',
			firstName: '',
			lastName: '',
			course: '',
		},

		validate: {
			email: (value) => (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(value) ? null : 'Invalid email'),
		},
	});

	return (
		<div className="grid md:grid-cols-5 pt-32 px-16 bg-slate-200 h-screen">
			<div className="md:col-span-2">
				<h1 className="font-bold text-6xl text-blue-800 mb-4 md:mb-0" style={{fontVariant:"small-caps"}}>
					Register<br />for a<br />Course
				</h1>
			</div>
			<div className="md:col-span-3">
				<form
					className="p-4 border-2 rounded-lg bg-white grid grid-cols-2 gap-x-2 gap-y-2"
					onSubmit={form.onSubmit((values) => console.log(values))}
				>
					<Title>Personal Information</Title>
					{/* first name last name */}
					<Field fieldFor="First Name" type="text" placeholder="First Name" formObject={form.getInputProps("firstName")}/>
					<Field fieldFor="Last Name" type="text" placeholder="Last Name" formObject={form.getInputProps("lastName")}/>
					{/* email */}
					<TextInput
						label="Email"
						// error="Invalid email"
						className="col-span-2"
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
					<div className="col-span-2">
						<CourseDescriptionCard selectedCourseName={form.getInputProps('course').value as string|undefined}/>
					</div>
					{/* Register Button */}
					<button type="submit" className="col-span-2 border-2 p-2 rounded-full font-bold text-white bg-blue-500">Register</button>
				</form>
			</div>
		</div>
	);
}

// export const getStaticProps: GetStaticProps = async (context) => {
// 	console.log(context.params)
// 	const courses = await (await fetch("http://localhost:3000/api/courses")).json()
// 	return {
// 		props: {
// 			courses
// 		}
// 	}
// }

export default register;