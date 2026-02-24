import { createSlice } from "@reduxjs/toolkit";

// createing reducer with intial value
export const hybridReducer = createSlice({
  name: "hybrid_store",
  initialState: {
    isAuthenticated: false,
    switchWarehouseView: false,
    on_holded_sales: [],
    warehouse: {
      cart: [],
      products: [],
      customers: [],
      brands: [],
    },
  },
  reducers: {
    hybridAction: (state, action) => {
      state.warehouse.products = action.payload.productsData;
    },
    switchView: (state, action) => {
      state.switchWarehouseView = action.payload;
    },
    addtoCart: (state, action) => {
      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];
      state.warehouse.cart.unshift(action.payload);
    },
    onHoldPayload: (state, action) => {
      const prospondData = action.payload;
      if (!state.on_holded_sales) state.on_holded_sales = [];
      state.on_holded_sales.unshift(prospondData);
    },
    updateSwitchPackage: (state, action) => {
      const { index, pkg } = action.payload;

      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];

      if (state.warehouse.cart[index]) {
        state.warehouse.cart[index].packaging = pkg;
      }
    },
    updateQuantity: (state, action) => {
      const { index, qty } = action.payload;

      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];

      if (state.warehouse.cart) {
        state.warehouse.cart[index].sellingQuantity = qty;
      }
    },
    insertQuantity: (state, action) => {
      const { index, qty } = action.payload;

      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];

      if (state.warehouse.cart) {
        state.warehouse.cart[index].sellingQuantity = qty;
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
    deleteOnholdDispatch: (state, action) => {
      const index = action.payload;

      if (
        state.on_holded_sales &&
        Array.isArray(state.on_holded_sales) &&
        index >= 0
      ) {
        state.on_holded_sales.splice(index, 1);
      }
    },
    clearCartAction: (state) => {
      state.warehouse.cart = [];
    },
    clearProductsAction: (state) => {
      state.warehouse.products = [];
    },
    attandOnhold: (state, action) => {
      const { buyings } = action.payload;
      if (!state.warehouse) state.warehouse = { cart: [], products: [] };
      if (!state.warehouse.cart) state.warehouse.cart = [];
      state.warehouse.cart = buyings;
    },
  },
});

export const {
  hybridAction,
  switchView,
  addtoCart,
  updateSwitchPackage,
  updateQuantity,
  removeFromCart,
  clearCartAction,
  clearProductsAction,
  insertQuantity,
  onHoldPayload,
  attandOnhold,
  deleteOnholdDispatch,
} = hybridReducer.actions;

export default hybridReducer.reducer;
