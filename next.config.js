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
        protocol: "http",
        hostname: "52.76.145.7",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
