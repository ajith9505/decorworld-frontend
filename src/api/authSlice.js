import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode"

const user = localStorage.getItem('user')

const initialState = {
    user: user ? JSON.parse(user) : null
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setCredentials: (state, action) => {
            state.user = action.payload
            localStorage.setItem('user', JSON.stringify(action.payload))
        },

        logout: (state) => {
            state.user = null
            localStorage.clear()
        }
    }
})

export const { setCredentials, logout } = authSlice.actions
export default authSlice.reducer