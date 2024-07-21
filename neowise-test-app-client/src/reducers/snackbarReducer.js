import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  snackbar: {
    type: "",
    isShow: false,
    msg: "",
  },
};

export const snackbarSlice = createSlice({
  name: "Snackbar",
  initialState,
  reducers: {
    openSnackbar: (state, action) => {
      state.snackbar = action.payload;
    },
    closeSnackbar: (state, action) => {
      state.snackbar = {
        type: "",
        isShow: false,
        msg: "",
      };
    },
  },
});

export const { openSnackbar, closeSnackbar } = snackbarSlice.actions; // For Dispatch Actions
export default snackbarSlice.reducer; // For Root Reducer