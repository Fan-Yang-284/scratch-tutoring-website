import CourseType from "../types/Course";
const courses = [
    {
        title: "Scratch Trial 2022",
        courseID: "scratchTrial2022",
        description: "Trial Class for Scratch 2022 Class. This class will teach students how to make a coin collection game.",
        startDate: new Date(1658062800000),
        endDate: new Date(1658066400000),
        backgroundImage: "/scratchTrial2022Banner.png",
        price: 0,
        teachers: [
            {
                name: "Edwin Zheng",
                avatarURL: "/Edwin_Avatar.png"
            },
        ],
        nextSteps: [
            <>Join with this <a href="https://us04web.zoom.us/j/6408315738?pwd=QrLIcFcIaCqf4UARlYMvcDIRr6TmfM.1" className="text-blue-500 underline">Zoom link</a></>
        ]
    },
    {
        title: "Scratch 2022",
        courseID: "scratch2022",
        description: "Scratch is a visual programming language developed by MIT. Learn to code with Scratch.",
        startDate: new Date(1658754000000),
        endDate: new Date(1659106800000),
        backgroundImage: "/scratch2022Banner.jpg",
        price: 100,
        teachers: [
            {
                name: "Edwin Zheng",
                avatarURL: "/Edwin_Avatar.png"
            },
            {
                name: "Fan Yang",
                avatarURL: "/Fan_Avatar.png"
            }
        ],
        nextSteps:[
            <>Sign up to scratch at <a href="https://scratch.mit.edu/" className="text-blue-500 underline">scratch.mit.edu</a></>
        ]
    }
] as CourseType[]

export default courses;