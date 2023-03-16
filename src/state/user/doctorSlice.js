import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import RNAxios from "../../utils/RNAxios";
import api from "../../utils/RNAxios";

const initialState = {
  doctorsList: [],
  doctorsListDetails: [],
  patientsList: [],
  loading: false,
  error: null,
};

export const fetchDoctors = createAsyncThunk(
  "doctor/fetchDoctors",
  async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;
    try {
      await api.get("doctors/").then((data) => {
        console.log(data.data);
      });
    } catch (err) {
      console.log(err.message);
      return rejectWithValue(err.message);
    }
  }
);

const doctorsSlice = createSlice({
  name: "doctors",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchDoctors.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchDoctors.fulfilled, (state, action) => {
        state.loading = false;
        state.doctorsList = action.payload;
      })
      .addCase(fetchDoctors.rejected, (state) => {
        state.loading = true;
      });
  },
});

export default doctorsSlice.reducer;
