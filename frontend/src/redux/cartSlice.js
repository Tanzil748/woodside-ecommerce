import { createSlice } from "@reduxjs/toolkit";

const fakeData = [
  {
    name: "Apple",
    img: "https://images.unsplash.com/photo-1591735179859-a049994205de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 2.99,
  },
  {
    name: "Banana",
    img: "https://images.unsplash.com/photo-1587132137056-bfbf0166836e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 3.99,
  },
  {
    name: "Pomegranate",
    img: "https://images.unsplash.com/photo-1615485925600-97237c4fc1ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 6.99,
  },
  {
    name: "Orange",
    img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
    price: 4.99,
  },
];

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: fakeData,
    quantity: 1,
    total: 0,
    isLoading: true,
  },
});

export default cartSlice.reducer;
