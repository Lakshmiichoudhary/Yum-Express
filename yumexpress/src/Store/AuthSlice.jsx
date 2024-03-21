import { createSlice } from "@reduxjs/toolkit";

const AuthSlice = createSlice({
    name : "user",
    initialState : null,
    reducers : {
        adduser:(state,action) => {
            return action.payload
        },
        removeUser:() => {
            return null
        }
    }
}) 

export const { adduser,removeUser } = AuthSlice.actions 

export default AuthSlice.reducer