import React from "react";
import { useDispatch ,useSelector} from "react-redux";

const Redirection = () => {

    // const dispatch = useDispatch()

    const user  = useSelector((state) => state.auth)

    console.log(user ,'ROLE')
	return (
		<>
			<section class="text-gray-600 body-font">
				<div class="container px-5 py-24 mx-auto space-y-9">
					<div class="lg:w-2/3 ss sm:flex-row sm:items-center items-start mx-auto">
						<h1 class="flex-grow sm:pr-16 text-2xl font-medium title-font text-gray-900">
							Please wait as we redirect you to the dashboard
						</h1>
						<h3 className=" text-blue-700/50">Redirecting......</h3>
						<button class="flex-shrink-0 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg mt-10 sm:mt-0">
							Click button for manual redirect!
						</button>
					</div>
				</div>
			</section>
		</>
	);
};

export default Redirection;
