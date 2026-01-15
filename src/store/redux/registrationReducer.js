import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const appFormReducer = createSlice({
  name: "appForm_store",
  initialState: {
    isAuthenticated: false,
    firstDATA: {},
    secondDATA: {},
    finalForm: {},
  },
  reducers: {
    startappFormAction: (state, action) => {
      return {
        ...state,
        firstDATA: action.payload,
        secondDATA: {},
      };
    },
    startappFormCont: (state, action) => {
      return {
        ...state,
        secondDATA: action.payload,
      };
    },
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

export const {
  startappFormAction,
  startappFormCont,
  continueAppForm,
  authenticateApplicant,
} = appFormReducer.actions;

export default appFormReducer.reducer;
