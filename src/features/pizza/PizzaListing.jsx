import { useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getPizzaStatus } from "./pizzaSlice"
import { REQUEST_STATUS } from "../../config/requestStatus"
import { fetchAllPizza } from "./pizzaSlice"

export default function PizzaListing() {
	const initiated = useRef(false) // Dispatched state
	const pizzaStatus = useSelector(getPizzaStatus)
	const dispatch = useDispatch()

	useEffect(() => {
		if (pizzaStatus === REQUEST_STATUS.IDLE && !initiated.current) {
			initiated.current = true // Prevents further dispatches
			dispatch(fetchAllPizza())
		}
	}, [pizzaStatus, dispatch])

	return <div>PizzaListing</div>
}
