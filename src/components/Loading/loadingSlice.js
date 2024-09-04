import { createSlice } from "@reduxjs/toolkit";

const loadingSlice = createSlice({
    name: 'loading',
    initialState: {data: true},
    reducers: {
        setLoading: (state, action) => {
            const { data } = action.payload
            state.data = data
        }
    }
})

export const { setLoading } = loadingSlice.actions

export default loadingSlice.reducer