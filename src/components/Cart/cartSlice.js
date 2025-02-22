import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: { data: [] },
    reducers: {
        addToCart: (state, action) => {
            if (state.data) {
                const existingItem = state.data.find(item => item.id === action.payload.data.id);
                
                if (!existingItem) {
                    state.data.push(action.payload.data);
                }
                else {
                    if (existingItem.qty < 5) existingItem.qty++
                }
            }
            else {
                state.data = [action.payload.data]
            }
        },
        removeFromCart: (state, action) => {
            state.data = state.data.filter(ele => action.payload.id !== ele.id);
        },
        emptyCart: (state, action) => {
            state.data = [];
        }
    }
})

export const { addToCart, removeFromCart, emptyCart } = cartSlice.actions
export default cartSlice.reducer