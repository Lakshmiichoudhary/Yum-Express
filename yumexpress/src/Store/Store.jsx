import { configureStore } from "@reduxjs/toolkit"
import AuthReducer from "./AuthSlice"

const store = configureStore({
    reducer : {
        user : AuthReducer

    }
})

export default store