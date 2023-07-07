import React from "react";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { HiOutlineShoppingBag, HiOutlineLogout } from "react-icons/hi";
import { FiSettings } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
// import Header from './Header';

function Sidebar() {
	const navigate = useNavigate();
	const handleLogout = () => {
		localStorage.removeItem("userToken");
		navigate("/login");
	};

	const role = localStorage.getItem("role");
	console.log("ROLE", role);
	const handleNavigate = () => {
		if (role == "admin") {
			navigate("/admin");
		} else if (role == "police") {
			navigate("/");
		} else if (role == "forensics") {
			navigate("/forensic");
		}else if (role == "immigration") {
			navigate("/immigration");
		}else if (role == "courts") {
			navigate("/immigration");
		}
	};
	return (
		<div className="md:block hidden">
			{/* <Header /> */}

			<div className="fixed w-50 bg-[#2C3DA4] h-screen px-8  py-4  border-r-[1px] flex flex-col justify-between">
				<div className="flex flex-col items-center space-y-6">
					<div className="bg-red-800/50  text-white p-5 rounded-lg inline-block z-['9999999999px] ">
						TPCMS
					</div>
					{/* {role === "forensics" ? ( */}
					<div
						onClick={handleNavigate}
						className="flex  text-white font-bold flex-col justify-center items-center"
					>
						<div className=" hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
							<img
								className="w-10  h-10"
								src="https://res.cloudinary.com/itgenius/image/upload/v1688471795/interrogation_uzq2yy.png"
								alt=""
							/>
						</div>
						<h3 className="text-sm">Dasboard</h3>
					</div>

					<Link
						to="/evidence"
						className="flex text-white font-bold flex-col justify-center items-center"
					>
						<div className=" hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
							<img
								className="w-10  h-10"
								src="https://res.cloudinary.com/itgenius/image/upload/v1688471795/evidence_xmznjt.png"
								alt=""
							/>
						</div>
						<h3 className="text-sm">Evidence</h3>
					</Link>
					<Link
						to="/suspects"
						className="flex text-white font-bold flex-col justify-center items-center"
					>
						<div className=" hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block">
							<img
								className="w-10  h-10"
								src="https://res.cloudinary.com/itgenius/image/upload/v1688471796/check_uk2bqb.png"
								alt=""
							/>
						</div>
						<h3 className="text-sm">Suspects</h3>
					</Link>
					<div
						onClick={handleLogout}
						className="font-bold text-white flex justify-center items-center space-x-2  hover:bg-gray-200 cursor-pointer  p-3 rounded-lg inline-block"
					>
						<HiOutlineLogout size={20} />
						<h3>Logout</h3>
					</div>
				</div>
				<main className="ml-20 w-full"></main>
			</div>
		</div>
	);
}

export default Sidebar;
