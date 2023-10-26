import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom"
import Layout from "./components/Layout"
import PizzaListing from "./features/pizza/PizzaListing"
import Cart from "./features/cart/Cart"

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<PizzaListing />}></Route>
				<Route path="cart" element={<Cart />}></Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Route>
		)
	)
	return <RouterProvider router={router} />
}
