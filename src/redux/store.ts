import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/redux/features/products/product-slice';
import cardReducer from '@/redux/features/cart/cartSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cardReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
