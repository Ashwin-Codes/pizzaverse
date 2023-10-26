import Ratings from "../pizza/Ratings"
import { IoRemoveSharp as RemoveIcon } from "react-icons/io5"
import { IoAddSharp as AddIcon } from "react-icons/io5"

export default function ProductCard({ item }) {
	return (
		<div className="flex flex-col flex-grow gap-5 items-center rounded-md p-4 shadow-xl bg-gray-50 border-2 border-gray-100 sm:max-w-xs ">
			<div className="w-full h-28 overflow-hidden shrink-0 shadow-2xl rounded-md">
				<img className="w-full h-full object-cover" src={item.img_url} alt={`${item.name} image`} />
			</div>
			<div className="flex flex-col gap-2 text-olive-black">
				<p className="font-bold">{item.name}</p>
				<Ratings rating={item.rating} />
				<p className="tracking-wider">{item.description}</p>
				<span className="flex gap-4">
					<p className="text-green-800">₹{item.price}</p>
				</span>
				<div className="flex gap-2 bg-pizza-orange text-white w-max px-4 rounded-lg text-lg mx-auto">
					<button className="cursor-pointer">
						<RemoveIcon />
					</button>
					<span>{item.quantity}</span>
					<button className="cursor-pointer">
						<AddIcon />
					</button>
				</div>
				<div className="flex justify-between bg-slate-100 border border-slate-200 p-4 rounded-lg shadow-lg">
					<span>
						<h2 className="font-semibold">Ordered Size</h2>
						{item.size.map((size) => {
							return (
								<p
									className="border bg-gray-100 px-2 w-max rounded-md text-pizza-orange"
									key={size.size}>
									{size.size}
								</p>
							)
						})}
					</span>
					<span className="flex flex-col gap-2">
						<h2 className="font-semibold">Toppings</h2>
						{item.toppings.map((topping) => {
							return (
								<p
									className="border bg-gray-100 px-2 w-max rounded-md text-pizza-orange"
									key={topping.topping}>
									{topping.topping}
								</p>
							)
						})}
					</span>
				</div>
			</div>
		</div>
	)
}
