loadEnv(process.env.APP_ENV);

/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "avatars.githubusercontent.com",
			},
			{
				protocol: "https",
				hostname: "images.microcms-assets.io",
			},
		],
	},
};

module.exports = nextConfig;

/**
 * @param {string} appEnv
 */
function loadEnv(appEnv = "local") {
	const env = {
		...require(`./env/env.${appEnv}`),
		// biome-ignore lint/style/useNamingConvention: <explanation>
		NEXT_PUBLIC_APP_ENV: appEnv,
	};

	for (const [key, value] of Object.entries(env)) {
		process.env[key] = value;
	}
}
