import Ratings from "./Ratings"

export default function PizzaCard({ pizza, onAddToCart }) {
	return (
		<div className="flex gap-5 items-center rounded-md p-4 w-full mx-6 shadow-xl bg-gray-50 border-2 border-gray-100 sm:mx-14 lg:w-[23rem] lg:flex-grow lg:mx-16 xl:max-w-[31.5rem] lg:hover:scale-105 lg:transition-all">
			<div className="w-28 h-28 rounded-full overflow-hidden shrink-0 -ml-10 shadow-2xl sm:-ml-16">
				<img className="w-full h-full object-cover" src={pizza.img_url} alt={`${pizza.name} image`} />
			</div>
			<div className="flex flex-col gap-2 text-olive-black">
				<p className="font-bold">{pizza.name}</p>
				<Ratings rating={pizza.rating} />
				<p className="tracking-wider">{pizza.description}</p>
				<span className="flex gap-4">
					<p className="text-green-800">₹{pizza.price}</p>
					<button
						className="bg-pizza-orange text-white px-2 rounded-md text-sm font-semibold"
						onClick={() => {
							onAddToCart(pizza)
						}}>
						+ Add to Cart
					</button>
				</span>
			</div>
		</div>
	)
}
