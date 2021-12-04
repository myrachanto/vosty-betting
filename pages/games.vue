<template>
   <!-- section -->
     <section class="section">
        <div class="compename"><h2 class="">{{name}}</h2></div>
      <div class="gamers">
        <div class="competition">
          <ul v-for="(compe, i) in items" :key="i">
            <li class="compe" @click="getdata(compe)">{{compe}}</li>
          </ul>
        </div>
      <div class="flexing1 results">
      <div v-if="loading" class="lad "><div class="loading lds-hourglass"></div></div>
      <div class="griding" v-else >
       <card v-for="item in competition" :key="item.id" :item="item" :host="host"/>
      </div>
      </div>
      </div>
     <!-- <seo :header='seo.header_1' :body='seo.footer'/> -->
     </section>
     <!-- end -->
</template>

<script>
import {games} from '~/helpers/data.js'
import { http, host } from '~/helpers/index.js'
// import cardportfolio from '~/components/cardportfolio.vue'
import Card from '~/components/card.vue'
// import Seo from '~/components/seo.vue'
export default {
  components: { Card },
  data(){
    return{
      compe :'',
      loading: false,
      competition: [],
      games,
      host
    }
  }, 
  created(){
    this.name = "Premier League"
    this.getdata(this.name)
  },
  methods :{
    async getdata(name) {
      this.loading = true
      this.name = name
      const resp = await http.get(`/game/${name}`)
      this.competition = resp.data
      this.loading =false
    }
  },
  async asyncData () {
    let items = []
    // let competition = []
    // let seo = {}
    // let name = ''
    try {
      const { data } = await http.get(`/games`)
      // const response = await http.get(`/front/seo/portfolio`)
      items = data
      // competition= resp.data
      
      // seo = response.data
      // name = params.flavour
      // console.log(data)
      // return { items, seo, name }
      return { items}
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
  @apply bg-gray-100 -mt-2 border border-b-2 py-4;
}
.s-head{
  @apply flex justify-center items-center text-2xl md:text-3xl pt-5 md:pt-1  px-10 font-semibold text-gray-900;
}
.flexing1{
  @apply flex justify-start items-start;
}
.griding{
  @apply grid lg:grid-cols-4 container gap-4 mt-5;
}
.gamers{
  @apply grid grid-cols-5 bg-gray-200;
}
.competition{
  @apply bg-green-700 hidden md:block;
}
.results{
  @apply col-span-4
}
.compe{
  @apply p-2 shadow-lg rounded-lg  cursor-pointer hover:bg-red-400 list-none text-white;
}
.lad{
  @apply w-screen h-screen flex justify-center items-center ;
}
.loading{
  @apply bg-red-200  flex justify-center items-center;
}
.compename{
  @apply mt-20 text-2xl flex justify-center items-center;
}
.lds-hourglass {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-hourglass:after {
  content: " ";
  display: block;
  border-radius: 50%;
  width: 0;
  height: 0;
  margin: 8px;
  box-sizing: border-box;
  border: 32px solid #fff;
  border-color: #fff transparent #fff transparent;
  animation: lds-hourglass 1.2s infinite;
}
@keyframes lds-hourglass {
  0% {
    transform: rotate(0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }
  50% {
    transform: rotate(900deg);
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  100% {
    transform: rotate(1800deg);
  }
}
</style>