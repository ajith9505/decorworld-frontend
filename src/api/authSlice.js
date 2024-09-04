import { createSlice } from "@reduxjs/toolkit";
import { jwtDecode } from "jwt-decode"

const token = localStorage.getItem('user')

console.log(token);


const initialState = {
    user: token ? jwtDecode(token).user : null
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