/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["i.seadn.io", "storage.googleapis.com", "openseauserdata.com"],
  },
};

module.exports = nextConfig;
