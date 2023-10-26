import { configureStore } from "@reduxjs/toolkit"
import pizzaSlice from "../features/pizza/pizzaSlice"
import cartSlice from "../features/pizza/cart/cartSlice"

const store = configureStore({
	reducer: {
		pizza: pizzaSlice,
		cart: cartSlice,
	},
})

export default store
