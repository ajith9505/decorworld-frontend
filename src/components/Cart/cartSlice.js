import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { data: null },
    reducers: {
        setCart: (state, action) => {
            if (state.data) {
                state.data.push(action.payload.data)
            }
            else {
                state.data = action.payload.data
            }
        }
    }
})

export const { setCart } = cartSlice.actions
export default cartSlice.reducer