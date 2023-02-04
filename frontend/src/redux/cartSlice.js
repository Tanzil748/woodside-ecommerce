import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    amount: 3,
    totalPrice: 0,
    status: null,
  },
  // this handles the action creators and their states
  reducers: {
    add: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount += 1;
    },
    subtract: (state, action) => {
      const cartItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      cartItem.amount -= 1;
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    calcTotals: (state) => {
      let amount = 0;
      let totalPrice = 0;
      state.cartItems.forEach((item) => {
        amount = amount + item.amount;
        totalPrice = totalPrice + item.amount * item.price;
      });
      state.amount = amount;
      state.totalPrice = totalPrice;
    },
  },
});

export const { add, subtract, removeItem, calcTotals } = cartSlice.actions;
export default cartSlice.reducer;
