/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  typescript:{
    tsconfigPath: './tsconfig.json',
  },
  images: {
    unoptimized: true,
  }
}

module.exports = nextConfig
