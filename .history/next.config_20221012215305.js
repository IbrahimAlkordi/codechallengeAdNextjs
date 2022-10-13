// const {i18n} = require("./next-i18next.config")

module.exports  = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales : ['en','ar'],
    defaultLocale: 'en'
  },
   images: {
    domains: ['static01.nyt.com'],
  },
}

