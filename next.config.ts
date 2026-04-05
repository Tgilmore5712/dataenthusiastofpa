import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/blog/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/posts/:slug*",
        destination: "/",
        permanent: true,
      },
      {
        source: "/docs/:slug*",
        destination: "/services",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
