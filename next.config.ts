import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "developers.google.com",
			},
		],
	},
	turbopack: {},
};

export default nextConfig;
