import { FaStar as FullStarIcon } from "react-icons/fa"
import { FaStarHalf as HalfStarIcon } from "react-icons/fa"

export default function Ratings({ rating }) {
	const stars = []

	// Add a full start for every rating
	let i = 1
	while (i <= rating) {
		stars.push(<FullStarIcon key={i} />)
		i++
	}

	// Add a half star if found 0.5
	if (rating < i && rating > i - 1) {
		stars.push(<HalfStarIcon key={i} />)
	}

	// Handle if rating is 0
	if (stars.length < 1) {
		return (
			<div className="flex gap-1 text-pizza-orange">
				<p>No Ratings</p>
			</div>
		)
	}

	return <div className="flex gap-1 text-pizza-orange">{stars}</div>
}
