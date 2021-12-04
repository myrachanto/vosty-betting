<template>
   <!-- section -->
     <section class="section">
      <div class="s-head"> What we have achieved</div>
      <div class="flexing">
      <div class="griding" >    
       <cardportfolio v-for="item in items" :key="item.id" :item="item" :host="host"/>
      </div>
      </div>
     <!-- <seo :header='seo.header_1' :body='seo.footer'/> -->
     </section>
     <!-- end -->
</template>

<script>
import { http, host } from '~/helpers/index.js'
import cardportfolio from '~/components/cardportfolio.vue'
// import Seo from '~/components/seo.vue'
export default {
  components: { cardportfolio },
  data(){
    return{
      host
    }
  },  
  async asyncData () {
    let items = []
    let seo = {}
    // let name = ''
    try {
      const { data } = await http.get(`/front/products`)
      const response = await http.get(`/front/seo/portfolio`)
      items = data
      seo = response.data
      // name = params.flavour
      // console.log(items)
      // return { items, seo, name }
      return { items, seo }
    } catch (err) {
      console.log(err)
    }
  },
  head () {
    const seo = this.seo || {
      title: 'Ecommerce Website Insights On How To Get Traction',
      meta: 'Real Ecommerce Website Desings, Catering Websites, Clothe Stores, Hardware , Furniture and many more'
    }
    return {
      title: seo.title,
      meta: [
        { hid: 'description', name: 'description', content: seo.meta },
        { hid: 'og:title', name: 'og:title', content: seo.title },
        { hid: 'og:description', name: 'og:description', content: seo.meta },
        { hid: 'og:type', name: 'og:type', content: seo.title },
        { hid: 'og:url', name: 'og:url', content: 'https://chantosweb.co.ke' },
        { hid: 'og:image', name: 'og:image', content: 'https://chantosweb.co.ke/logo.png' }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

.section{
  @apply bg-white -mt-2 border border-b-2 py-4;
}
.s-head{
  @apply flex justify-center items-center text-2xl md:text-3xl pt-5 md:pt-1  px-10 font-semibold text-gray-900;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-3 container gap-4 mt-10;
}
</style>