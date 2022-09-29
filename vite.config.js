import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
	base: '/ecommerce-vite/',
	plugins: [vue()],
	resolve: {
		alias: [
			{
				find: '@',
				replacement: 'src',
			},
		],
		extensions: ['.vue', '.js']
	}
})
