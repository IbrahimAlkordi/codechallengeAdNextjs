/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales : ['en','ar'],
    defaultLocale: 'en'
  },
  //  images: {
  //   domains: ['static01.nyt.com'],
  // },
}

module.exports = nextConfig
