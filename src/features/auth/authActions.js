import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiClient } from "../../api";

export const login = createAsyncThunk(
  "auth/login",
  async (loginDetails, { rejectWithValue, dispatch }) => {
    try {
      const { data } = await apiClient.post("/auth/login", loginDetails);

      return data;
    } catch (error) {
      if (error) {
        if (error.response.data.message) {
          return rejectWithValue(error.response.data.message);
        }
        return rejectWithValue(error.response.data.error.message);
      } else {
        return rejectWithValue(error.response.data.error.message);
      }
    }
  }
);

export const loadUser = createAsyncThunk(
  "auth/loadUser",
  async (_, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.get(`/auth`);
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

export const register = createAsyncThunk(
  "auth/signup",
  async (registerDetails, { getState, rejectWithValue }) => {
    try {
      const { data } = await apiClient.post("/auth/signup", registerDetails);
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
