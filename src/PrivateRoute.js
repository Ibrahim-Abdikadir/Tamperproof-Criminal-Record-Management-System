import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
	const auth = useSelector((state) => state?.auth);
	const { token } = auth || {};
	const navigate = useNavigate();

	if (!token) {
		navigate("/login");
		return null;
	}

	return children;
};

export default PrivateRoute;
