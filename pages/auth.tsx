import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import { motion } from "framer-motion";

const Signup = () => {
	// signin, Signup, forgot
	const [authState, toggleAuthState] = useState("signin");
	const authVariants = {
		closed: { opacity: 0, y: -100 },
		open: { opacity: 1, y: 0 },
		exitClosed: { opacity: 0, y: 100 },
	}
	const authTransition={
		type:"tween",
		ease:"easeInOut"
	}

	return(
		<div className="h-screen w-screen grid place-items-center">
			<div className="w-full lg:w-9/12 xl:w-7/12 xl:border-10 2xl:w-6/12 flex lg:overflow-hidden lg:shadow-md rounded-lg transition-all">
				{/* left side */}
				<div
					className="w-full h-auto bg-gray-400 hidden lg:block lg:w-1/2 bg-cover"
					style={{backgroundImage: "url('https://source.unsplash.com/K4mSJ7kc0As/600x800')"}}
				></div>

				{/* right side */}
				<AnimatePresence exitBeforeEnter>
					{
						authState === "signin" &&
						<motion.div
							variants={authVariants}
							initial={"closed"}
							animate={"open"}
							exit={"exitClosed"}
							transition={authTransition}
							key={1}
							className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
						>
							<h3 className="pt-4 text-2xl text-center">Welcome Back!</h3>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
										Username
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="username"
										type="text"
										placeholder="Username"
									/>
								</div>
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p className="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								<div className="mb-4">
									<input className="mr-2 leading-tight" type="checkbox" id="checkbox_id" />
									<label className="text-sm" htmlFor="checkbox_id">
										Remember Me
									</label>
								</div>
								<div className="mb-6 text-center">
									<button
										className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
										type="button"
									>
										Sign In
									</button>
								</div>
								<hr className="mb-6 border-t" />
								<div className="text-center">
									<a
										className="hover:cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
										onClick={() => toggleAuthState("Signup")}
									>
										Create an Account!
									</a>
								</div>
								<div className="text-center">
									<a
										className="hover:cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
										onClick={() => toggleAuthState("forgot")}
									>
										Forgot Password?
									</a>
								</div>
							</form>
						</motion.div>
					}
					{
						authState === "Signup" &&
						<motion.div
							variants={authVariants}
							initial={"closed"}
							animate={"open"}
							exit={"exitClosed"}
							transition={authTransition}
							key={2}
							className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
						>
							<h3 className="pt-4 text-2xl text-center">Create an Account!</h3>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-2">
								{/* first name */}
								<div className="w-full">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="firstName">
										First Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="firstName"
										type="text"
										placeholder="First Name"
									/>
								</div>
								{/* last name */}
								<div>
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="lastName">
										Last Name
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="lastName"
										type="text"
										placeholder="Last Name"
									/>
								</div>
								{/* email */}
								<div className="md:col-span-2">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
										Email
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Email"
									/>
								</div>
								{/* password */}
								<div>
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
										Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="password"
										type="password"
										placeholder="******************"
									/>
									<p className="text-xs italic text-red-500">Please choose a password.</p>
								</div>
								{/* confirm */}
								<div>
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="c_password">
										Confirm Password
									</label>
									<input
										className="w-full px-3 py-2 mb-3 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="c_password"
										type="password"
										placeholder="******************"
									/>
								</div>

								{/* submit */}
								<div className="text-center md:col-span-2">
									<button
										className="w-full px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700 focus:outline-none focus:shadow-outline"
										type="button"
									>
										Register Account
									</button>
								</div>

								<hr className="my-4 border-t md:col-span-2" />
								
								{/* change authState */}
								<div className="text-center md:col-span-2">
									<a
										className="block text-sm text-blue-500 align-baseline hover:text-blue-800"
										onClick={() => {toggleAuthState("forgot")}}
									>
										Forgot Password?
									</a>
									<a
										className="hover:cursor-pointer block text-sm text-blue-500 align-baseline hover:text-blue-800"
										onClick={() => {toggleAuthState("signin")}}
									>
										Already have an account? Login!
									</a>
								</div>
							</form>
						</motion.div>
					}
					{
						authState === "forgot" &&
						<motion.div
							variants={authVariants}
							initial={"closed"}
							animate={"open"}
							exit={"exitClosed"}
							transition={authTransition}
							key={3}
							className="w-full lg:w-7/12 bg-white p-5 rounded-lg lg:rounded-l-none"
						>
							<div className="px-8 mb-4 text-center">
								<h3 className="pt-4 mb-2 text-2xl">Forgot Your Password?</h3>
								<p className="mb-4 text-sm text-gray-700">
									We get it, stuff happens.Just enter your email address below and we&apos;ll send you a
									link to reset your password!
								</p>
							</div>
							<form className="px-8 pt-6 pb-8 mb-4 bg-white rounded">
								<div className="mb-4">
									<label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
										Email
									</label>
									<input
										className="w-full px-3 py-2 text-sm leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
										id="email"
										type="email"
										placeholder="Enter Email Address..."
									/>
								</div>
								<div className="mb-6 text-center">
									<button
										className="w-full px-4 py-2 font-bold text-white bg-red-500 rounded-full hover:bg-red-700 focus:outline-none focus:shadow-outline"
										type="button"
									>
										Reset Password
									</button>
								</div>
								<hr className="mb-6 border-t" />
								<div className="text-center">
									<a
										className="hover:cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
										onClick={()=>{toggleAuthState("Signup")}}
									>
										Create an Account!
									</a>
								</div>
								<div className="text-center">
									<a
										className="hover:cursor-pointer inline-block text-sm text-blue-500 align-baseline hover:text-blue-800"
										onClick={()=>{toggleAuthState("signin")}}
									>
										Already have an account? Login!
									</a>
								</div>
							</form>
						</motion.div>
					}
				</AnimatePresence>
			</div>
		</div>
	)
}

export default Signup;