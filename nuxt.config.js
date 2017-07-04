module.exports = {
  loading: false,
  head: {
    title: 'Superior Motors in Braddock, Pa 15104 - Community Driven',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no' },
      { hid: 'description', name: 'description', content: 'Superior Motors Restaurant in Braddock, Pa' },
      { property: 'og:url', content: 'https://www.superiormotors15104.com'},
      { property: 'og:type', content: 'website'},
      { property: 'og:title', content: 'Superior Motors 15104'},
      { property: 'og:description', content: 'Superior Motors - Restaurant in Braddock, Pa - 15104'},
      { property: 'og:image', content: 'https://www.superiormotors15104.com/img/superiormotors-share.jpg'},
    ],
    link: [
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-192x192.png', sizes: '192x192' },
      { rel: 'icon', type: 'image/png', href: '/favicon/favicon-160x160.png', sizes: '160x160'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon.png'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-152x152.png', sizes: '152x152'},
      { rel: 'apple-touch-icon', href: '/favicon/apple-touch-icon-180x180.png', sizes: '180x180'},
      { rel:'stylesheet', type: 'text/css', href: '//cloud.typography.com/6038632/608024/css/fonts.css'}
    ]
  },
  css: [
    { src: '~assets/scss/main.scss', lang: 'scss' },
    'swiper/dist/css/swiper.css',
  ],
  plugins: [
    { src: '~plugins/ga.js', ssr: false },
    '~plugins/nuxt-swiper-plugin.js',
  ],
  build: {
    vendor: ['axios', 'date-fns'],
    extend (config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
