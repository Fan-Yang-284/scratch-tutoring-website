import { useClipboard } from "@mantine/hooks";
import Head from "next/head";
import { useRouter } from "next/router";
import courses from "../../data/courses";

const success = () => {
	const clipboard = useClipboard({ timeout: 2000 });
	const router = useRouter();
	const { courseID } = router.query;
	const activeCourse = courses.find(course => course.courseID == courseID);
	return (
		<>
			<Head>
				<title>Registration Successful | Flare</title>
			</Head>
			<div className="h-screen grid place-items-center">
				<div className="border-2 rounded-lg shadow-md p-6 py-16 max-w-[45rem]">
					<h1 className="text-2xl md:text-4xl font-bold mb-4 text-center">Registration Successful</h1>

					<h2 className="text-xl font-semibold">Next steps</h2>
					<ol className="list-decimal pl-4">
						<li>
							Send Payment via <strong>Interac E-transfer</strong> to 
							<span className="ml-1 inline-flex flex-row gap-x-1">
								<strong>jessicawu414@gmail.com</strong>
								{
									!clipboard.copied ?
									<svg onClick={() => clipboard.copy('jessicawu414@gmail.com')} className="w-6 h-6 hover:cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path d="M8 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" />
										<path d="M6 3a2 2 0 00-2 2v11a2 2 0 002 2h8a2 2 0 002-2V5a2 2 0 00-2-2 3 3 0 01-3 3H9a3 3 0 01-3-3z" />
									</svg>
									:
									<svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
										<path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
										<path fillRule="evenodd" clipRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" />
									</svg>
								}
							</span>
						</li>
						<li>
							Once payment is processed, you will recieve a confirmation email. This email will contain the meeting link.
						</li>
						{
							activeCourse?.nextSteps.map((step, i)=>
								<li key={i}>{step}</li>
							)
						}
					</ol>
				</div>
			</div>
		</>
	);
}

export default success;