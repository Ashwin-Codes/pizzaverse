/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				logo: ["Sedgwick Ave Display", "cursive"],
				inter: ["Inter", "sans-serif"],
			},
			colors: {
				"pizza-orange": "#f16e05",
				"pizza-orange-light": "#ff8628",
				"olive-black": "#3f4140",
			},
		},
	},
	plugins: [],
}
