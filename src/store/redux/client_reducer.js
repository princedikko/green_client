import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const clientReducer = createSlice({
  name: "client_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_title: "Dashboard",
      nav_trace: "dashboard",
      subNavBar_title: "",
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
      // state.dashboard.nav_title = action.payload.title;
      console.log("payload", action.payload);
      if (action.payload?.children) {
        state.dashboard.nav_trace = action.payload.active;
      } else {
        state.dashboard.nav_trace = action.payload.active;
        state.dashboard.subNavBar_title = action.payload.title;
        state.dashboard.subNavBar_trace = action.payload.active;
        state.dashboard.currentTab = action.payload.active;
        state.dashboard.nav_title = action.payload.title;
      }
    },

    dispatchDashboardSubNavigator: (state, action) => {
      state.dashboard.subNavBar_title = action.payload.title;
      state.dashboard.subNavBar_trace = action.payload.hook;
      state.dashboard.currentTab = action.payload.hook;
      state.dashboard.nav_title = action.payload.main;
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
