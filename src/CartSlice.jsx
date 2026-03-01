// src/CartSlice.jsx
import { createSlice } from '@reduxjs/toolkit';

// Initial cart state
const initialState = {
  items: [], // each item: { name, image, cost, quantity }
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // addItem(): adds a new plant or increments quantity if it already exists
    addItem: (state, action) => {
      const { name, image, cost } = action.payload;
      const existingItem = state.items.find((item) => item.name === name);

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ name, image, cost, quantity: 1 });
      }
    },

    // removeItem(): removes an item based on its name
    removeItem: (state, action) => {
      state.items = state.items.filter(
        (item) => item.name !== action.payload
      );
    },

    // updateQuantity(): sets a new quantity for a given item
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      const itemToUpdate = state.items.find((item) => item.name === name);

      if (itemToUpdate) {
        itemToUpdate.quantity = quantity;
      }
    },
  },
});

// Action creators to use in components
export const { addItem, removeItem, updateQuantity } = cartSlice.actions;

// Reducer for store.js
export default cartSlice.reducer;
