/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['aitechnolog.com', 'api.driteducation.com'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}


module.exports = nextConfig
