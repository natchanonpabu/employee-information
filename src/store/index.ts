import { configureStore } from "@reduxjs/toolkit";
import authenticatedReducer from "@/reducers/authenticated";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

export const makeStore = (preloadedState?: unknown) =>
  configureStore({
    reducer: {
      ...authenticatedReducer,
    },
    preloadedState,
  });

export const store = makeStore();

export type AppStore = typeof store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
