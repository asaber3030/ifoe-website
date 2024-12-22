import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  typescript: {
    ignoreBuildErrors: true
  },
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb"
    }
  },
  images: {
    domains: ["firebasestorage.googleapis.com", "placehold.co"]
  }
}

export default nextConfig
