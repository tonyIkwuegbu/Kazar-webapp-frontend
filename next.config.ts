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
	// Reduce memory pressure
	experimental: {
		// cpus: 2,          // Uncomment if still failing
	},
	// Force webpack for stability
	webpack: (config) => {
		return config;
	},
};

export default nextConfig;
