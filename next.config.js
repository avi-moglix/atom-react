// next.config.js
const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'moglix-atom-cms.s3.ap-south-1.amazonaws.com'
      },
    ],
  },
  compress: true,
};

module.exports = nextConfig;
