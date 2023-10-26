import { useEffect, useState } from "react"

export default function MultiSelect({ options, heading, onSelect }) {
	const [selectedOptions, setSelectedOption] = useState([])

	function handleOptionSelect(selectedOpt) {
		if (selectedOptions.includes(selectedOpt)) {
			const filteredOptions = selectedOptions.filter((opt) => {
				return opt !== selectedOpt
			})
			setSelectedOption(filteredOptions)
			return
		}
		setSelectedOption(() => {
			return [...selectedOptions, selectedOpt]
		})
	}

	// useEffect is responsible for providing data to the parent element
	useEffect(() => {
		onSelect(selectedOptions)
	}, [selectedOptions, onSelect])

	return (
		<div className="capitalize  text-olive-black">
			<p>{heading}</p>
			<div className="flex gap-2 flex-wrap ">
				{options.map((option) => {
					return (
						<span
							key={option}
							onClick={() => {
								handleOptionSelect(option)
							}}
							className={`bg-gray-100 px-2 border border-gray-200 rounded-md cursor-pointer ${
								selectedOptions.includes(option) ? "bg-pizza-orange-light text-white" : ""
							}`}>
							{option}
						</span>
					)
				})}
			</div>
		</div>
	)
}
