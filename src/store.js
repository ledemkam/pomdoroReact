import { configureStore } from "@reduxjs/toolkit";
import chrono from "./future/chrono";

export const store = configureStore({
    reducer:{
        chrono
    }
})