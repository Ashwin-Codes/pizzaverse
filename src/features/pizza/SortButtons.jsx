import { useState } from "react"
import { useSearchParams } from "react-router-dom"

export default function SortButtons() {
	const [openOptions, setOpenOptions] = useState(false)

	const [searchParams, setSearchParams] = useSearchParams()
	const filter = searchParams.get("filter")
	const sort = searchParams.get("sort")

	function toggleSortByRating(highToLow = true) {
		const queries = {}

		if (highToLow && sort !== "rating-htl") {
			queries.sort = "rating-htl"
		}
		if (!highToLow && sort !== "rating-lth") {
			queries.sort = "rating-lth"
		}

		// Preserve Filter
		if (filter) {
			queries.filter = filter
		}
		setSearchParams(queries)
	}

	function toggleSortByPrice(highToLow = true) {
		const queries = {}

		if (highToLow && sort !== "price-htl") {
			queries.sort = "price-htl"
		}
		if (!highToLow && sort !== "price-lth") {
			queries.sort = "price-lth"
		}

		// Preserve Filter
		if (filter) {
			queries.filter = filter
		}
		setSearchParams(queries)
	}

	return (
		<div className="w-11/12 mx-auto 2xl:w-[85%] flex flex-col items-start gap-1 md:gap-3">
			<button
				className="px-2 rounded-md text-pizza-orange border border-pizza-orange tracking-wider"
				onClick={() => {
					setOpenOptions((currentOption) => !currentOption)
				}}>
				Sort by ratings and price
			</button>
			<div
				className={`flex flex-col items-start overflow-hidden transition-all gap-1 md:gap-2 md:flex-row ${
					openOptions ? "h-28 md:h-7" : "h-0"
				}`}>
				<button
					onClick={() => {
						setOpenOptions(false)
						toggleSortByPrice(true)
					}}
					className={`px-2 rounded-md  ${
						sort === "price-htl" ? "bg-pizza-orange-light text-white" : "bg-gray-100 text-olive-black"
					}`}>
					Price - High to low
				</button>
				<button
					onClick={() => {
						setOpenOptions(false)
						toggleSortByPrice(false)
					}}
					className={`px-2 rounded-md  ${
						sort === "price-lth" ? "bg-pizza-orange-light text-white" : "bg-gray-100 text-olive-black"
					}`}>
					Price - Low to high
				</button>
				<button
					onClick={() => {
						setOpenOptions(false)
						toggleSortByRating(true)
					}}
					className={`px-2 rounded-md  ${
						sort === "rating-htl" ? "bg-pizza-orange-light text-white" : "bg-gray-100 text-olive-black"
					}`}>
					Rating - High to low
				</button>
				<button
					onClick={() => {
						setOpenOptions(false)
						toggleSortByRating(false)
					}}
					className={`px-2 rounded-md  ${
						sort === "rating-lth" ? "bg-pizza-orange-light text-white" : "bg-gray-100 text-olive-black"
					}`}>
					Rating - Low to high
				</button>
			</div>
		</div>
	)
}
