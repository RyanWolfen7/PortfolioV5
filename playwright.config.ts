import { defineConfig } from '@playwright/test';

export default defineConfig({
	webServer: {
		command: 'bun run build && npm run preview',
		port: 4173
	},

	testDir: 'e2e'
});
