import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

// https://vitejs.dev/config/
export default defineConfig({
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	plugins: [react(), svgr()],
	build: {
		rollupOptions: {
			output: {
				chunkFileNames: 'assets/js/[name]-[hash].js',
				entryFileNames: 'assets/js/[name]-[hash].js',

				assetFileNames: ({ name }) => {
					if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')) {
						return 'assets/images/[name]-[hash][extname]'
					}

					if (/\.css$/.test(name ?? '')) {
						return 'assets/css/[name]-[hash][extname]'
					}

					// default value
					// ref: https://rollupjs.org/guide/en/#outputassetfilenames
					return 'assets/[name]-[hash][extname]'
				},
			},
		},
	},
})
