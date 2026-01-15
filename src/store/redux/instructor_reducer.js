import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const InstructorReducer = createSlice({
  name: "instructor_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startInstructorAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
        isAuthenticated: true,
      };
    },
    dispathcDashboardNavigator: (state, action) => {
      const { item } = action.payload;
      return {
        ...state,
        dashboard: {
          nav_trace: item,
        },
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

export const { startInstructorAction, logOut, dispathcDashboardNavigator } =
  InstructorReducer.actions;

export default InstructorReducer.reducer;
