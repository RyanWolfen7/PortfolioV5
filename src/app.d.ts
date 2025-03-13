// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
}

export {};

/// <reference types="vite/client" />

// For client-side environment variables
interface ImportMetaEnv {
	readonly PUBLIC_SITE_URL: string;
	readonly PUBLIC_SITE_TITLE: string;
	readonly PUBLIC_SITE_DESCRIPTION: string;
	readonly PUBLIC_AUTHOR: string;
	readonly PUBLIC_GOOGLE_SITE_VERIFICATION: string;
	readonly PUBLIC_TWITTER_HANDLE: string;
	readonly PUBLIC_RECAPTCHA_SITE_KEY: string;
	// Server-side environment variables don't need to be defined here
	// as they're handled by $env/dynamic/private
}

interface ImportMeta {
	readonly env: ImportMetaEnv;
}
