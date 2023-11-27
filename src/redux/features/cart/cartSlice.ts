import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartItem {
  id: string;
  // Add other properties of your cart item
}

interface CartState {
  cart: CartItem[];
}

const initialCart = typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
const initialState: CartState = {
  cart: initialCart ? JSON.parse(initialCart) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<CartItem>) => {
      const item = action.payload;
      const isItemExist = state.cart.find((i) => i.id === item.id);
      if (isItemExist) {
        state.cart = state.cart.map((i) =>
          i.id === isItemExist.id ? item : i
        );
      } else {
        state.cart = [...state.cart, item];
      }
    },

    removeFromCart: (state, action: PayloadAction<string>) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
