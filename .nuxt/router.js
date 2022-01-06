import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from '@nuxt/ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _471755fe = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _3dd2ba5e = () => interopDefault(import('../pages/contact.vue' /* webpackChunkName: "pages/contact" */))
const _629eb5b2 = () => interopDefault(import('../pages/fqa.vue' /* webpackChunkName: "pages/fqa" */))
const _58aea99c = () => interopDefault(import('../pages/games.vue' /* webpackChunkName: "pages/games" */))
const _72a23be0 = () => interopDefault(import('../pages/help.vue' /* webpackChunkName: "pages/help" */))
const _63494efd = () => interopDefault(import('../pages/insights/index.vue' /* webpackChunkName: "pages/insights/index" */))
const _31dde48e = () => interopDefault(import('../pages/portfolio.vue' /* webpackChunkName: "pages/portfolio" */))
const _3b85db77 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _704e8f00 = () => interopDefault(import('../pages/support.vue' /* webpackChunkName: "pages/support" */))
const _79fbaab4 = () => interopDefault(import('../pages/insights/page.vue' /* webpackChunkName: "pages/insights/page" */))
const _1d03d199 = () => interopDefault(import('../pages/gameresult/_id.vue' /* webpackChunkName: "pages/gameresult/_id" */))
const _04277718 = () => interopDefault(import('../pages/insights/_url/index.vue' /* webpackChunkName: "pages/insights/_url/index" */))
const _66cf30c3 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _471755fe,
    name: "about"
  }, {
    path: "/contact",
    component: _3dd2ba5e,
    name: "contact"
  }, {
    path: "/fqa",
    component: _629eb5b2,
    name: "fqa"
  }, {
    path: "/games",
    component: _58aea99c,
    name: "games"
  }, {
    path: "/help",
    component: _72a23be0,
    name: "help"
  }, {
    path: "/insights",
    component: _63494efd,
    name: "insights"
  }, {
    path: "/portfolio",
    component: _31dde48e,
    name: "portfolio"
  }, {
    path: "/pricing",
    component: _3b85db77,
    name: "pricing"
  }, {
    path: "/support",
    component: _704e8f00,
    name: "support"
  }, {
    path: "/insights/page",
    component: _79fbaab4,
    name: "insights-page"
  }, {
    path: "/gameresult/:id?",
    component: _1d03d199,
    name: "gameresult-id"
  }, {
    path: "/insights/:url",
    component: _04277718,
    name: "insights-url"
  }, {
    path: "/",
    component: _66cf30c3,
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
