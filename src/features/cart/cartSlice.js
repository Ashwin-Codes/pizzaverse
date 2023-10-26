import { createSlice } from "@reduxjs/toolkit"

const initialState = {
	cart: [],
}

const cartSlice = createSlice({
	name: "cart",
	initialState: initialState,
	reducers: {
		addProduct(state, action) {
			state.cart.push(action.payload)
		},
	},
})

export function getCart(state) {
	return state.cart.cart
}

export const cartActions = cartSlice.actions
export default cartSlice.reducer
