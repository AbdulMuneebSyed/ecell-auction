import type { NextConfig } from "next";

const nextConfig = {
  experimental: {
    allowedDevOrigins: ["http://192.168.1.4"],
  },
};

export default nextConfig;
