import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name : "cart",
    initialState: {
        item: JSON.parse(localStorage.getItem("cart")) || [],
    },
    reducers:{
        addItem:(state,action) => {
            state.item.push(action.payload)
            localStorage.setItem("cart", JSON.stringify(state.item));
        },
        removeItem:(state,action) => {
           state.item.pop()
           localStorage.setItem("cart", JSON.stringify(state.item));
        },
        emptyCart:(state,action) => {
            state.item.length = 0
            localStorage.removeItem("cart")
        }
    }
})

export const {addItem,removeItem,emptyCart} = cartSlice.actions

export default cartSlice.reducer