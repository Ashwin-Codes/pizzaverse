import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

export default function Layout() {
	return (
		<div className="relative min-h-screen">
			<Navbar />
			<Outlet />
			<Footer />
		</div>
	)
}
