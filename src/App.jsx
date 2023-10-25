import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Navigate } from "react-router-dom"

export default function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route path="/">
				<Route index element={<h1>Pizza</h1>}></Route>
				<Route path="cart" element={<h1>cart</h1>}></Route>
				<Route path="*" element={<Navigate to="/" />}></Route>
			</Route>
		)
	)
	return <RouterProvider router={router} />
}
