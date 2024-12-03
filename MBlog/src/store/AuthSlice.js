import { createSlice } from "@reduxjs/toolkit"; 
import { useState } from "react";

const state = localStorage.setItem('status', JSON.stringify(false))


const initialState = {
    status : localStorage.getItem(state),
    userData : {}
}


const AuthSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        login: (state, action) => {
            state.status = localStorage.setItem('status', JSON.stringify(true));
            state.userData = action.payload.userData;
        },
        logout: (state) => {
            state.status = false;
            state.userData = {email:""};
        }
     }
})

export const {login, logout} = AuthSlice.actions;

export default AuthSlice.reducer;