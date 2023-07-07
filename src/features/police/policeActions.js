import { createAsyncThunk } from "@reduxjs/toolkit";
import { tokenConfig, api } from "../../Api";
import { apiClient } from "../../api";

export const getPolices = createAsyncThunk(
  "polices/get",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(
        "/api/polices",
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

export const getPolice = createAsyncThunk(
  "police/get",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(
        `/api/polices/${id}`,
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

export const createPolice = createAsyncThunk(
  "police/create",
  async (polices, { getState, rejectWithValue, dispatch }) => {
    try {
      const { data } = await apiClient.post(
        "/api/polices",
        polices,
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

export const updatePolice = createAsyncThunk(
  "police/update",
  async (policeDetials, { getState, rejectWithValue, dispatch }) => {
    const { _id } = { ...policeDetials };
    try {
      const { data } = await apiClient.patch(
        `/api/polices/update/${_id}`,
        policeDetials,
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

export const deletePolice = createAsyncThunk(
  "police/delete",
  async (id, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.delete(
        `/api/polices/delete/${id}`,
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
