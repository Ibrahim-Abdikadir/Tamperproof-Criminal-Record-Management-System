import axios from "axios";


const apiClient = axios.create({
	baseURL: "https://crimes-api.onrender.com/api",
});

export default apiClient;


