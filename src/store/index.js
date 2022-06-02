import { configureStore } from "@reduxjs/toolkit";
import { orderSlice } from "./reducers/orders.reducer";
import {authSlice} from './reducers/auth.reducer'
import {newsSlice} from './reducers/reciept.reducer'

export const store = configureStore({
    reducer:{
        recipets: newsSlice.reducer,
        orders: orderSlice.reducer,
        auth: authSlice.reducer
    }
})