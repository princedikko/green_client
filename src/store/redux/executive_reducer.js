import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const executiveReducer = createSlice({
  name: "executive_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startexecutiveAction: (state, action) => {
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

export const { startexecutiveAction, logOut, dispathcDashboardNavigator } =
  executiveReducer.actions;

export default executiveReducer.reducer;
