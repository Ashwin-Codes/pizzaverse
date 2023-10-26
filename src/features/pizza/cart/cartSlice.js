import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {},
})

export function getCart(state) {
	return state.cart.cart
}

export default cartSlice.reducer
