/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		typedRoutes: true,
	},
	redirects: async () => {
		return [
			{
				source: "/products",
				destination: "/products/1",
				permanent: true,
			},
			{
				source: "/categories/:category",
				destination: "/categories/:category/1",
				permanent: true,
			},
		];
	},
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "naszsklep-api.vercel.app",
				port: "",
				pathname: "/images/**",
			},
			{
				protocol: "https",
				hostname: "tailwindui.com",
				port: "",
				pathname: "/img/**",
			},
			{
				protocol: "https",
				hostname: "dsc.cloud",
				port: "",
			},
			{
				protocol: "https",
				hostname: "images.unsplash.com",
				port: "",
			},
		],
	},
};

module.exports = nextConfig;
