import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
// import { cartReducer } from './cart/cart.slice'
import { catalogItemApi } from "./catalogItems/catalogItem.api";

export const store = configureStore({
  reducer: { [catalogItemApi.reducerPath]: catalogItemApi.reducer },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(catalogItemApi.middleware),
});

export type TypeRootState = ReturnType<typeof store.getState>;
