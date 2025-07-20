import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: { unoptimized: true }, // prevent image issues
  trailingSlash: true,           // needed for subpaths
};

export default nextConfig;
