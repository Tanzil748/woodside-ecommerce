import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItems: [],
    quantity: 0,
    total: 0,
    isLoading: true,
  },
});

// console.log(cartSlice);

export default cartSlice.reducer;