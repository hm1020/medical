import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./auth/authSlice";
import doctors from "./user/doctorSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    doctors,
  },
});
