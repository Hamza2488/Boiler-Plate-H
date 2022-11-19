import { createSlice } from '@reduxjs/toolkit'
import React from 'react'


const loginSlice = createSlice({
    name:'loginReducer',

    initialState:{
        email: 'abc@gmail.com',
        password: '12345678',
        userName: 'Hamza'
    },

    reducers:{
        add(state,action){},
        edit(state,action){
            state.email = action.payload.email
            state.password = action.payload.password        
        },
        delete(state,action){}
    }
})


export const {edit} = loginSlice.actions


export default loginSlice.reducer
