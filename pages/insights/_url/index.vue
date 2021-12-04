<template>
  <div class="ged">
    <div class="section  ">
      <div class="flexings ">
      <div class="gridings">
      <div class="comment">
         <div >
      <h2>{{item.title}}</h2><br>
     <div class="" v-html="item.intro">
     </div>
    </div>
      </div>
      <div class="imaging">
        <img :src="`${host}${item.picture}`" class="cardimg1" :alt="item.alt" :title="item.alt"/>
      </div>
    </div>
    </div>
    <div class="boid">
    <div class="comment">
     <div class="" v-html="item.body">
         </div></div></div>
    </div>
  </div>
</template>

<script>
import { http, host } from '~/helpers/index.js'
export default {
  data () {
    return {
      // blog:
      host
    }
  },
  async asyncData ({ params }) {
    let item = {}
    console.log(params)
    try {
      const { data } = await http.get(`/front/blogi/${params.url}`)
      item = data
      // console.log(items)
      return { item }
    } catch (err) {
      console.log(err)
    }
  },
  // created(){
  //   this.getitem()
  // },
  // methods: {
  //   getitem (){
  //     console.log(this.$route.params.url, )
  //     this.item = this.blogs.find(item => item.url === this.$route.params.url )
  //   }

  // },
  head () {
    const seo = this.item || {
      title: 'How Much Is A Custom Ecommerce Shopping Website?',
      meta: 'Ecommerce website cost, Custom Website Affordability, Good desings'
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

<style scoped>

.olsights{
  @apply my-4;
}
.ged{
    @apply bg-gray-100;
}
.section{
  @apply bg-gray-100  border border-b-2 py-4;
}
.headerr{
  @apply flex justify-center items-center text-4xl md:text-5xl font-semibold text-gray-900;
}
.flexings{
  @apply flex justify-center items-center;
}
.gridings{
  @apply grid lg:grid-cols-2 container gap-4;
}
.comment{
  @apply text-gray-700 font-normal text-lg m-2 mx-5;
}
.imaging{
  @apply rounded overflow-hidden shadow-lg;
}
.cardimg1{
  @apply w-full h-full px-4 lg:px-0 object-contain;
}
.ols{
  @apply ml-12;
}
.boid{
  @apply container mx-auto mt-8;
}
.insight1{
  @apply max-w-6xl mx-auto;
}
.insightsh{
 @apply text-red-700;    
}
.biod .comment p{
    @apply text-red-700;
}
.h2isght{
    @apply my-2;
}
</style>