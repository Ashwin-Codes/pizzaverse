import { useEffect, useState } from "react"
import { v4 as uuid } from "uuid"

export default function SingleSelect({ options, heading, onSelect }) {
	const [selectedOption, setSelectedOption] = useState(options[0])
	const name = uuid()

	// useEffect is responsible for providing data to the parent element
	useEffect(() => {
		onSelect(selectedOption)
	}, [selectedOption, onSelect])

	return (
		<div className="flex flex-col text-olive-black">
			<h3 className="capitalize">{heading}</h3>
			{options.map((option) => {
				return (
					<span key={option} className="flex gap-2 items-center capitalize">
						<input
							className="accent-pizza-orange"
							type="radio"
							name={name}
							checked={selectedOption === option}
							onChange={() => {
								setSelectedOption(option)
							}}
						/>
						<label>{option}</label>
					</span>
				)
			})}
		</div>
	)
}
