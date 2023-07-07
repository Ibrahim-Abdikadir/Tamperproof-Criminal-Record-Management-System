import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

function FirstStep() {
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
					htmlFor="case_id"
				>
					Case ID
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="caseID"
					onChange={handleChange}
					value={userData["caseID"] || ""}
					name="caseID"
					type="text"
					placeholder="C/xxxx/00"
				/>
			</div>

			<div className="mb-2 mt-2">
				<label
					className="flex justify-start  text-gray-700 text-sm font-bold mb-1"
					htmlFor="offense_code"
				>
					Offense Code
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					onChange={handleChange}
					value={userData["offenseCode"] || ""}
					name="offenseCode"
					type="text"
					placeholder="theft"
				/>
			</div>
			<div className="mb-2">
				<label
					className="flex justify-start  text-gray-700 text-sm font-bold mb-2"
					htmlFor="description"
				>
					Enter Description
				</label>
				<textarea
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-2 leading-tight focus:outline-none focus:shadow-outline"
					id="description"
					onChange={handleChange}
					value={userData["description"] || ""}
					name="description"
					type="text"
					rows="3"
					cols="60"
				></textarea>
			</div>

			<div className="flex items-center justify-between"></div>
		</>
	);
}

export default FirstStep;
