/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

const withVideo = require('next-videos')
module.exports = withVideo()

module.exports = nextConfig;
