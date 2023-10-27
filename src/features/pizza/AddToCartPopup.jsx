import { useState } from "react"
import SingleSelect from "../../components/SingleSelect"
import Ratings from "./Ratings"
import MultiSelect from "../../components/MultiSelect"
import { MdClose as CloseButtonIcon } from "react-icons/md"
import { useDispatch } from "react-redux"
import { cartActions } from "../cart/cartSlice"
import { v4 as uuid } from "uuid"

export default function AddToCartPopup({ closePopup, pizza }) {
	const dispatch = useDispatch()
	const [addedToCart, setAddedToCart] = useState(false)

	const [pickedSizes, setPickedSizes] = useState([]) //  User can pick single or multiple sizes as per API
	const sizeOptions = pizza.size[0].items.map((option) => option.size) // All avaiable pizza sizes
	const sizeHeading = pizza.size[0].title // API provided title

	const [pickedToppings, setPickedToppings] = useState([]) //  User can pick single or multiple toppings as per API
	const toppingsOptions = pizza.toppings[0].items.map((option) => option.name) // All avaiable pizza topings
	const toppingsHeading = pizza.toppings[0].title // API provided title

	function onSizeSelect(options) {
		setPickedSizes(options)
	}

	function onTopingsSelect(options) {
		setPickedToppings(options)
	}

	// Prevents body to scroll when modal is visible
	document.body.style.overflow = "hidden"

	function handlePopupClose() {
		closePopup()

		// Enable scroll in body
		document.body.style.overflow = "auto"

		// Disable scroll-x
		document.body.style.overflowX = "hidden"
	}

	function addProductToCartHandler() {
		if (addedToCart) return // Stop more than one product addition to cart
		const order = { ...pizza, size: [], toppings: [], quantity: 1, itemId: uuid() }

		// Add sizes
		// Add array of sizes
		if (typeof pickedSizes === "object" && pickedSizes.length) {
			pickedSizes.forEach((size) => {
				order.size.push({ size: size })
			})
		}
		// Add single size
		if (typeof pickedSizes === "string") {
			order.size.push({ size: pickedSizes })
		}

		// Add toppings
		// Add array of topings
		if (typeof pickedToppings === "object" && pickedToppings.length) {
			pickedToppings.forEach((topping) => {
				order.toppings.push({ topping: topping })
			})
		}

		// Add single topping
		if (typeof pickedToppings === "string") {
			order.toppings.push({ topping: pickedToppings })
		}

		dispatch(cartActions.addProduct(order))

		// Change button text to 'added' state
		setAddedToCart(true)
	}

	return (
		<div
			onClick={handlePopupClose}
			className="fixed bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-full flex justify-center items-center z-10">
			<div
				className="bg-white p-4 w-80 max-h-screen rounded-md flex flex-col gap-3 relative overflow-auto md:w-96 lg:w-[30rem]"
				onClick={(e) => {
					e.stopPropagation()
				}}>
				<div className="w-full h-max min-h-[12rem] overflow-hidden rounded-lg relative">
					<img className="w-full object-fill" src={pizza.img_url} alt={`${pizza.name} image`} />
					<span className="absolute bottom-0 left-2/4 -translate-x-1/2">
						<p className="bg-white px-3 rounded-t-lg text-pizza-orange font-semibold">₹{pizza.price}</p>
					</span>
				</div>

				<CloseButtonIcon
					onClick={handlePopupClose}
					className="absolute top-0 right-0 text-3xl bg-white rounded-md cursor-pointer text-red-500"
				/>

				<h1 className="font-bold text-olive-black text-xl">{pizza.name}</h1>

				<span className="flex justify-between items-center">
					<Ratings rating={pizza.rating} />
					<p className={pizza.isVeg ? "text-green-700" : "text-red-700"}>{pizza.isVeg ? "veg" : "non-veg"}</p>
				</span>

				<p className="text-olive-black">{pizza.description}</p>
				{pizza.size[0].isRadio ? (
					<SingleSelect options={sizeOptions} heading={sizeHeading} onSelect={onSizeSelect} />
				) : (
					<MultiSelect options={sizeOptions} heading={sizeHeading} onSelect={onSizeSelect} />
				)}
				{pizza.toppings[0].isRadio ? (
					<SingleSelect options={toppingsOptions} heading={toppingsHeading} onSelect={onTopingsSelect} />
				) : (
					<MultiSelect options={toppingsOptions} heading={toppingsHeading} onSelect={onTopingsSelect} />
				)}

				<button
					onClick={addProductToCartHandler}
					className="bg-pizza-orange text-white px-2 py-2 font-bold rounded-lg disabled:bg-gray-400"
					disabled={pickedSizes.length < 1 || pickedToppings.length < 1}>
					{addedToCart ? "Added to cart" : "Add to cart"}
				</button>
			</div>
		</div>
	)
}
