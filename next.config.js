/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  // Because we use static server, not node js server for deploying
  experimental: {
    images: {
      unoptimized: true,
    },
  },
  exports: {
    trailingSlash: true,
  },
};

module.exports = nextConfig;
