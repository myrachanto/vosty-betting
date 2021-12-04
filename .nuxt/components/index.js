export { default as Logo } from '../../components/Logo.vue'
export { default as Navbar } from '../../components/Navbar.vue'
export { default as Asection } from '../../components/asection.vue'
export { default as Asection2 } from '../../components/asection2.vue'
export { default as Blogcard } from '../../components/blogcard.vue'
export { default as Card } from '../../components/card.vue'
export { default as Cardportfolio } from '../../components/cardportfolio.vue'
export { default as Enders } from '../../components/enders.vue'
export { default as Footercard } from '../../components/footercard.vue'
export { default as Formcard } from '../../components/formcard.vue'
export { default as Pricing } from '../../components/pricing.vue'
export { default as Seo } from '../../components/seo.vue'
export { default as Whatsapp } from '../../components/modals/whatsapp.vue'

export const LazyLogo = import('../../components/Logo.vue' /* webpackChunkName: "components/logo" */).then(c => c.default || c)
export const LazyNavbar = import('../../components/Navbar.vue' /* webpackChunkName: "components/navbar" */).then(c => c.default || c)
export const LazyAsection = import('../../components/asection.vue' /* webpackChunkName: "components/asection" */).then(c => c.default || c)
export const LazyAsection2 = import('../../components/asection2.vue' /* webpackChunkName: "components/asection-2" */).then(c => c.default || c)
export const LazyBlogcard = import('../../components/blogcard.vue' /* webpackChunkName: "components/blogcard" */).then(c => c.default || c)
export const LazyCard = import('../../components/card.vue' /* webpackChunkName: "components/card" */).then(c => c.default || c)
export const LazyCardportfolio = import('../../components/cardportfolio.vue' /* webpackChunkName: "components/cardportfolio" */).then(c => c.default || c)
export const LazyEnders = import('../../components/enders.vue' /* webpackChunkName: "components/enders" */).then(c => c.default || c)
export const LazyFootercard = import('../../components/footercard.vue' /* webpackChunkName: "components/footercard" */).then(c => c.default || c)
export const LazyFormcard = import('../../components/formcard.vue' /* webpackChunkName: "components/formcard" */).then(c => c.default || c)
export const LazyPricing = import('../../components/pricing.vue' /* webpackChunkName: "components/pricing" */).then(c => c.default || c)
export const LazySeo = import('../../components/seo.vue' /* webpackChunkName: "components/seo" */).then(c => c.default || c)
export const LazyWhatsapp = import('../../components/modals/whatsapp.vue' /* webpackChunkName: "components/whatsapp" */).then(c => c.default || c)
