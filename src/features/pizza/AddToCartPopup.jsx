import Ratings from "./Ratings"

export default function AddToCartPopup({ closePopup, pizza }) {
	return (
		<div
			onClick={closePopup}
			className="fixed bg-[rgba(0,0,0,0.5)] top-0 left-0 w-full h-full flex justify-center items-center z-10">
			<div
				className=" bg-white p-4 z-10 w-80 rounded-md"
				onClick={(e) => {
					e.stopPropagation()
				}}>
				<div className="w-full overflow-hidden rounded-lg relative">
					<img className="w-full" src={pizza.img_url} alt={`${pizza.name} image`} />
					<span className="absolute bottom-0 left-2/4 -translate-x-1/2">
						<p className="bg-white px-3 rounded-t-lg text-pizza-orange font-semibold">₹{pizza.price}</p>
					</span>
				</div>
				<h1 className="font-bold text-olive-black">{pizza.name}</h1>
				<span className="flex justify-between items-center">
					<Ratings rating={pizza.rating} />
					<p className={pizza.isVeg ? "text-green-700" : "text-red-700"}>{pizza.isVeg ? "veg" : "non-veg"}</p>
				</span>
				<p className="text-olive-black">{pizza.description}</p>
			</div>
		</div>
	)
}
