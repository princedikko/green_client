import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const securityReducer = createSlice({
  name: "security_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startSecurityAction: (state, action) => {
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

export const { startSecurityAction, logOut, dispathcDashboardNavigator } =
  securityReducer.actions;

export default securityReducer.reducer;
