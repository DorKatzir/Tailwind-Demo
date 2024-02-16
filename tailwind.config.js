/** @type {import('tailwindcss').Config} */


export default {
	darkMode: 'class',
	
	content: ['./**/*.{html,js}', './node_modules/flowbite/**/*.js'],

	theme: {
		extend: {},
	},

	plugins: [require('flowbite/plugin')],
}

