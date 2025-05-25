import "./src/env.ts";

/** @type {import("next").NextConfig} */
const config = {
  images: {
    remotePatterns: [
      {
        hostname: "randomuser.me",
        protocol: "https",
      },
      {
        hostname: "cdn-icons-png.flaticon.com",
        protocol: "https",
      },
      {
        hostname: "img.icons8.com",
        protocol: "https",
      },
      {
        hostname: "plus.unsplash.com",
        protocol: "https",
      },
      {
        hostname: "images.unsplash.com",
        protocol: "https",
      },
    ],
  },
};

export default config;
