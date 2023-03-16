import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { baseURL } from "../../utils/apiUrl";
import RNAxios from "../../utils/RNAxios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import api from "../../utils/RNAxios";

const initialState = {
  user: [],
  isAuthenticated: false,
  loading: false,
  registered: false,
  message: null,
  isError: false,
};

//--------- Login user
export const LoginUser = createAsyncThunk(
  "user/login",
  async (user, thunkAPI) => {
    try {
      const resp = await api.post("login", user);
      if (resp.data) {
        AsyncStorage.setItem("token", resp.data.token);
        AsyncStorage.setItem("role", resp.data.user.role);
      }
    } catch (error) {
      console.log(error.response.data.message);
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message;

      return thunkAPI.rejectWithValue(message);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    resetRegistered: (state) => {
      state.registered = false;
    },
  },

  extraReducers: (builder) => {
    builder
      // Login
      .addCase(LoginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(LoginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.registered = true;
        state.isAuthenticated = true;
        // localStorage.setItem("isAuthenticated", state.isAuthenticated);
        // state.user.push(action.payload);
      })
      .addCase(LoginUser.rejected, (state, action) => {
        state.loading = false;
        state.isError = true;
        state.user = null;
        state.isAuthenticated = false;
        state.message = action.payload;
      });
  },
});

export const { resetRegistered } = userSlice.actions;
export default userSlice.reducer;
