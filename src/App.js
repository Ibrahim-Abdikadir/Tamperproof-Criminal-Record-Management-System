import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import Login from "./pages/login";
import HomePage from "./pages/home";
import NotFoundpage from "./pages/Notfound/notFound";
import Register from "./pages/register";
import { ProtectedRoute } from "./ProtectedRoute";
import Crime from "./pages/crime";
import Evidence from "./pages/evidence";
import EvidenceInfo from "./pages/evidenceInfo";
import Redirection from "./pages/Redirection";
import Forensic from "./pages/home/Forensic";
import Web3 from "web3";
import { displayErrorMessage } from "./components/toast/Toast";
import Admin from "./pages/admin";
import Immigration from "./pages/home/Immigration";
function App() {
	useEffect(() => {
		window.onload = async () => {
			if (window.ethereum) {
				try {
					await window.ethereum.enable();
					const web3 = new Web3(window.ethereum);
					const accounts = await web3.eth.getAccounts();
					console.log(accounts);
				} catch (error) {
					console.error(error);
				}
			} else {
				displayErrorMessage("Please install MetaMask extension.");
			}
		};
	}, []);

	return (
		<div className="">
			<Routes>
				<Route
					index
					path="/"
					element={<ProtectedRoute element={<HomePage />} />}
				/>

				<Route
					path="/suspects"
					element={<ProtectedRoute element={<Crime />} />}
				/>
				<Route
					path="/evidence"
					element={<ProtectedRoute element={<Evidence />} />}
				/>

				<Route
					path="/evidence/:id"
					element={<ProtectedRoute element={<EvidenceInfo />} />}
				/>
				<Route
					path="/redirect"
					element={<ProtectedRoute element={<Redirection />} />}
				/>

				<Route
					path="/forensic"
					element={<ProtectedRoute element={<Forensic />} />}
				/>

				<Route
					path="/immigration"
					element={<ProtectedRoute element={<Immigration />} />}
				/>

				<Route
					path="/admin"
					element={<ProtectedRoute element={<Admin />} />}
				/>

				<Route path="/login" element={<Login />} />
				<Route path="/signup" element={<Register />} />
				<Route path="*" element={<NotFoundpage />} />
			</Routes>
		</div>
	);
}
export default App;
