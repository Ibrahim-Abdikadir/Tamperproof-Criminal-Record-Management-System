import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

function SecondStep() {
	const { userData, setUserData } = useContext(StepperContext);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};
	return (
		<>
			<div className="mb-2">
				<label
					className="flex justify-start  text-gray-700 text-sm font-bold mb-1"
					for="exhibitName"
				>
					Exhibit Name + Code
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="exhibitName"
					onChange={handleChange}
					value={userData["exhibitName"] || ""}
					name="exhibitName"
					type="text"
					placeholder="Type and code of uploaded exhibit"
				/>
			</div>

			<div className="mb-2 mt-5">
				<label
					className="flex justify-start  text-gray-700 text-sm font-bold mb-2"
					for="exhibitDescription"
				>
					Description
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					onChange={handleChange}
					value={userData["exhibitdescription"] || ""}
					name="exhibitDescription"
					type="text"
					placeholder="one line description"
					rows="1"
					cols="60"
				></textarea>
			</div>
		</>
	);
}

export default SecondStep;
