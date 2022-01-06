// import fetch from 'node-fetch'
export default {
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'The best e-commerce website/application developers',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'The best firm in e-commerce, website and web application development' }
    ],
      link: [{ rel: 'icon', type: 'image/png', href: '/logo.png' }]
  },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: [
    '~/assets/css/main.css'
  ],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
  ],

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxtjs/fontawesome',
    '@/modules/sitemapRouteGenerator'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  // modules: [
  //   '@nuxtjs/sitemap',
  //   // 'nuxt-socket-io',
  // ],
  // io: {
  //   // module options
  //   sockets: [{
  //     name: 'main',
  //     url: 'http://localhost:2000/game'
  //   }]
  // },
  // sitemap: {
  //   hostname: "https://chantosweb.co.ke",
  // },
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
  },
  transition:{
    name: 'fade',
    mode: 'out-in'
  },
  // hooks: {
  //   ready(nuxt) {
  //      setInterval(async () => {
  //         const games = await fetch(`http://localhost:2000/game/Premier League`).then(res => res.json())
  //         nuxt.$sse.broadcast('games', games)
  //         // games.forEach(game => nuxt.$sse.broadcast('game', game))
  //      }, 1000)
  //    }
  //  }
}
