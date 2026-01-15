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
      state.warehouse.products = action.payload.products;
    },
    addtoCart: (state, action) => {
      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];
      state.warehouse.cart.push(action.payload);
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
    clearCart: (state) => {
      state.warehouse.cart = [];
    },
  },
});

export const { hybridAction, addtoCart, removeFromCart, clearCart } =
  hybridReducer.actions;

export default hybridReducer.reducer;
