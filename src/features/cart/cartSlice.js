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
		increaseProductQuantity(state, action) {
			for (const item of state.cart) {
				if (item.itemId === action.payload) {
					item.quantity++
					return
				}
			}
		},
		decreaseProductQuantity(state, action) {
			for (const item of state.cart) {
				if (item.itemId === action.payload) {
					if (item.quantity - 1 < 1) {
						// If item quantity is reduced to 0, remove item from cart
						const filteredItems = state.cart.filter((item) => item.itemId !== action.payload)
						state.cart = filteredItems
						return
					}
					item.quantity--
					return
				}
			}
		},
	},
})

export function getCart(state) {
	return state.cart.cart
}

export const cartActions = cartSlice.actions
export default cartSlice.reducer
