import { defineConfig } from 'vite'
import StylelintPlugin from 'vite-plugin-stylelint'
import EslintPlugin from 'vite-plugin-eslint'

export default defineConfig({
	plugins: [StylelintPlugin(), EslintPlugin()]
})
