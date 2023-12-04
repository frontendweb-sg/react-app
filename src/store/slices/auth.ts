import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  isAdmin: false,
  isUser: false,
  isLoggedIn: false,
  redirectUrl: "/",
  user: {},
};

/**
 * Auth slice
 */
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
});

export const {} = authSlice.actions;
export default authSlice.reducer;
