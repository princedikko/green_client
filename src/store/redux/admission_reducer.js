import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const admissionReducer = createSlice({
  name: "admission_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
  },
  reducers: {
    startAdmissionAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
        isAuthenticated: true,
      };
    },
    logOut: (state, action) => {
      return {
        ...state,
        queue: [],
        isAuthenticated: false,
      };
    },
  },
});

export const { startAdmissionAction, logOut } = admissionReducer.actions;

export default admissionReducer.reducer;
