import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
	dest: "public",
	cacheOnFrontEndNav: false,
	aggressiveFrontEndNavCaching: false,
	reloadOnOnline: true,
	disable: process.env.NODE_ENV === "development",
	register: true,
	workboxOptions: {
		disableDevLogs: true,
		skipWaiting: true,
		clientsClaim: true,
		cleanupOutdatedCaches: true,
		exclude: [/^api\//],
		navigateFallbackDenylist: [/^\/api\//],
		runtimeCaching: [
			{
				urlPattern: ({ url }: { url: URL }) => url.pathname.startsWith("/api/"),
				handler: "NetworkOnly",
			},
		],
	},
});

const nextConfig: NextConfig = {
	reactStrictMode: true,
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "developers.google.com",
			},
			{
				protocol: "https",
				hostname: "kazarstorage.s3.us-east-005.backblazeb2.com",
			},
		],
	},
	turbopack: {},
};

export default withPWA(nextConfig);
