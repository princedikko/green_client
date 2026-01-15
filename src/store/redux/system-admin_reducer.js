import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const systemAdminReducer = createSlice({
  name: "systemAdmin_store",
  initialState: {
    isAuthenticated: true,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startSystemAdminAction: (state, action) => {
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

export const { startSystemAdminAction, logOut, dispathcDashboardNavigator } =
  systemAdminReducer.actions;

export default systemAdminReducer.reducer;
