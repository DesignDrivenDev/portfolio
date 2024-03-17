/** @type {import('next').NextConfig} */
const nextConfig = {
   reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['res.cloudinary.com','media.graphassets.com'],
  },
}

module.exports = nextConfig
