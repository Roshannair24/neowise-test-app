import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "authentication",
  initialState: {
    accessToken: "",
    userData: null,
  },
  reducers: {
    postLoginCred: (state, action) => {
      // state.snackbar = action.payload;
    },
    updateAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },

    getUserData: (state, action) => {
      // state.snackbar = action.payload;
    },

    updateUserdata: (state, action) => {
      state.userData = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { postLoginCred, updateAccessToken, getUserData, updateUserdata } =
  authSlice.actions;

export default authSlice.reducer;
