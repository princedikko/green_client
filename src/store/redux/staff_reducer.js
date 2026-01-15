import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const staffReducer = createSlice({
  name: "staff_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startStaffAction: (state, action) => {
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

export const { startStaffAction, logOut, dispathcDashboardNavigator } =
  staffReducer.actions;

export default staffReducer.reducer;
