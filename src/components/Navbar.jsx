import { NavLink } from "react-router-dom"
import { PiPizza as PizzaIcon } from "react-icons/pi"

export default function Navbar() {
	const activeNavlinkStyle = (isActive) =>
		isActive ? "bg-pizza-orange text-white px-2 py-1 rounded-md" : "px-2 py-1 rounded-md"

	return (
		<header className="w-screen py-4">
			<nav className="w-11/12 flex justify-between items-center mx-auto 2xl:w-[85%]">
				<span className="font-logo text-2xl text-pizza-orange flex xl:text-3xl">
					<PizzaIcon />
					PizzaVerse
				</span>
				<ul className="flex gap-2 text-olive-black font-inter font-semibold 2xl:text-lg 2xl:gap-4">
					<li>
						<NavLink to="/" className={({ isActive }) => activeNavlinkStyle(isActive)}>
							Pizza
						</NavLink>
					</li>
					<li>
						<NavLink to="/cart" className={({ isActive }) => activeNavlinkStyle(isActive)}>
							Cart
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	)
}
