import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const parentReducer = createSlice({
  name: "parent_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startParentAction: (state, action) => {
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

export const { startParentAction, logOut, dispathcDashboardNavigator } =
  parentReducer.actions;

export default parentReducer.reducer;
