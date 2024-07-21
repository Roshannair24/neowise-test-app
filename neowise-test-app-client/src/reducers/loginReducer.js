import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    accessToken: "",
  },
  reducers: {
    postLoginCred: (state, action) => {
      // state.snackbar = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { postLoginCred, updateAccessToken } = authSlice.actions;

export default authSlice.reducer;
