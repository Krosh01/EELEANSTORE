import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/useSlice"

export const store = configureStore({
    reducer : {
        user : userReducer,
    }
});