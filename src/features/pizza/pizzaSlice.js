import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import apiRoutes from "../../config/apiRoutes"
import { REQUEST_STATUS } from "../../config/requestStatus"

export const fetchAllPizza = createAsyncThunk("pizza/fetchAllPizza", async () => {
	const res = await fetch(apiRoutes.getAllPizza)
	return await res.json()
})

const initialState = {
	status: REQUEST_STATUS.IDLE,
	data: null,
}

const pizzaSlice = createSlice({
	name: "pizza",
	initialState: initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(fetchAllPizza.fulfilled, (state, action) => {
				state.status = REQUEST_STATUS.FULFILLED
				state.data = action.payload
			})
			.addCase(fetchAllPizza.pending, (state) => {
				state.status = REQUEST_STATUS.PENDING
			})
			.addCase(fetchAllPizza.rejected, (state) => {
				state.status = REQUEST_STATUS.REJECTED
			})
	},
})

export function getPizzaStatus(state) {
	return state.pizza.status
}

export function getAllPizza(state) {
	return state.pizza.data
}

export default pizzaSlice.reducer
