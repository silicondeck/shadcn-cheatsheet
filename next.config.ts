import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  /* config options here */
  ...(process.env.NODE_ENV === 'production' && {
    basePath: '/cheatsheet',
    trailingSlash: true,
  }),
}

export default nextConfig
