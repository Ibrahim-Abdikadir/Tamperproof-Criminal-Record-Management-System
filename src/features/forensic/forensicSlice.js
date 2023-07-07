import { createSlice } from "@reduxjs/toolkit";
import {
  createForensic,
  deleteForensic,
  getForensic,
  getForensics,
  updateForensic,
} from "./forensicActions";

const initialState = {
  forensics: [],
  get_loading: false,
  update_loading: false,
  create_loading: false,
  delete_loading: false,
  error: null,
};

const forensicSlice = createSlice({
  name: "forensic",
  initialState,
  reducers: {},
  extraReducers: {
    // get forensic
    [getForensics.pending]: (state) => {
      state.get_loading = true;
    },
    [getForensics.fulfilled]: (state, { payload }) => {
      state.forensics = payload;
      state.get_loading = false;
    },
    [getForensics.rejected]: (state, { payload }) => {
      state.error = payload;
      state.get_loading = false;
    },

    // get a forensic
    [getForensic.pending]: (state) => {
      state.get_loading = true;
    },
    [getForensic.fulfilled]: (state, { payload }) => {
      state.forensics = state.forensics.map(
        (forensic) => forensic._id === payload
      );
      state.get_loading = false;
    },
    [getForensic.rejected]: (state, { payload }) => {
      state.error = payload;
      state.get_loading = false;
    },

    // update forensic
    [updateForensic.pending]: (state) => {
      state.update_loading = true;
    },
    [updateForensic.fulfilled]: (state, { payload }) => {
      state.forensics = state.forensics.map((forensic) =>
        forensic._id === payload?.id ? payload?.forensic : forensic
      );
      state.update_loading = false;
    },
    [updateForensic.rejected]: (state, { payload }) => {
      state.error = payload;
      state.update_loading = false;
    },

    // create forensic
    [createForensic.pending]: (state) => {
      state.create_loading = true;
    },
    [createForensic.fulfilled]: (state, { payload }) => {
      state.forensics = [{ ...state.forensics, payload }];
      state.create_loading = false;
    },
    [createForensic.rejected]: (state, { payload }) => {
      state.error = payload;
      state.create_loading = false;
    },

    // delete forensic
    [deleteForensic.pending]: (state) => {
      state.delete_loading = true;
    },
    [deleteForensic.fulfilled]: (state, { payload }) => {
      state.forensics = state.forensics.filter(
        (forensic) => forensic._id !== payload
      );
      state.delete_loading = false;
    },
    [deleteForensic.rejected]: (state, { payload }) => {
      state.error = payload;
      state.delete_loading = false;
    },
  },
});

export default forensicSlice.reducer;
