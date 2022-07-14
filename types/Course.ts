import Teacher from "./Teacher";
export default interface Course {
    title: string;
    courseID: string;
    description: string;
    startDate: Date;
    endDate: Date;
    backgroundImage: string
    price: number;
    teachers: Teacher[];
    nextSteps: JSX.Element[];
}