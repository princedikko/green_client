import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const agentReducer = createSlice({
  name: "agent_store",
  initialState: {
    isAuthenticated: false,
    queue: {},
    dashboard: {
      nav_trace: "",
    },
  },
  reducers: {
    startAgentAction: (state, action) => {
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

export const { startAgentAction, logOut, dispathcDashboardNavigator } =
  agentReducer.actions;

export default agentReducer.reducer;
