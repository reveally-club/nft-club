import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import searchReducer from "./search";

const store = configureStore({
    devTools: process.env.NODE_ENV !== "production",
    reducer: {
        search: searchReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: true }).concat([logger]),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;