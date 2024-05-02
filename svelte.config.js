import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

process.env.PUBLIC_APP_VERSION = process.env.npm_package_version || '(unknown)';
process.env.PUBLIC_DEFAULT_PATH = process.env.PUBLIC_DEFAULT_PATH || '/';
process.env.PUBLIC_PLAUSIBLE_DATA_DOMAIN = process.env.PUBLIC_PLAUSIBLE_DATA_DOMAIN || '';
process.env.PUBLIC_PLAUSIBLE_SCRIPT_SRC = process.env.PUBLIC_PLAUSIBLE_SCRIPT_SRC || '';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter(),
	},
};

export default config;
