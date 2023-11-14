/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '5.imimg.com',
        port: '',
        
      },
    ],
  },
}

module.exports = nextConfig
