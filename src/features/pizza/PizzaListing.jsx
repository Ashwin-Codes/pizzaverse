import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPizza, getPizzaStatus } from "./pizzaSlice"
import { REQUEST_STATUS } from "../../config/requestStatus"
import { fetchAllPizza } from "./pizzaSlice"
import PizzaCard from "./PizzaCard"

export default function PizzaListing() {
	const initiated = useRef(false) // Dispatched state
	const pizzaStatus = useSelector(getPizzaStatus)
	const dispatch = useDispatch()

	const allPizza = useSelector(getAllPizza)
	const [pizza, setPizza] = useState(allPizza ? allPizza : [])

	useEffect(() => {
		setPizza(allPizza ? allPizza : [])
	}, [allPizza])

	useEffect(() => {
		if (pizzaStatus === REQUEST_STATUS.IDLE && !initiated.current) {
			initiated.current = true // Prevents further dispatches
			dispatch(fetchAllPizza())
		}
	}, [pizzaStatus, dispatch])

	return (
		<div className="flex flex-wrap gap-4 font-inter mb-24 xl:w-[90%] xl:mx-auto xl:gap-6">
			{pizza.map((singlePizza) => {
				return <PizzaCard key={singlePizza.id} pizza={singlePizza} />
			})}
		</div>
	)
}
