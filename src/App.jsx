import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom"
import Layout from "./components/Layout"

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/" element={<Layout />}>
				<Route index element={<h1>Pizza</h1>}></Route>
				<Route path="cart" element={<h1>cart</h1>}></Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Route>
		)
	)
	return <RouterProvider router={router} />
}
