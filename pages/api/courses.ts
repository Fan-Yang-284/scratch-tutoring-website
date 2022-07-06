import { NextApiRequest, NextApiResponse } from 'next';
import CourseType from '../../types/Course';
const courses = [
    {
        title: "Scratch 2022",
        description: "Learn to code with Scratch",
        startDate: new Date("2020-01-01"),
        endDate: new Date("2020-01-01"),
        backgroundImage: "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
        courseURL: "/scratch2022",
        price: 100,
    },
] as CourseType[]

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    res.status(200).send(courses)
}