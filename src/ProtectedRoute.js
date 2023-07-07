import { Navigate } from "react-router-dom";
import { AuthContext } from "./contexts/AuthContext";
import { useContext } from "react";

export const ProtectedRoute = ({ element: Component }) => {
	const { isAuthenticated } = useContext(AuthContext);
const token = localStorage.getItem("userToken");

	console.log("isAuthenticated: ", isAuthenticated);

	if (!token) {
		return <Navigate to="/login" />;
	}

	return Component;
};


