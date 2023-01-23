/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['aitechnolog.com', 'themoviedb.org'],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
}


module.exports = nextConfig
