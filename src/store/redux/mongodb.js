import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const mongodbReducer = createSlice({
  name: "mongodb_store",
  initialState: {
    mongoSales: [],
  },
  reducers: {
    hybridAction: (state, action) => {
      state.warehouse.products = action.payload.productsData;
    },

    apipostCashPay: (state, action) => {
      const payloads = action.payload;
      if (!state.mongoSales) state.mongoSales = [];
      state.mongoSales.unshift(payloads);
    },
    onHoldPayload: (state, action) => {
      const prospondData = action.payload;
      if (!state.mongoSales) state.mongoSales = [];
      state.mongoSales.unshift(prospondData);
    },

    // attandOnhold: (state, action) => {
    //   const { buyings } = action.payload;
    //   if (!state.warehouse) state.warehouse = { cart: [], products: [] };
    //   if (!state.warehouse.cart) state.warehouse.cart = [];
    //   state.warehouse.cart = buyings;
    // },
  },
});

export const { hybridAction, onHoldPayload, apipostCashPay } =
  mongodbReducer.actions;

export default mongodbReducer.reducer;
