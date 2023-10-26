import { AiOutlineInstagram as InstagramIcon } from "react-icons/ai"
import { FaXTwitter as TwitterIcon } from "react-icons/fa6"
import { CiFacebook as FacebookIcon } from "react-icons/ci"

export default function Footer() {
	const currentYear = new Date().getFullYear()
	return (
		<footer className="bg-black text-white py-4 px-2 flex flex-col items-center gap-4 absolute w-full bottom-0">
			<h1 className="md:text-xl xl:text-2xl">Follow Us On</h1>
			<div className="flex gap-2 text-3xl">
				<InstagramIcon className="cursor-pointer" />
				<TwitterIcon className="cursor-pointer" />
				<FacebookIcon className="cursor-pointer" />
			</div>
			<h2>
				{`© ${currentYear}`} <span className="text-pizza-orange">PizzaVerse</span> All Rights Reserved
			</h2>
		</footer>
	)
}
