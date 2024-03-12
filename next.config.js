/** @type {import('next').NextConfig} */
const nextConfig = {
  /*  webpack(config) {
    config.infrastructureLogging = { debug: /PackFileCache/ };
    return config;
  }, */
  // output: "export",
  images: {
    remotePatterns: [
      /* {
        protocol: "https",
        hostname: "gazihomeappliances.com",
        port: "",
        pathname: "/**",
      }, */
      {
        protocol: "http", // Assuming your dev server uses http
        hostname: "localhost",
        port: "5000", // Optional: If your dev server uses a non-standard port
        pathname: "/**",
      },
    ],
  },
};

module.exports = nextConfig;
