# tomato-timer

My take on a Pomodoro timer.

## Configuration
Use environment variables to configure the app:

```bash
PUBLIC_DEFAULT_PATH='/app/tomato-timer/'
PUBLIC_PLAUSIBLE_DATA_DOMAIN='sampo.website'
PUBLIC_PLAUSIBLE_SCRIPT_SRC='https://plausible.sampo.website/js/script.js'
```

Values are loaded to constants in `src/lib/config.ts`.
Avoid importing values from `$env` elsewhere in the app.

## Development setup
Once you've created a project and installed dependencies with `npm install`, start a development server:

```zsh
npm run dev
```

## Build & deploy
To create a production version of the app:

```zsh
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.
