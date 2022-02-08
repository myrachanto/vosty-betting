<template>
   <!-- section -->
     <section class="section gradient">
       <div class="">
        <div class="compename gradient">
          <h2 class="headering">Leagues :- {{standin}}</h2>
        <div class="menucomps">
          <div class="dvs" :class="{ active: Issoccer }" @click="getdata('soccer',soccer)">Football</div>
          <div class="dvs" :class="{ active: IsBasket }" @click="getdata('basket', basket)">Basketball</div>
          <div class="dvs" :class="{ active: IsTennis }" @click="getdata('tennis', tennis)">Tennis</div>
        </div>
       <div class="search">
                <input
                 type="text"
                 @keydown="searching(search)"
                 @keyup="searching(search)"
                 v-model="search"
                 class="search-input"
                 placeholder="Search Games" />
              </div>
        </div>
        <div class="maxax">
          <div class="scroller gradient" v-if="countries">
          <button @click="prev()" class="hidden md:block ">‹</button>
          <button @click="next()" class="hidden md:block ">›</button>
          <div class="country"  id="divi">
          <div class="dv8s" v-for="(country, l) in countries" :key="l">{{country.country}}</div>
        </div></div>
       </div>
       </div>
      <div class="gamers">
        <div class="competition">
          <ul v-for="(compe, i) in items" :key="i">
            <li class="compe" @click="Gogetdata(compe.header)">{{compe.header}}</li>
          </ul>
        </div>
      <div class="flexing1 results">
      <div><div v-if="loading" class="lad ">
        <div class="loading lds-hourglass"></div></div>
      <div class="griding" v-else >
       <card v-for="item in competition" :key="item.id" :item="item" :host="host"/>
      </div></div>
      </div>
      </div>
     <!-- <seo :header='seo.header_1' :body='seo.footer'/> -->
     </section>
     <!-- end -->
</template>

<script>
import { http, host } from '~/helpers/index.js'
// import cardportfolio from '~/components/cardportfolio.vue'
import Card from '~/components/card.vue'
// import Seo from '~/components/seo.vue'
export default {
  components: { Card },
  data(){
    return{
      compe :'',
      search: '',
      items: [],
      standin: 'Premier League',
      loading: false,
      competition: [],
      countries: [],
      gametype: 'soccer',
      soccer: 'Premier League',
      basket: 'NBA',
      tennis: 'ITF Dominican Republic 04A, Women Singles',
      host,
      pos: 0,
      sitepos: '',
      dif: 0
    }
  }, 
  created(){
    setInterval(() => {
      this.getdata(this.gametype, this.standin)
    }, 3000)
  },
  computed:{
    Issoccer(){
      return this.gametype === 'soccer'
    },
    IsTennis(){
      return this.gametype === 'tennis'
    },
    IsBasket(){
      return this.gametype === 'basket'
    }
  },
  methods :{
    next () {
      document.getElementById('divi').scroll({ top: 0, left: -2000, behavior: 'smooth' })
      // document.getElementById('divi').scrollLeft += 1440, 2000
    },
    prev () {
      console.log('......................')
      document.getElementById('divi').scroll({ top: 0, left: -2000, behavior: 'smooth' })
    },
    async Choose(game,standin) {
      this.getdata(game, standin)
    },
    async searching(search){
      this.search =search
      this.getdata(this.standin, this.gametype)
    },
    async Gogetdata(header){
      this.standin = header
      this.getdata(this.gametype, this.standin)
    },
    async getdata(game,standin) {
      this.gametype = game
      this.standin = standin
      console.log("helloooooooo1", this.standin, this.gametype)
    // this.scrollToTop()
    if ( this.items.length < 1 && this.competition.length < 1 ){this.loading = true}
            const {data} = await http.get(`/game`,{
            params:{
              game: this.gametype,
              standin: this.standin,
              search: this.search
            }
          })
            if (data.game_type === "soccer"){
              this.items = data.soccer.headers
              this.competition = data.soccer.results
              this.countries = data.soccer.countries
            }else if (data.game_type === "tennis"){
              this.items = data.tenis.headers
              this.competition = data.tenis.results
            }else {
              this.items = data.basket.headers
              this.competition = data.basket.results
            }
            this.loading =false
    },
    scrollToTop() {
        window.scrollTo(0, 0);
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
  @apply grid lg:grid-cols-3 2xl:grid-cols-4 container mt-5;
}
.gamers{
  @apply grid grid-cols-5 bg-gray-200;
}
.competition{
  @apply bg-green-700 hidden md:block;
}
.active {
  @apply bg-green-700;
}
.results{
  @apply col-span-4
}
.compe{
  @apply py-2 px-4 shadow-lg rounded-lg  cursor-pointer hover:bg-red-400 list-none text-white;
}
.lad{
  @apply w-screen h-screen flex justify-center items-center ;
}
.loading{
  @apply flex justify-center items-center;
}
.compename{
  @apply mt-14 text-2xl grid grid-cols-1 md:grid-cols-5 ;
}
.headering{
  @apply text-white mx-4 py-2;
}
.menucomps {
  @apply md:col-span-2 py-2 flex justify-start items-center text-white text-base;
}
.dvs{
  @apply hover:bg-green-700 cursor-pointer p-2  rounded-lg mr-4;
}
.dv8s{
  @apply hover:bg-green-700 cursor-pointer px-2  rounded-lg mr-4;
}
.search{
  @apply relative md:col-span-2 py-2;
}
.search-input{
  @apply border-b-2 rounded-lg p-2 ml-4 md:ml-0 w-11/12  right-1 focus:shadow-xl hover:bg-gray-200 focus:outline-none text-black;
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
  border-color: rgb(151, 54, 54) transparent rgb(151, 28, 28) transparent;
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
.country{
  @apply flex justify-between items-center bg-transparent overflow-scroll;
}
.sects::-webkit-scrollbar{
  visibility: hidden;
  /* direction: ltr; */
}
.divi{
  overflow-x: scroll;
}
button{
  position: absolute;
  top: -25%;
  font-size: 70px;
  color: green;
  cursor: pointer;
  background: transparent;
  border: transparent;
  left: -1.5%;
  z-index: 1;
}
button:nth-of-type(2){
  /* width: 100%; */
  left: 99.5%;
  text-align: right;
}
.positon1 {
  left: -720;
}
.scroller{
  @apply container mx-auto relative;
}
.maxax{
  @apply max-w-6xl mx-auto;
}
</style>