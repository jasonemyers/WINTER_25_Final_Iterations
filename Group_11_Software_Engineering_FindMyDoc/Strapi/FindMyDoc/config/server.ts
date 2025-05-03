export default ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),

  // your existing app keys
  app: {
    keys: ['mySuperSecretKey1', 'mySuperSecretKey2'],
  },

  // ignore any files under "dist/" so Strapi doesn’t try to load
  // your frontend bundle as API content-types
  watchIgnoreFiles: [
    '**/dist/**',
  ],
});
