import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	user: null,
	token: null,
};

const authSlice = createSlice({
	name: "auth",
	initialState,
	reducers: {
		setUser: (state, action) => {
			state.user = action.payload;
		},
		setToken: (state, action) => {
			state.token = action.payload;
			localStorage.setItem("token", JSON.stringify(action.payload));
		},
		logout: (state, action) => {
			state.user = null;
			state.token = null;
			localStorage.removeItem("token");
		},
	},
});

export const { setUser, logout, setToken } = authSlice.actions;
export default authSlice.reducer;
