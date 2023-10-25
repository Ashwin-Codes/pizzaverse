import { configureStore } from "@reduxjs/toolkit"
import pizzaSlice from "../features/pizza/pizzaSlice"

const store = configureStore({
	reducer: {
		pizza: pizzaSlice,
	},
})

export default store
