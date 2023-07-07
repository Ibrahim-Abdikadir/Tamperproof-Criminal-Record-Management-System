import { createAsyncThunk } from "@reduxjs/toolkit";
import { tokenConfig, api } from "../../Api";
import { apiClient } from "../../api";

export const getForensics = createAsyncThunk(
  "forensic/get",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get("/api/forensics", tokenConfig(getState));
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data.error.message);
      }
    }
  }
);

export const getForensic = createAsyncThunk(
  "forensic/get",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(
        `/api/forensics/${id}`,
        tokenConfig(getState)
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.error) {
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data.error.message);
      }
    }
  }
);

export const createForensic = createAsyncThunk(
  "forensic/create",
  async (forensics, { getState, rejectWithValue, dispatch }) => {
    try {
      const { data } = await apiClient.post(
        "/api/forensics",
        forensics,
        tokenConfig(getState)
      );

      return data;
    } catch (error) {
      console.log(error);
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const updateForensic = createAsyncThunk(
  "forensic/update",
  async (forensicDetials, { getState, rejectWithValue, dispatch }) => {
    const { _id } = { ...forensicDetials };
    try {
      const { data } = await apiClient.patch(
        `/api/forensics/update/${_id}`,
        forensicDetials,
        tokenConfig(getState)
      );

      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);

export const deleteForensic = createAsyncThunk(
  "forensic/delete",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.delete(
        `/api/forensics/delete/${id}`,
        tokenConfig(getState)
      );
      return data;
    } catch (error) {
      if (error.response && error.response.data.message) {
        return rejectWithValue(error.response.data.message);
      } else {
        return rejectWithValue(error.response.data);
      }
    }
  }
);
