import { configureStore } from '@reduxjs/toolkit'
import ProductSlice from './reducers/ProductSlice'

export const store = configureStore({
  reducer: {
        products:ProductSlice,
  },
});
