<template>
  <div class="cont">
        <div class="background herobg">
      <div class="overlay herobg">
        <div class="mainer">
    <div class="grido">
      <div class="span2">
      <div class="main1 ">
        <!--Left Col-->
          <p class="message2 ">Wekelea hapa </p>
         
          <p class="commento">
            We show you where the best odds and verified Profitable tipsters are
          </p>
          <nuxt-link to="/aboutus"><button class="btn3">
            For more info
          </button></nuxt-link>
      </div>
      </div>
        <!--Right Col-->
        <div class="drimg">
        <contactform class="contac"/>
        </div>
      </div>
      </div>
      </div>
   <!--Hero-->
    </div>
   <!--Hero-->
    
    <!-- asection -->
    <Asection2/>
    <!-- end -->
    <!-- asection -->
    <Asection/>
    <!-- end -->
    <!-- section -->
     <section class="section">
      <h2 class="s-head">Top Games</h2>
      <div class="flexing">
      <div class="griding" >    
       <card v-for="item in items" :key="item.id" :item="item" :host="host"/>
      </div>
      </div>
     </section>
     <!-- end -->
    <!-- section -->
     <!-- <section class="section">
      <h2 class="s-head"> Tipsters</h2>
      <div class="flexing ">
      <div class="griding2" >    
       <cardportfolio v-for="item in items" :key="item.id" :item="item"  :host="host"/>
      </div>
      </div>
     </section> -->
     <!-- end -->
     <!-- <seo :header='seo.header_1' :body='seo.footer'/> -->
  </div>
</template>

<script>
import { http, host } from '~/helpers/index.js'
import Asection from '~/components/asection.vue'
import Asection2 from '~/components/asection2.vue'
import card from '~/components/card.vue'
import Cardportfolio from '~/components/cardportfolio.vue'
// import {games} from '~/helpers/data.js'
// import Seo from '~/components/seo.vue'
export default {
  components: { card, Asection, Asection2, Cardportfolio },
  data(){
    return{
      // games,
      host,
      title: 'Best Ecommerce Developers|Custom website Designers at an Afforadable Price',
      meta: 'Ecomerce websites developers, Custom website Designers, responsive designs and SEO friend sites In Nairobi'
    }
  },    
  async asyncData () {
    let items = []
    // let portfolios = []
    // let seo = {}
    // let name = ''
    try {
      const { data } = await http.get(`/featured`)
      items = data
      // portfolios = data.newarrivals
      // seo = data.seo
      // name = params.flavour
      // console.log(items)
      return { items }
      // return { items, portfolios, seo }
    } catch (err) {
      console.log(err)
    }
  },
  head () {
    const seo = this.seo || {
      title: 'Best Ecommerce Developers|Custom website Designers',
      meta: 'Ecomerce websites developers, Custom website Designers, responsive designs and SEO friend sites In Nairobi'
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

<style lang="scss">

.background{
  background: url('~static/soccer4.jpg');
  background-size: cover;
}
.overlay{
  background-color: rgba(0, 0, 0, 0.7);
}
.gradient {
        background: linear-gradient(90deg, #8a0b31 0%, #c9b4d1 100%);
}
.mainer{
  @apply h-screen w-full flex justify-center items-center;
}
.herobg{
  @apply  h-screen w-full;
}
.bgimg{
  @apply  h-screen  w-full object-cover bg-cover bg-no-repeat;
}
.app{
  @apply pt-4 md:pt-2 px-4 xl:px-0 ;
}

.main{
  @apply mx-auto text-white rounded-lg  bg-opacity-50 mt-16  px-4 flex flex-wrap justify-between;
}
.main1{
  @apply container text-white mx-auto ;
}
.message{
  @apply flex flex-col text-xl font-bold text-white w-full md:w-2/5 justify-center items-center md:items-start text-center md:text-left;
}
.message1{
  @apply uppercase text-xl  text-white tracking-normal w-full;
}
.message2{
  @apply my-4 text-2xl lg:text-4xl text-black md:text-gray-300 font-bold leading-tight flex justify-center items-center;
}
.commento{
  @apply leading-normal text-white text-xl mb-8 mr-4;
}
.btn3{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.img{
  @apply w-full md:w-4/5 z-50;
}
.drimg{
  @apply w-full md:w-3/5 py-6 text-center bg-transparent;
}
.cv{
  @apply relative -mt-10 lg:-mt-24 border-transparent;
}
.section{
  @apply bg-white -mt-2 border border-b-2 py-4;
}
.s-head{
  @apply flex justify-center items-center text-xl mx-10 px-10 font-semibold text-gray-900;
}
.flexing{
  @apply flex justify-center items-center px-4 lg:px-0;
}
.griding{
  @apply grid md:grid-cols-2 lg:grid-cols-4 container gap-4 mt-10;
}
.griding2{
  @apply grid md:grid-cols-2 lg:grid-cols-4 container gap-2 mt-10;
}
</style>
