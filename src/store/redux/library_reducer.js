import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const libraryReducer = createSlice({
  name: "library_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startLibraryAction: (state, action) => {
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

export const { startLibraryAction, logOut, dispathcDashboardNavigator } =
  libraryReducer.actions;

export default libraryReducer.reducer;
