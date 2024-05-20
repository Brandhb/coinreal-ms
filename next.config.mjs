/** @type {import('next').NextConfig} */
const nextConfig = {
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