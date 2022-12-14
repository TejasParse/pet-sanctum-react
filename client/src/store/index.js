import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  LoginProfile: {},
  id: "",
  username: "",
  isAdmin: false
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.id = action.payload.id;
      state.username = action.payload.username;
      state.LoginProfile = action.payload.LoginProfile
      if(state.LoginProfile.isAdmin) {
        state.isAdmin = true;
      } else {
        state.isAdmin = false;
      }
    },
    logout: (state) => {

      console.log("Logged out");

      state.isLoggedIn = false;
      state.id = "";
      state.username = "";
      state.LoginProfile = {}
      state.isAdmin = false;
    },
  },
});

export const store = configureStore({
  reducer: authSlice.reducer,
});

export const authActions = authSlice.actions;