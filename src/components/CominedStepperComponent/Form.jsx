import React, { useState } from "react";
import { usePostData } from "../../api/hooks/usePostData";
import { Select } from "antd";
import { displaySuccessMessage } from "../toast/Toast";

function Form({ setIsOpen }) {
	const postDataMutation = usePostData("/crimes/create");

	const [formData, setFormData] = useState({
		category: "",
		suspect: "",
		suspect1: "",
		nin1: "",
		nin: "",
		suspect2: "",
		nin2: "",
		description: "",
		location: "",
	});

	const [loading, setLoading] = useState(false);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevformData) => ({ ...prevformData, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response = await postDataMutation.mutateAsync(formData);
			setLoading(!loading);
			if (response.status == "201") {
				displaySuccessMessage("Crime created successfully");
				setIsOpen(false);
			}
		} catch (error) {
			console.log("===", error, "===");
		} finally {
			setLoading(false);
		}
	};

	// const handleFileInputChange = (e) => {
	// 	const { name } = e.target;
	// 	setformData((prevformData) => ({
	// 		...prevformData,
	// 		[name]: e.target.files[0],
	// 	}));
	// };

	console.log(formData, "HERE IAM");

	return (
		<div className="flex justify-center flex-col items-center">
			<div className="grid grid-cols-2 gap-8 w-full mx-auto px-5">
				<div>
					<div className="flex flex-col ">
						<label className="text-gray-600 font-sans font-bold">
							category
						</label>
						<Select
							name="name"
							onChange={(value) =>
								setFormData((prevFormData) => ({
									...prevFormData,
									category: value,
								}))
							}
							options={[
								{ value: "Arson", label: "Arson" },
								{ value: "Theft", label: "Theft" },
								{ value: "Burglary", label: "Burglary" },
							]}
							required
						/>
					</div>

					{/* <div className="mb-2">
            <label className="text-sm font-bold text-gray-600" htmlFor="code">
              Code
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="crimeCode"
              onChange={handleChange}
              value={formData.crimeCode}
              name="crimeCode"
              type="text"
              placeholder="bv123x"
            /> */}
					{/* </div> */}
					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="description"
						>
							Description
						</label>
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="description"
							onChange={handleChange}
							value={formData.description}
							name="description"
							type="text"
							rows="1"
							cols="60"
							placeholder="Provide  a  description"
						></textarea>
					</div>
					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="description"
						>
							Location
						</label>
						<textarea
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="description"
							onChange={handleChange}
							value={formData.location}
							name="location"
							type="text"
							rows="1"
							cols="60"
							placeholder="location"
						></textarea>
					</div>
				</div>

				<div>
					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="exhibitName"
						>
							suspect
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="suspect"
							onChange={handleChange}
							value={formData.suspect}
							name="suspect"
							type="text"
							placeholder="suspect name"
						/>
					</div>
					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="exhibitName"
						>
							Suspect Nin
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="nin"
							onChange={handleChange}
							value={formData.nin}
							name="nin"
							type="text"
							placeholder="Nin "
						/>
					</div>

					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="exhibitName"
						>
							Suspect1
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="suspect1"
							onChange={handleChange}
							value={formData.suspect1}
							name="suspect1"
							type="text"
							placeholder="suspect1 name"
						/>
					</div>
					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="exhibitName"
						>
							Suspect One Nin
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="nin1"
							onChange={handleChange}
							value={formData.nin1}
							name="nin1"
							type="text"
							placeholder="Nin one"
						/>
					</div>

					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="exhibitName"
						>
							Suspect2
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="suspect2"
							onChange={handleChange}
							value={formData.suspect2}
							name="suspect2"
							type="text"
							placeholder="suspect2 name"
						/>
					</div>
					<div className="mb-2">
						<label
							className="text-sm font-bold text-gray-600"
							htmlFor="exhibitName"
						>
							Suspect One Nin
						</label>
						<input
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
							id="nin2"
							onChange={handleChange}
							value={formData.nin2}
							name="nin2"
							type="text"
							placeholder="Nin two"
						/>
					</div>
				</div>
			</div>

			<div className="flex justify-center mt-4">
				<button
					onClick={handleSubmit}
					className="bg-green-500 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-slate-700 hover:text-white transition duration-200 ease-in-out"
				>
					{loading ? (
						<div>Uploading....</div>
					) : (
						<div>Upload To blockchain</div>
					)}
				</button>
			</div>
		</div>
	);
}

export default Form;
