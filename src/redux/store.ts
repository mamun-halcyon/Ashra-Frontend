import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/redux/features/products/product-slice';
import cardReducer from '@/redux/features/cart/cartSlice';
import compareReducer from '@/redux/features/compare/compareSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    cart: cardReducer,
    compare: compareReducer,
  },
  devTools: true,
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
