import { createSlice } from "@reduxjs/toolkit";
import {
  createPolice,
  deletePolice,
  getPolice,
  getPolices,
  updatePolice,
} from "./policeActions";

const initialState = {
  polices: [],
  get_loading: false,
  update_loading: false,
  create_loading: false,
  delete_loading: false,
  error: null,
};

const policeSlice = createSlice({
  name: "police",
  initialState,
  reducers: {},
  extraReducers: {
    // get police
    [getPolices.pending]: (state) => {
      state.get_loading = true;
    },
    [getPolices.fulfilled]: (state, { payload }) => {
      state.polices = payload;
      state.get_loading = false;
    },
    [getPolices.rejected]: (state, { payload }) => {
      state.error = payload;
      state.get_loading = false;
    },

    // get a police
    [getPolice.pending]: (state) => {
      state.get_loading = true;
    },
    [getPolice.fulfilled]: (state, { payload }) => {
      state.polices = state.polices.map((police) => police._id === payload);
      state.get_loading = false;
    },
    [getPolice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.get_loading = false;
    },

    // update police
    [updatePolice.pending]: (state) => {
      state.update_loading = true;
    },
    [updatePolice.fulfilled]: (state, { payload }) => {
      state.polices = state.polices.map((police) =>
        police._id === payload?.id ? payload?.police : police
      );
      state.update_loading = false;
    },
    [updatePolice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.update_loading = false;
    },

    // create police
    [createPolice.pending]: (state) => {
      state.create_loading = true;
    },
    [createPolice.fulfilled]: (state, { payload }) => {
      state.polices = [{ ...state.polices, payload }];
      state.create_loading = false;
    },
    [createPolice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.create_loading = false;
    },

    // delete police
    [deletePolice.pending]: (state) => {
      state.delete_loading = true;
    },
    [deletePolice.fulfilled]: (state, { payload }) => {
      state.polices = state.polices.filter((police) => police._id !== payload);
      state.delete_loading = false;
    },
    [deletePolice.rejected]: (state, { payload }) => {
      state.error = payload;
      state.delete_loading = false;
    },
  },
});

export default policeSlice.reducer;
