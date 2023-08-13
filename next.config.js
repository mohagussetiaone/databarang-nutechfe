/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  env: {
    URL_DOMAIN: "https://frightened-toad-leotard.cyclic.app",
  },
};

module.exports = nextConfig;
