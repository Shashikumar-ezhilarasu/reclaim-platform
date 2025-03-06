/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.resolve.fallback = { fs: false, net: false, tls: false };
    return config;
  },
  images: {
    domains: ["avatars.githubusercontent.com", "images.unsplash.com"],
  },
};

module.exports = nextConfig;
