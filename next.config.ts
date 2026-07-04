import type { NextConfig } from "next";
import withPWAInit from "@ducanh2912/next-pwa";

const withPWA = withPWAInit({
	dest: "public",
	cacheOnFrontEndNav: true,
	aggressiveFrontEndNavCaching: true,
	reloadOnOnline: true,
	disable: process.env.NODE_ENV === "development",
	workboxOptions: {
		disableDevLogs: true,
		skipWaiting: true,
		clientsClaim: true,
	},
});

const nextConfig: NextConfig = {
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
