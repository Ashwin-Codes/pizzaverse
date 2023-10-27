import { useEffect, useRef, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getAllPizza, getPizzaStatus } from "./pizzaSlice"
import { REQUEST_STATUS } from "../../config/requestStatus"
import { fetchAllPizza } from "./pizzaSlice"
import PizzaCard from "./PizzaCard"
import FilterButtons from "./FilterButtons"
import { useSearchParams } from "react-router-dom"
import SortButtons from "./SortButtons"
import AddToCartPopup from "./AddToCartPopup"
import Loader from "../../components/Loader"
import Error from "../../components/Error"

export default function PizzaListing() {
	const initiated = useRef(false) // Dispatched state
	const pizzaStatus = useSelector(getPizzaStatus) // Network request status
	const dispatch = useDispatch()
	const [searchParams] = useSearchParams()

	const allPizza = useSelector(getAllPizza)
	const [pizza, setPizza] = useState(allPizza ? allPizza : [])

	// Popup state
	const [openPopup, setOpenPopup] = useState(false)
	const [popupPizza, setPopupPizza] = useState(null)

	function addToCartHandler(pizza) {
		setPopupPizza(pizza)
		setOpenPopup(true)
	}

	function closePopupHandler() {
		setOpenPopup(false)
	}

	useEffect(() => {
		const filter = searchParams.get("filter")
		const sort = searchParams.get("sort")
		let filteredAndSortedPizza = allPizza ? [...allPizza] : []

		// Filter
		if (filter) {
			if (filter === "veg") {
				filteredAndSortedPizza = filteredAndSortedPizza.filter((singlePizza) => {
					return singlePizza.isVeg
				})
			}
			if (filter === "nonveg") {
				filteredAndSortedPizza = filteredAndSortedPizza.filter((singlePizza) => {
					return !singlePizza.isVeg
				})
			}
		}

		// Sort
		if (sort) {
			// Sort by price - high to low
			if (sort === "price-htl") {
				filteredAndSortedPizza = filteredAndSortedPizza.sort((pizza1, pizza2) => {
					return pizza2.price - pizza1.price
				})
			}

			// Sort by price - low to high
			if (sort === "price-lth") {
				filteredAndSortedPizza = filteredAndSortedPizza.sort((pizza1, pizza2) => {
					return pizza1.price - pizza2.price
				})
			}

			// Sort by rating - high to low
			if (sort === "rating-htl") {
				filteredAndSortedPizza = filteredAndSortedPizza.sort((pizza1, pizza2) => {
					return pizza2.rating - pizza1.rating
				})
			}

			// Sort by rating - low to high
			if (sort === "rating-lth") {
				filteredAndSortedPizza = filteredAndSortedPizza.sort((pizza1, pizza2) => {
					return pizza1.rating - pizza2.rating
				})
			}
		}

		setPizza(filteredAndSortedPizza)
	}, [allPizza, searchParams])

	useEffect(() => {
		if (pizzaStatus === REQUEST_STATUS.IDLE && !initiated.current) {
			initiated.current = true // Prevents further dispatches
			dispatch(fetchAllPizza())
		}
	}, [pizzaStatus, dispatch])

	// Handles loading state
	if (pizzaStatus === REQUEST_STATUS.PENDING) {
		return (
			<div className="flex justify-center items-center h-40">
				<Loader />
			</div>
		)
	}

	// Handles error state
	if (pizzaStatus === REQUEST_STATUS.REJECTED) {
		return (
			<div className="flex justify-center items-center h-40">
				<Error />
			</div>
		)
	}

	return (
		<>
			{popupPizza && openPopup && (
				<AddToCartPopup openPopup={openPopup} closePopup={closePopupHandler} pizza={popupPizza} />
			)}
			<SortButtons />
			<FilterButtons />
			<div className="flex flex-wrap gap-4 font-inter pb-40 xl:w-[90%] xl:mx-auto xl:gap-6">
				{pizza.map((singlePizza) => {
					return <PizzaCard key={singlePizza.id} pizza={singlePizza} onAddToCart={addToCartHandler} />
				})}
			</div>
		</>
	)
}
