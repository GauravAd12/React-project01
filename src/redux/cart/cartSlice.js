import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
  },
  reducers: {
    addProductToCart: (state, action) => {
      const index = state.products.findIndex(
        (product) => product.id === action.payload.id
      );

      if (index !== -1) {
        state.products[index].quantity = state.products[index].quantity + 1;
      } else {
        state.products.push({ ...action.payload, quantity: 1 });
      }
    },
    removeProductFromCart: (state, action) => {
      state.products = state.products.filter(
        (product) => action.payload != product.id
      );
    },
  },
});

export const { addProductToCart, removeProductFromCart } = cartSlice.actions;

export default cartSlice.reducer;
