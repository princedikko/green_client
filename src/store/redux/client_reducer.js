import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const clientReducer = createSlice({
  name: "client_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "dashboard",
      subNavBar_trace: "",
      toggleNavDropdown: "",
      currentTab: "",
    },
    printData: {},
  },
  reducers: {
    startclientAction: (state, action) => {
      return {
        ...state,
        queue: action.payload,
        isAuthenticated: true,
      };
    },
    dispathcDashboardNavigator: (state, action) => {
      state.dashboard.nav_trace = action.payload.item;
    },

    dispatchDashboardSubNavigator: (state, action) => {
      state.dashboard.subNavBar_trace = action.payload.item;
      state.dashboard.currentTab = action.payload.item;
    },
    dispatchCurrentTAB: (state, action) => {
      state.dashboard.currentTab = action.payload.item;
    },

    dispatchClientOpenIndex: (state, action) => {
      state.dashboard.toggleNavDropdown = action.payload.index;
    },
    dispatchPrintData: (state, action) => {
      state.printData = action.payload.data;
    },
    logOut: (state, action) => {
      return {
        ...state,
        queue: [],
        dashboard: {},
        isAuthenticated: false,
        printData: {},
      };
    },
  },
});

export const {
  startclientAction,
  logOut,
  dispathcDashboardNavigator,
  dispatchDashboardSubNavigator,
  dispatchClientOpenIndex,
  dispatchCurrentTAB,
  dispatchPrintData,
} = clientReducer.actions;

export default clientReducer.reducer;
