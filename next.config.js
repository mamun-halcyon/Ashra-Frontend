/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  }, */
  // output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gazihomeappliances.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
