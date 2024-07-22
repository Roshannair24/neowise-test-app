import { createSlice } from "@reduxjs/toolkit";

export const transactionSlice = createSlice({
  name: "transaction",
  initialState: {
    transactionsList: [],
    currentTransactionDetails: {},
  },
  reducers: {
    getTransactions: (state, action) => {
      // state.snackbar = action.payload;
    },

    updateTransactions: (state, action) => {
      state.transactionsList = action.payload;
    },

    getSingleTransactionDetails: (state, action) => {
      // state.snackbar = action.payload;
    },

    updateSingleTransactionDetails: (state, action) => {
      state.currentTransactionDetails = action.payload;
    },

    createTransaction: (state, action) => {
      // state.snackbar = action.payload;
    },

    deleteTransaction: (state, action) => {
      // state.snackbar = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const {
  getTransactions,
  updateTransactions,
  getSingleTransactionDetails,
  updateSingleTransactionDetails,
  createTransaction,
  deleteTransaction,
} = transactionSlice.actions;

export default transactionSlice.reducer;
