import { useRouter } from "next/router";

const courseID = () => {
    const router = useRouter();    
    return (
        <div>
            {router.query.id}
        </div>
    );
}

export default courseID;