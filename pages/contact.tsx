const PersonCard = ({ name, profileSrc, email }: { name: string, profileSrc: string, email: string})=>{
    return(
        <div className="p-4 border-2">
            <img src={profileSrc} className="h-48 md:h-56 w-48 md:w-56 rounded-lg" alt="" />
            <h1 className="font-bold text-6xl mt-4">
                {name}
            </h1>
            <a href={"mailto:"+email} className="text-blue-400 hover:text-blue-600 visited:text-purple-400">
                {email}
            </a>
        </div>
    )
}
const contact = () => {
    return (
        <div className="flex flex-col md:flex-row mx-4 pt-24 justify-around gap-y-4 gap-x-6">
            <PersonCard name="Edwin Zheng" profileSrc="/Edwin_Avatar.png" email="jessicawu414@gmail.com"/>
            <PersonCard name="Fan Yang" profileSrc="/Fan_Avatar.png" email="fan.yang284@gmail.com"/>
        </div>
    );
}

export default contact;