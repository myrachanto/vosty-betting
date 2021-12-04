<template>
   <!-- section -->
     <section class="section">
      <div class="flexing">
      <div class="griding" >    
       <blogcard v-for="item in items" :key="item.id" :item="item" :host="host"/>
      </div>
      </div>
     </section>
     <!-- end -->
</template>

<script>
import { http, host } from '~/helpers/index.js'
import Blogcard from '~/components/blogcard.vue'
export default {
  components: { Blogcard },
  data(){
    return{
      host
    }
  },  
  async asyncData () {
    let items = []
    // let seo = {}
    // let name = ''
    try {
      const { data } = await http.get(`/front/blogi`)
      // const response = await http.get(`/front/seo/${params.flavour}`)
      items = data
      // seo = response.data
      // name = params.flavour
      // console.log(items)
      // return { items, seo, name }
      return { items }
    } catch (err) {
      console.log(err)
    }
  },
  head () {
    const seo = this.seo || {
      title: 'Ecommerce Insights On How To Get Your Business In The Virtual World',
      meta: 'Ecommerce business Insights, launching information, Ranking well advice'
    }
    return {
      title: seo.title,
      meta: [
        { hid: 'description', name: 'description', content: seo.meta },
        { hid: 'og:title', name: 'og:title', content: seo.title },
        { hid: 'og:description', name: 'og:description', content: seo.meta },
        { hid: 'og:type', name: 'og:type', content: seo.title },
        { hid: 'og:url', name: 'og:url', content: 'this is the url' },
        { hid: 'og:image', name: 'og:image', content: 'image.jpeg' }
      ]
    }
  }

}
</script>

<style lang="scss" scoped>

.section{
  @apply bg-white mt-4 lg:mt-10 border border-b-2 py-4;
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