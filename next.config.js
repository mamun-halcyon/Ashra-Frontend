/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  }, */
  images: {
    domains: [
      'localhost',
      '54.226.132.225',
      '204.152.197.183',
      'gazihomeappliances.com',
    ],
  },
};

module.exports = nextConfig;
