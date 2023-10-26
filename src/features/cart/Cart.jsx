import { useSelector } from "react-redux"
import { getCart } from "./cartSlice"
import ProductCard from "./ProductCard"

export default function Cart() {
	const cart = useSelector(getCart)
	// Subtotal
	const cartTotal = cart
		.map((item) => {
			return item.price * item.quantity
		})
		.reduce((price, accu) => {
			return accu + price
		}, 0)

	return (
		<div className="text-olive-black w-11/12 mx-auto 2xl:w-[85%]">
			<h1 className="font-bold text-xl tracking-wider">Items Added</h1>
			<div className="flex flex-wrap justify-center gap-3 px-4 py-2 md:justify-start">
				{cart.map((item) => {
					return <ProductCard key={item.itemId} item={item} />
				})}
			</div>
			<div className="flex flex-col items-center gap-2 p-4 bg-slate-100 rounded-lg">
				<h3 className="text-2xl font-bold">{`Subtotal (${cart.length} ${
					cart.length === 1 ? "item" : "items"
				})`}</h3>
				<p className="text-xl">{"₹" + cartTotal}</p>
				<button className="w-max bg-pizza-orange text-xl text-white font-bold px-4 rounded-lg">
					Proceed to buy
				</button>
			</div>
		</div>
	)
}
