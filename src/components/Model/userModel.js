import React, { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import {
	displaySuccessMessage,
	displayErrorMessage,
} from "../../components/toast/Toast";
import { Select } from "antd";
import { useRegister } from "../../api";

function UserModel({ closeModal, isOpen, setIsOpen }) {
	const [formData, setFormData] = useState({
		email: "",
		role: "",
		password: "",
		name: "",
		id: "",
	});

	const [passwordVisible, setPasswordVisible] = useState(false);
	const [loading, setLoading] = useState(false);

	const registerMutation = useRegister();

	const handleChange = (event) => {
		const { name, value } = event.target;
		setFormData((prevState) => ({ ...prevState, [name]: value }));
	};

	const handleSubmit = async (event) => {
		event.preventDefault();
		setLoading(true);
		try {
			const response = await registerMutation.mutateAsync(formData);
			displaySuccessMessage("You have been registered successfully");
			setLoading(false);
			setFormData({
				email: "",
				role: "",
				password: "",
				name: "",
			});
			window.location.reload();
		} catch (error) {
			displayErrorMessage("An error occured try again later");
		}
	};

	console.log(formData);

	const handleVisibility = () => {
		setPasswordVisible(!passwordVisible);
	};
	return (
		<Transition appear show={isOpen} as={Fragment}>
			<Dialog as="div" className="relative z-50 " onClose={closeModal}>
				<Transition.Child
					as={Fragment}
					enter="ease-out duration-300"
					enterFrom="opacity-0"
					enterTo="opacity-100"
					leave="ease-in duration-200"
					leaveFrom="opacity-100"
					leaveTo="opacity-0"
				>
					<div className="fixed inset-0 bg-black bg-opacity-25" />
				</Transition.Child>

				<div className="fixed inset-0 overflow-y-auto ">
					<div className="flex min-h-full items-center justify-center p-4 mt-2 text-center ml-10">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 scale-95"
							enterTo="opacity-100 scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 scale-100"
							leaveTo="opacity-0 scale-95"
						>
							<Dialog.Panel className="md:w-1/2 mx-auto shadow-xl rounded-2xl pb-2 bg-white ">
								<div className="mt-1 pr-2 flex justify-end">
									<CrossCircledIcon
										onClick={closeModal}
										className=" w-10 h-10 cursor-pointer "
										color="gray"
									/>
								</div>
								<Dialog.Title
									as="h3"
									className="text-lg font-medium leading-6 text-gray-700   font-sans mb-5"
								>
									ADD User
								</Dialog.Title>

								<div className="">
									<div className="container horizontal mt-5">
										<form className="max-w-[400px] w-full mx-auto bg-white rounded-[24px] p-8">
											<div className="flex flex-col mb-4">
												<label className="text-gray-900 font-sans font-bold">
													Name
												</label>
												<input
													className="border relative bg-gray-100 p-2 rounded-md "
													type="text"
													name="name"
													value={formData.name}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="flex flex-col mb-4">
												<label className="text-gray-900 font-sans font-bold">
													Email
												</label>
												<input
													className="border relative bg-gray-100 p-2 rounded-md "
													type="email"
													name="email"
													value={formData.email}
													onChange={handleChange}
													required
												/>
											</div>
											<div className="flex flex-col ">
												<label className="text-gray-900 font-sans font-bold">
													Role
												</label>
												<Select
													name="role"
													onChange={(value) =>
														setFormData((prevFormData) => ({
															...prevFormData,
															role: value,
														}))
													}
													options={[
														{
															value: "forensics",
															label: "Forensic",
														},
														{ value: "police", label: "Police" },
														{
															value: "immigration",
															label: "Immigration",
														},
														{
															value: "courts",
															label: "Courts of Law",
														},
													]}
													required
												/>
											</div>
											<div className="flex relative flex-col ">
												<label className="text-gray-900 font-sans font-bold">
													Password
												</label>
												<input
													className="border relative bg-gray-100 p-2 rounded-md"
													type={
														passwordVisible ? "text" : "password"
													}
													name="password"
													value={formData.password}
													onChange={handleChange}
													required
												/>
												<span
													onClick={() => {
														handleVisibility();
													}}
													className="absolute top-8 right-2 cursor-pointer text-sm"
												>
													{passwordVisible ? "HIDE" : "SHOW"}
												</span>
											</div>
											<div className="flex flex-col mb-4">
												<label className="text-gray-900 font-sans font-bold">
													User Id
												</label>
												<input
													className="border relative bg-gray-100 p-2 rounded-md "
													type="text"
													name="id"
													value={formData.id}
													onChange={handleChange}
													required
												/>
											</div>

											{/* <div className="flex flex-col ">
						<label className="text-gray-900 font-sans font-bold">
							Confirm Password
						</label>
						<input
							className="border relative bg-gray-100 p-2 rounded-md"
							type="password"
							name="password"
							value={formData.password}
							onChange={handleChange}
							required
						/>
					</div> */}
											<button
												onClick={handleSubmit}
												className="w-full py-3 mt-8 bg-indigo-600 rounded-md hover:bg-indigo-500 relative text-white"
											>
												{loading
													? "Registering User ...."
													: "Add User"}
											</button>
										</form>
									</div>
								</div>
							</Dialog.Panel>
						</Transition.Child>
					</div>
				</div>
			</Dialog>
		</Transition>
	);
}

export default UserModel;
