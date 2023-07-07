import React, { useContext } from "react";
import { StepperContext } from "../../../contexts/StepperContext";

function ThirdStep() {
	const { userData, setUserData } = useContext(StepperContext);
	const handleChange = (e) => {
		const { name, value } = e.target;
		setUserData({ ...userData, [name]: value });
	};
	const handleFileInputChange = (e) => {
		const { name } = e.target;
		setUserData({ ...userData, [name]: e.target.files[0] });
	};
	return (
		<>
			<div className="mb-2">
				<label
					className="flex justify-start  text-gray-700 text-sm font-bold mb-1"
					for="documents"
				>
					Documents (Upload in Zip or Rar format)
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
					id="caseID"
					onChange={handleFileInputChange}
					value={userData["documents"] || ""}
					name="documents"
					type="file"
					placeholder="Choose File"
				/>
			</div>

			<div className="mb-2 mt-5">
				<label
					className="flex justify-start  text-gray-700 text-sm font-bold mb-1"
					for="timeStamp"
				>
					Timestamp
				</label>
				<input
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
					id="password"
					onChange={handleChange}
					value={userData["timestamp"] || ""}
					name="timeStamp"
					type="text"
					placeholder="2019-03-03 20:24"
				/>
			</div>
		</>
	);
}

export default ThirdStep;
