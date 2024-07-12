/** @type {import('next').NextConfig} */
const nextConfig = {
  publicRuntimeConfig: {
    baseURL: process.env.BASE_URL || "http://localhost:3000",
    googleAnalyticsId: 'G-8B7SE627MF',
    
  },
  webpack: config => {
    config.externals.push('pino-pretty', 'lokijs', 'encoding')
    return config
  },
  reactStrictMode: true,
  basePath: "",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  
};

export default nextConfig;