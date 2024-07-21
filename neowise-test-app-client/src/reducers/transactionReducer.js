import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transactionsList: [],
  },
  reducers: {
    getTransactions: (state, action) => {
      // state.snackbar = action.payload;
    },

    updateTransactions: (state, action) => {
      state.transactionsList = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { getTransactions, updateTransactions } = transactionSlice.actions;

export default transactionSlice.reducer;
