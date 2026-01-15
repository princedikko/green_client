import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const counselorReducer = createSlice({
  name: "counselor_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startCounselorAction: (state, action) => {
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

export const { startCounselorAction, logOut, dispathcDashboardNavigator } =
  counselorReducer.actions;

export default counselorReducer.reducer;
