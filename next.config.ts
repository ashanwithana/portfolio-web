import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export for Cloudflare Pages
  output: 'export',
  trailingSlash: true,

  // Disable image optimization for static export
  images: {
    unoptimized: true
  },

  // React compiler
  reactCompiler: true,
};

export default nextConfig;
