import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
	server: {
		port: 3000,
		hmr: true,
		host: true,
	},
	build: {
		target: 'esnext',
	},
	resolve: {
		alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
	},
	plugins: [react(), svgr()],
})
