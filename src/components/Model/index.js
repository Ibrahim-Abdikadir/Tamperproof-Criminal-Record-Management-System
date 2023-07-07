import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { CrossCircledIcon } from "@radix-ui/react-icons";
import Form from "../CominedStepperComponent/Form";
import ForensicForm from "../CominedStepperComponent/ForensicForm";

export default function MyModal({ closeModal, isOpen, setIsOpen }) {
	const role = localStorage.getItem("role");
	// console.log(role)
	// console.log(role, "ETRETRTWETWRYWTYRWU");
	return (
		<>
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
								<Dialog.Panel className="md:w-3/4 mx-auto shadow-xl rounded-2xl pb-2  bg-white">
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
										{role == "police" ? "New FIR" : "New Report"}
									</Dialog.Title>

									<div className="">
										<div className="container horizontal mt-5 ">
											{role == "police" ? (
												<Form setIsOpen={setIsOpen} />
											) : (
												<ForensicForm setIsOpen={setIsOpen} />
											)}
										</div>
									</div>
								</Dialog.Panel>
							</Transition.Child>
						</div>
					</div>
				</Dialog>
			</Transition>
		</>
	);
}
