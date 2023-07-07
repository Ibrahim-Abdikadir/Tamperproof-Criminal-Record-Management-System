import { createSlice } from "@reduxjs/toolkit";
import {
  deleteCustomer,
  deleteProfileImage,
  getCustomers,
  loadUser,
  login,
  register,
  updateProfileImage,
  update_user,
} from "./authAction";

const initialState = {
  userInfo: null,
  login_loading: false,
  user_loading: false,
  error: null,
  token:
    localStorage.getItem("token") !== null &&
    localStorage.getItem("token") !== undefined &&
    localStorage.getItem("token") !== "undefined"
      ? JSON.parse(localStorage.getItem("token"))
      : null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("token");
      state.token = null;
      state.userInfo = null;
      state.isAuthenticated = false;
      state.active = false;
      state.error = null;
    },
  },
  extraReducers: {
    // Login
    [login.pending]: (state) => {
      state.login_loading = true;
      state.error = null;
    },
    [login.fulfilled]: (state, { payload }) => {
      localStorage.setItem("token", JSON.stringify(payload.token));
      state.token = payload.token;
      state.isAuthenticated = true;
      state.active = true;
      state.login_loading = false;
    },
    [login.rejected]: (state, { payload }) => {
      state.error = payload;
      state.login_loading = false;
    },

    //load user
    [loadUser.pending]: (state) => {
      state.user_loading = true;
      state.error = null;
    },
    [loadUser.fulfilled]: (state, { payload }) => {
      state.userInfo = payload;
      state.user_loading = false;
    },
    [loadUser.rejected]: (state, { payload }) => {
      state.error = payload;
      state.user_loading = false;
    },

    // Registration
    [register.pending]: (state) => {
      state.register_loading = true;
      state.error = null;
    },
    [register.fulfilled]: (state) => {
      state.register_success = true;
      state.isRegistered = true;
      state.register_loading = false;
    },
    [register.rejected]: (state, { payload }) => {
      state.error = payload;
      state.register_loading = false;
      state.register_success = false;
    },
  },
});

export const { logout, clearError, clearMessage, createMessage, createError } =
  authSlice.actions;
export default authSlice.reducer;
