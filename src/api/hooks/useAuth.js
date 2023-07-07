import { useMutation } from "react-query";
import apiClient from "../apiClient";
import { data } from "autoprefixer";

// export const useRegister = () => {
//   const token = localStorage.getItem("userToken");
//   return useMutation(async (userData) => {
//    try{ const response = await apiClient.post("/auth/signup", {
//     userData,
//     headers: {
//       Authorization: `Bearer ${token}`,
//     },
//   });

//     return response.data;

// } catch(error){
//   console.error("Error in usePostData mutation:", error);
// }

//   }}
export const useRegister = () => {
  const token = localStorage.getItem("userToken");
  return useMutation(async (userData) => {
    try {
      const response = await apiClient.post("/auth/signup", userData, {
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
export const useLogin = () => {
  return useMutation(async (loginData) => {
    const response = await apiClient.post("/auth/login", loginData);

    return response.data;
  });
};
