import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/cheatsheet',
    trailingSlash: true,
  }),
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatar.vercel.sh',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

export default nextConfig
