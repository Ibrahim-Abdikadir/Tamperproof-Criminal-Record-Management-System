/* eslint-disable no-octal-escape */
import React, { useState } from "react";
import { AiOutlineLogout } from "react-icons/ai";
import Model from "../Model/index";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/authSlice";

function Header() {
	const [isOpen, setIsOpen] = useState(false);
	const dispatch = useDispatch();

	function closeModal() {
		setIsOpen(false);
	}

	function openModal() {
		setIsOpen(true);
	}

	const role = localStorage.getItem("role");

	return (
		<div className="shadow-lg h-[60px] w-full bg-white items-center p-4  top-0 fixed ml-40 ">
			{role === "police" ? (
				<div className="ml-[700px] flex  ">
					<button
						type="button"
						onClick={openModal}
						className=" border flex justify-center items-center space-x-2 font-sans font-bold hover:text-white  border-gray-700 rounded hover:bg-blue-600 px-10 mt-2   py-1/5  "
					>
						<span>+</span>
						<p>ADD F.I.R</p>
					</button>

					<div className="hidden">
						<Model
							closeModal={closeModal}
							isOpen={isOpen}
							setIsOpen={setIsOpen}
						/>
					</div>
				</div>
			) : null}
		</div>
	);
}

export default Header;
