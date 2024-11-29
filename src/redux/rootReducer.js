import { combineReducers } from "@reduxjs/toolkit";
import counterReducer from "./counter/counterSlice";
import authReducer from "./auth/authSlice";
import productReducer from "./product/productSlice";
import cartReducer from "./cart/cartSlice";

const rootReducer = combineReducers({
  auth: authReducer,
  counter: counterReducer,
  product: productReducer,
  cart: cartReducer,
});

export default rootReducer;
