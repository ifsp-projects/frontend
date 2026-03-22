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
  output: 'standalone',
  experimental: {
    optimizePackageImports: [
      '@vectopus/atlas-icons-react',
      'posthog-js',
      'zod',
      'framer-motion',
      'react-hook-form',
      'immer',
      'swiper',
      'react-markdown'
    ]
  },
  async redirects() {
    return [
      {
        source: '/ongs/57e88f6a-e2bf-4a14-baa5-53b488f7fec5',
        destination: '/ongs',
        permanent: true,
        locale: false
      }
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
