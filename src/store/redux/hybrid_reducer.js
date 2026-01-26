import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const hybridReducer = createSlice({
  name: "hybrid_store",
  initialState: {
    isAuthenticated: false,
    warehouse: {
      cart: [],
      products: [],
    },
  },
  reducers: {
    hybridAction: (state, action) => {
      state.warehouse.products = action.payload.productsData;
    },
    addtoCart: (state, action) => {
      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];
      state.warehouse.cart.unshift(action.payload);
    },
    updateQuantity: (state, action) => {
      const { index, qty } = action.payload;

      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];

      if (state.warehouse.cart[index]) {
        state.warehouse.cart[index].quantity = qty;
      }
    },
    insertQuantity: (state, action) => {
      const { index, qty } = action.payload;

      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];

      if (state.warehouse.cart[index]) {
        state.warehouse.cart[index].quantity = qty;
      }
    },

    removeFromCart: (state, action) => {
      const index = action.payload;

      if (
        state.warehouse &&
        Array.isArray(state.warehouse.cart) &&
        index >= 0
      ) {
        state.warehouse.cart.splice(index, 1);
      }
    },
    clearCartAction: (state) => {
      state.warehouse.cart = [];
    },
    clearProductsAction: (state) => {
      state.warehouse.products = [];
    },
  },
});

export const {
  hybridAction,
  addtoCart,
  updateQuantity,
  removeFromCart,
  clearCartAction,
  clearProductsAction,
  insertQuantity,
} = hybridReducer.actions;

export default hybridReducer.reducer;
