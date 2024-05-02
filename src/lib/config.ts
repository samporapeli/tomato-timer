import * as env from '$env/static/public';

export const defaultTitle = 'Tomato Timer';
// injected to `process.env` in svelte.config.js:
export const defaultPath = env.PUBLIC_DEFAULT_PATH;
export const appVersion = env.PUBLIC_APP_VERSION;
export const plausible = {
	isConfigured: env.PUBLIC_PLAUSIBLE_SCRIPT_SRC && env.PUBLIC_PLAUSIBLE_DATA_DOMAIN,
	scriptSrc: env.PUBLIC_PLAUSIBLE_SCRIPT_SRC,
	dataDomain: env.PUBLIC_PLAUSIBLE_DATA_DOMAIN,
};
