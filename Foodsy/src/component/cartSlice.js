import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [],
  },

  reducers: {
    addItem: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (e) => e.card.info.id === item.card.info.id
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },

    increaseQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (e) => e.card.info.id === item.card.info.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
      }
    },

    decreaseQuantity: (state, action) => {
      const item = action.payload;
      const existingItem = state.items.find(
        (e) => e.card.info.id === item.card.info.id
      );
      if (existingItem) {
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.items = state.items.filter(
            (e) => e.card.info.id !== item.card.info.id
          );
        }
      }
    },

    clearCart: (state) => {
      state.items = [];
    },
  },
});

export default cartSlice.reducer;
export const { addItem, increaseQuantity, decreaseQuantity, clearCart } =
  cartSlice.actions;
