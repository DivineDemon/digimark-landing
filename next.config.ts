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
    ],
  },
};

export default config;
