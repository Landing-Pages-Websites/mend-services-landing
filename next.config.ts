import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/replacement-windows",
        destination: "/window-replacement",
        permanent: true, // 301 Redirect for SEO
      },
      {
        source: "/entry-door-installation",
        destination: "/front-entry-doors",
        permanent: true,
      },
      {
        source: "/what-makes-us-different",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/shower-replacement",
        destination: "/shower-and-bath-replacement",
        permanent: true,
      },
      {
        source: "/bathtub-replacement",
        destination: "/shower-and-bath-replacement",
        permanent: true,
      },
      {
        source: "/tub-to-shower-conversion",
        destination: "/shower-and-bath-replacement",
        permanent: true,
      },
      {
        source: "/one-day-bath",
        destination: "/shower-and-bath-replacement",
        permanent: true,
      },
      {
        source: "/terms",
        destination: "/privacy-policy", // Maps to your policy page
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
