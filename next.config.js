/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@emotion/styled', '@emotion/react', '@emotion/cache'],
  images: {
    remotePatterns: [],
  },
};

module.exports = nextConfig;
