import { configureStore } from '@reduxjs/toolkit';
import productReducer from '@/redux/features/products/product-slice';

export const store = configureStore({
  reducer: {
    product: productReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
