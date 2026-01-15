import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const staffAssesmentReducer = createSlice({
  name: "student_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: 0,
    },
  },
  reducers: {
    logOut: (state, action) => {
      return {
        ...state,
        queue: [],
        isAuthenticated: false,
      };
    },
  },
});

export const { logOut } = staffAssesmentReducer.actions;

export default staffAssesmentReducer.reducer;
