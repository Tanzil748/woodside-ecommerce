import { createSlice } from "@reduxjs/toolkit";

const fakeData = [
  {
    name: "Apple",
    img: "https://images.unsplash.com/photo-1591735179859-a049994205de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.99,
    amount: 1,
    id: 1,
  },
  {
    name: "Banana",
    img: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
    amount: 1,
    id: 2,
  },
  {
    name: "Pomegranate",
    img: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 6.99,
    amount: 1,
    id: 3,
  },
  {
    name: "Orange",
    img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 4.99,
    amount: 1,
    id: 4,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: fakeData,
    amount: 3,
    totalPrice: 0,
    isLoading: true,
  },
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
