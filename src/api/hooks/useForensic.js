import { useMutation } from "react-query";
import apiClient from "../apiClient";

export const useCreateForensic = () => {
  return useMutation(async (forensicData) => {
    const response = await apiClient.post(
      "/api/forensics/create",
      forensicData
    );
    return response.data;
  });
};

export const useDeleteForensic = () => {
  return useMutation(async (id) => {
    const response = await apiClient.delete(`/api/forensics/delete/${id}`);

    return response.data;
  });
};

export const useGetForensics = () => {
  return useMutation(async () => {
    const response = await apiClient.get("/api/forensics");
    return response.data;
  });
};

export const useGetForensic = () => {
  return useMutation(async (id) => {
    const response = await apiClient.get(`/api/forensics/${id}`);

    return response.data;
  });
};

export const useUpdateForensic = () => {
  return useMutation(async (id, forensicData) => {
    const response = await apiClient.patch(
      `/api/forensics/update/${id}`,
      forensicData
    );

    return response.data;
  });
};
