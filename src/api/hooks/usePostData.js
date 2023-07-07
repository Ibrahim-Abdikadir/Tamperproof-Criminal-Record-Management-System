import { useMutation } from "react-query";
import apiClient from "../apiClient";

export const usePostData = (endpoint) => {
	const token = localStorage.getItem("userToken");
	return useMutation(async (formData) => {
		try {
			const response = await apiClient.post(endpoint, formData, {
				headers: {
					Authorization: `Bearer ${token}`,
				},
			});
			return response;
		} catch (error) {
			console.error("Error in usePostData mutation:", error);
		}
	});
};
