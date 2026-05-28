import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const appFormReducer = createSlice({
  name: "appForm_store",
  initialState: {
    isAuthenticated: false,
    finalForm: {},
  },
  reducers: {
    authenticateApplicant: (state, action) => {
      return {
        ...state,
        isAuthenticated: true,
      };
    },
    continueAppForm: (state, action) => {
      return {
        ...state,
        finalForm: action.payload,
      };
    },
  },
});

export const { continueAppForm, authenticateApplicant } =
  appFormReducer.actions;

export default appFormReducer.reducer;
