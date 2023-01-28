import { configureStore } from "@reduxjs/toolkit";
import { wishSlice } from "./slice/wishSlice";

export const store = configureStore({
    reducer:{
        addToWish: wishSlice.reducer
    }
})