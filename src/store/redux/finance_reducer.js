import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const financeReducer = createSlice({
  name: "finance_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startFinanceAction: (state, action) => {
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

export const { startFinanceAction, logOut, dispathcDashboardNavigator } =
  financeReducer.actions;

export default financeReducer.reducer;
