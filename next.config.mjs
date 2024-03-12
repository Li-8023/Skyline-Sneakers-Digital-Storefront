/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
      },
      {
        protocol: "https",
        hostname: "food-ordering-lihe.s3.amazonaws.com",
      },
    ],
  },
};

export default nextConfig;
