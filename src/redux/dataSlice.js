/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    crimeId:"test1234"
}
const dataSlice = createSlice({
	name: "data",
	initialState,
	reducers: {
		setCrimeId: (state, action) => {
			state.crimeId = action.payload;
		},
	},
});

export const { setCrimeId } = dataSlice.actions;
export default dataSlice.reducer;
