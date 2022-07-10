import CourseType from "../types/Course";
const courses = [
    {
        title: "Scratch 2022",
        courseID: "scratch2022",
        description: "Scratch is a visual programming language developed by MIT. Learn to code with Scratch.",
        startDate: new Date(1658754000000),
        endDate: new Date(1659106800000),
        backgroundImage: "/scratch2022Banner.jpg",
        price: 100,
        nextSteps:[
            <>Sign up to scratch at <a href="https://scratch.mit.edu/" className="text-blue-500 underline">scratch.mit.edu</a></>
        ]
    },
] as CourseType[]

export default courses;