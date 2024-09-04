import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: 'products',
    initialState: {data: null},
    reducers: {
        setProduct: (state, action) => {          
            state.data = action.payload.data 
        }
    }
})

export const { setProduct } = productSlice.actions

export default productSlice.reducer