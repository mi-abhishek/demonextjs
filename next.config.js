/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects(){
    return [
      {
        source: '/about-us',
        destination: '/',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
