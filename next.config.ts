import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

import { cspHeaders } from '@/lib/csp'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  async headers() {
    return cspHeaders.length > 0
      ? [{ source: '/(.*)', headers: cspHeaders }]
      : []
  },
  images: {
    // domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
      }
    ]
  },
  compress: true,
  swcMinify: true,
  optimizeFonts: true,
  experimental: {
    optimizePackageImports: [
      'posthog-js',
      'zod',
      'framer-motion',
      'immer',
      'swiper'
    ]
  },
  webpack(config) {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src')

    config.experiments = {
      ...config.experiments,
      topLevelAwait: true
    }

    return config
  }
}

export default nextConfig
