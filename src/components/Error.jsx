import { TbFaceIdError as ErrorIcon } from "react-icons/tb"

export default function Error() {
	function reloadPageHandler() {
		location.reload()
	}
	return (
		<div className="flex flex-col items-center">
			<ErrorIcon className="text-6xl text-pizza-orange" />
			<h1 className="text-red-700 font-semibold md:text-xl lg:2xl">Something went wrong. Please try again.</h1>
			<button
				className="px-2 rounded-md bg-pizza-orange text-lg font-semibold text-white mt-4"
				onClick={reloadPageHandler}>
				Reload Page
			</button>
		</div>
	)
}
