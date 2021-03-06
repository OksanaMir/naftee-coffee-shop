module.exports = {
  i18n: {
    // These are all the locales you want to support in
    // your application
    locales: ['en', 'cs'],
    // This is the default locale you want to be used when visiting
    // a non-locale prefixed path e.g. `/hello`
    defaultLocale: 'en',
  },
  env: {
    datoCmsToken: process.env.DATOCMS_TOKEN,
  },
  images: {
    domains: ['www.datocms-assets.com'],
  },
};
