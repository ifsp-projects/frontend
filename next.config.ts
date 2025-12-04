import type { NextConfig } from 'next'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig: NextConfig = {
  eslint: { ignoreDuringBuilds: true },
  reactStrictMode: false,
  images: {
    // domains: ['lh3.googleusercontent.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**'
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
