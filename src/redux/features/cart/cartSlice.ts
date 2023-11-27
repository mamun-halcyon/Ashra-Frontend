import { ICartItem } from '@/types/cart';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface CartState {
  cart: ICartItem[];
}

const initialCart =
  typeof window !== 'undefined' ? localStorage.getItem('cartItems') : null;
const initialState: CartState = {
  cart: initialCart ? JSON.parse(initialCart) : [],
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    // Add to cart
    addToCart: (state, action: PayloadAction<ICartItem>) => {
      const newItem = action.payload;
      const existingItem = state.cart.find((item) => item.id === newItem.id);

      if (existingItem) {
        existingItem.qnty += newItem.qnty ?? 1;
      } else {
        state.cart = [...state.cart, newItem];
      }
      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },

    // Increment
    incrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const itemToIncrement = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemToIncrement && itemToIncrement.qnty < 5) {
        itemToIncrement.qnty += 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cart));
      }
    },

    decrementQuantity: (state, action: PayloadAction<ICartItem>) => {
      const itemToDecrement = state.cart.find(
        (item) => item.id === action.payload.id
      );

      if (itemToDecrement && itemToDecrement.qnty > 1) {
        itemToDecrement.qnty -= 1;
        localStorage.setItem('cartItems', JSON.stringify(state.cart));
      }
    },

    removeFromCart: (state, action: PayloadAction<ICartItem>) => {
      state.cart = state.cart.filter((i) => i.id !== action.payload.id);
      localStorage.setItem('cartItems', JSON.stringify(state.cart));
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;
export default cartSlice.reducer;
