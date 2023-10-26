import { useSearchParams } from "react-router-dom"

export default function FilterButtons() {
	const [searchParams, setSearchParams] = useSearchParams()
	const filter = searchParams.get("filter")
	const sort = searchParams.get("sort")

	function toggleVegFilterParams() {
		const queries = {}
		if (filter !== "veg") {
			queries.filter = "veg"
		}

		// Preserve Sort
		if (sort) {
			queries.sort = sort
		}
		setSearchParams(queries)
	}

	function toggleNonvegFilterParams() {
		const queries = {}
		if (filter !== "nonveg") {
			queries.filter = "nonveg"
		}

		// Preserve Sort
		if (sort) {
			queries.sort = sort
		}
		setSearchParams(queries)
	}

	return (
		<div className="w-11/12 mx-auto 2xl:w-[85%] flex gap-2 py-4">
			<button
				className={`px-2 rounded-md  ${
					filter === "veg" ? "bg-pizza-orange-light text-white" : "bg-gray-100 text-olive-black"
				}`}
				onClick={toggleVegFilterParams}>
				Veg
			</button>
			<button
				className={`px-2 rounded-md  ${
					filter === "nonveg" ? "bg-pizza-orange-light text-white" : "bg-gray-100 text-olive-black"
				}`}
				onClick={toggleNonvegFilterParams}>
				Non-veg
			</button>
		</div>
	)
}
