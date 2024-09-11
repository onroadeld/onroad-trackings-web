/** @type {import('tailwindcss').Config} */

export default {
	content: ['./index.html', './src/**/*.{ts,tsx}'],
	theme: {
		extend: {
			animation: {
				'spin-fast': 'spin-fast 1000ms linear infinite 0.1s',
			},
			keyframes: {
				'spin-fast': {
					from: {
						transform: 'rotate(0deg)',
					},
					to: {
						transform: 'rotate(360deg)',
					},
				},
			},
		},
	},
	plugins: [require('daisyui')],
}
