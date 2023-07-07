import { useMutation } from "react-query";
import apiClient from "../apiClient";
import axios from "axios";

export const useCreateCrime = () => {
  const token = localStorage.getItem("userToken");

  return useMutation(async (policeData) => {
    // console.log(policeData)
    const response = await axios.post("http://localhost:9000/api/crimes/create", policeData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  });
};

export const useDeletePolice = () => {
  return useMutation(async (id) => {
    const response = await apiClient.delete(`/api/crimes/delete/${id}`);

    return response.data;
  });
};

export const useGetPolices = () => {
  return useMutation(async () => {
    const response = await apiClient.get("/api/crimes");
    return response.data;
  });
};

export const useGetPolice = () => {
  return useMutation(async (id) => {
    const response = await apiClient.get(`/api/crimes${id}`);

    return response.data;
  });
};

export const useUpdatePolice = () => {
  return useMutation(async (id, policeData) => {
    const response = await apiClient.patch(
      `/api/crimes/update${id}`,
      policeData
    );

    return response.data;
  });
};
