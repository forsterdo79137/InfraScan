/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["@infrascan/shared"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
};

module.exports = nextConfig;
