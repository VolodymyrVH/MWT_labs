import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";

export const confStore = configureStore({
    reducer: {
        counter: counterSlice,
    }
})