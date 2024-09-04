import { configureStore } from "@reduxjs/toolkit" 
import productReducer from '../components/Shop/productSlice'
import loadingReducer from "../components/Loading/loadingSlice"
import cartReduucer from "../components/Cart/cartSlice"
import { setupListeners } from "@reduxjs/toolkit/query"
import { apiSlice } from "../api/apiSlice"
import authReducer from "../api/authSlice"

export const store = configureStore({
    reducer:{
        [apiSlice.reducerPath]: apiSlice.reducer,
        auth: authReducer,
        product: productReducer ,
        loading: loadingReducer,
        cart: cartReduucer
    },

    middleware:(getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),

    devTools: true
})

setupListeners(store.dispatch);