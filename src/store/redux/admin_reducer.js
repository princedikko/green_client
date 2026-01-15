import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const adminReducer = createSlice({
  name: "admin_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startAdminAction: (state, action) => {
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
        dashboard: {
          nav_trace: "",
        },
      };
    },
  },
});

export const { startAdminAction, logOut, dispathcDashboardNavigator } =
  adminReducer.actions;

export default adminReducer.reducer;
