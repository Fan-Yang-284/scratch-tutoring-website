import CourseType from "../types/Course";
const courses = [
    {
        title: "Scratch 2022",
        description: "Scratch is a visual programming language developed by MIT. Learn to code with Scratch.",
        startDate: new Date(1658754000000),
        endDate: new Date(1659106800000),
        backgroundImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        courseURL: "/scratch2022",
        price: 100,
    },
] as CourseType[]

export default courses;