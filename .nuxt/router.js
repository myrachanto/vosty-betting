import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2922c09d = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _6df1e1b0 = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _d0f7a8f4 = () => interopDefault(import('../pages/fqa.vue' /* webpackChunkName: "pages/fqa" */))
const _9497d45e = () => interopDefault(import('../pages/games.vue' /* webpackChunkName: "pages/games" */))
const _7780fd3e = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _7fdb3184 = () => interopDefault(import('../pages/insights/index.vue' /* webpackChunkName: "pages/insights/index" */))
const _abcfde50 = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _6f3dcb54 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _05ac6442 = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _e503f35a = () => interopDefault(import('../pages/insights/page.vue' /* webpackChunkName: "pages/insights/page" */))
const _79cce9da = () => interopDefault(import('../pages/gameresult/_id.vue' /* webpackChunkName: "pages/gameresult/_id" */))
const _bf8f4112 = () => interopDefault(import('../pages/insights/_url/index.vue' /* webpackChunkName: "pages/insights/_url/index" */))
const _48da9b62 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _2922c09d,
    name: "about"
  }, {
    path: "/contact",
    component: _6df1e1b0,
    name: "contact"
  }, {
    path: "/fqa",
    component: _d0f7a8f4,
    name: "fqa"
  }, {
    path: "/games",
    component: _9497d45e,
    name: "games"
  }, {
    path: "/help",
    component: _7780fd3e,
    name: "help"
  }, {
    path: "/insights",
    component: _7fdb3184,
    name: "insights"
  }, {
    path: "/portfolio",
    component: _abcfde50,
    name: "portfolio"
  }, {
    path: "/pricing",
    component: _6f3dcb54,
    name: "pricing"
  }, {
    path: "/support",
    component: _05ac6442,
    name: "support"
  }, {
    path: "/insights/page",
    component: _e503f35a,
    name: "insights-page"
  }, {
    path: "/gameresult/:id?",
    component: _79cce9da,
    name: "gameresult-id"
  }, {
    path: "/insights/:url",
    component: _bf8f4112,
    name: "insights-url"
  }, {
    path: "/",
    component: _48da9b62,
    name: "index"
  }],

  fallback: false
}

function decodeObj(obj) {
  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      obj[key] = decode(obj[key])
    }
  }
}

export function createRouter () {
  const router = new Router(routerOptions)

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    const r = resolve(to, current, append)
    if (r && r.resolved && r.resolved.query) {
      decodeObj(r.resolved.query)
    }
    return r
  }

  return router
}
