// profileSlice.js

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getUserData } from "../services/operations/profileAPI";

const initialState = {
  user: null,
  loading: false,
  error: null, // Add error state to handle API errors
};

// Async thunk to fetch user data
export const fetchUserData = createAsyncThunk(
  "profile/fetchUserData",
  async () => {
    const token = JSON.parse(localStorage.getItem("token"));
    if (token) {
      const response = await getUserData(token);
      return response.data; // Assuming response.data contains the user data
    }
    return null;
  }
);

const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    setLoading(state, action) {
      state.loading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload; // Add reducer to handle API errors
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.pending, (state) => {
        state.loading = true;
        state.error = null; // Clear any previous errors
      })
      .addCase(fetchUserData.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message; // Handle API errors
      });
  },
});

export const { setUser, setLoading, setError } = profileSlice.actions;
export default profileSlice.reducer;
