<template>
  <div class="wraps">
    <div class="section">
      <h1 class="fds">More odds to the game between <span  class="vamos">{{game.team_a}}</span> and <span class="vamos">{{game.team_b}}</span></h1><br>
      <div class="gridder">
      <div class="cardi">
 <h2 class="fdsh2">Goal odds</h2><br>
      <div class="flexingheader ">
      <div class="">
      Goals
    </div>
      <div class="">
      Over
    </div>
      <div class="">
      Best odds
    </div>
      <div class="">
      Under
    </div>
      <div class="">
      Best odds
    </div>
    </div>    
    <div class="flexing ">
      <div class="">
      1.5
    </div>
      <div class="">
      {{game.goal_over_1p5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
      {{game.goal_under_1p5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      2.5
    </div>
      <div class="">
      {{game.goal_over_2p5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
      {{game.goal_under_2p5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div> 
    <div class="flexing ">
      <div class="">
      3.5
    </div>
      <div class="">
      {{game.goal_over_3p5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
      {{game.goal_under_3p5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      </div>
      <div class="cardi">
      
      <h2 class="fdsh2">The Team That will Win </h2><br>
      <div class="flexingheader ">
      <div class="">
      Team
    </div>
      <div class="">
      Win
    </div>
      <div class="">
      Best odds
    </div>
    </div>    
    <div class="flexing ">
      <div class="">
      {{game.team_a}}
    </div>
      <div class="">
      {{game.www_teama}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      {{game.team_b}}
    </div>
      <div class="">
      {{game.www_teamb}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      </div>      
      </div>
      
      <div class="cardi">
     
          <h2 class="fdsh2">Multiple Goals </h2><br>
      <div class="flexingheader ">
      <div class="">
      Goals
    </div>
      <div class="">
      Odds
    </div>
      <div class="">
      Best odds
    </div>
    </div>    
    <div class="flexing ">
      <div class="">
      1-2
    </div>
      <div class="">
      {{game.multiple_1_to_2}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      1-3
    </div>
      <div class="">
      {{game.multiple_1_to_3}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      1-4
    </div>
      <div class="">
      {{game.multiple_1_to_4}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      1-5
    </div>
      <div class="">
      {{game.multiple_1_to_5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      1-6
    </div>
      <div class="">
      {{game.multiple_1_to_6}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      2-3
    </div>
      <div class="">
      {{game.multiple_2_to_3}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      2-4
    </div>
      <div class="">
      {{game.multiple_2_to_4}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      2-5
    </div>
      <div class="">
      {{game.multiple_2_to_5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      2-6
    </div>
      <div class="">
      {{game.multiple_2_to_6}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      3-4
    </div>
      <div class="">
      {{game.multiple_3_to_4}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      3-5
    </div>
      <div class="">
      {{game.multiple_3_to_5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      3-6
    </div>
      <div class="">
      {{game.multiple_3_to_6}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      4-5
    </div>
      <div class="">
      {{game.multiple_4_to_5}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      4-6
    </div>
      <div class="">
      {{game.multiple_4_to_6}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      5-6
    </div>
      <div class="">
      {{game.multiple_5_to_6}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      7 plus
    </div>
      <div class="">
      {{game.multiple_7_plus}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
      No Goals
    </div>
      <div class="">
      {{game.nogoal}}
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>    
    </div>
      <div class="gridder">
      <div class="cardi">

    <h2 class="fdsh2">{{game.team_a}} multiple goals win odds</h2><br>
      <div class="flexing ">
      <div class="">
    {{game.team_a}} goals 1-2
    </div>
      <div class="">
    {{game.team_a_multiplegoals_1_to_2}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
    {{game.team_a}} goals 1-3
    </div>
      <div class="">
    {{game.team_a_multiplegoals_1_to_3}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
    {{game.team_a}} goals 2-3
    </div>
      <div class="">
    {{game.team_a_multiplegoals_2_to_3}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
    {{game.team_a}} goals 4+
    </div>
      <div class="">
    {{game.team_a_multiplegoals_4_plus}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      </div>
      <div class="cardi">

     <h2 class="fdsh2">{{game.team_b}} multiple goals win odds</h2><br>
      <div class="flexing ">
      <div class="">
    {{game.team_b}} goals 1-2
    </div>
      <div class="">
    {{game.team_b_multiplegoals_1_to_2}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
    {{game.team_b}} goals 1-3
    </div>
      <div class="">
    {{game.team_b_multiplegoals_1_to_3}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
    {{game.team_b}} goals 2-3
    </div>
      <div class="">
    {{game.team_b_multiplegoals_2_to_3}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    <div class="flexing ">
      <div class="">
    {{game.team_b}} goals 4+
    </div>
      <div class="">
    {{game.team_b_multiplegoals_4_plus}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      </div>
      </div>
      
      <div class="cardi">
     <h2 class="fdsh2">{{game.team_a}} win or multiple goals odds</h2><br>
      <div class="flexing ">
      <div class="">
    {{game.team_a}} win or over 2.5
    </div>
      <div class="">
    {{game.team_aor_over_2_p_5_yes}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
    {{game.team_a}} loss or over 2.5
    </div>
      <div class="">
    {{game.team_aor_over_2_p_5_no}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      <div class="flexing ">
      <div class="">
    {{game.team_a}} win or under 2.5
    </div>
      <div class="">
    {{game.team_aor_under_2_p_5_yes}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
    {{game.team_a}} loss or under 2.5
    </div>
      <div class="">
    {{game.team_aor_under_2_p_5_no}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    </div>
    
      <div class="cardi">
    <h2 class="fdsh2">Draw or multiple goals odds</h2><br>
      <div class="flexing ">
      <div class="">
    Draw or over 2.5
    </div>
      <div class="">
    {{game.team_aor_over_2_p_5_yes}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
    Draw or over 2.5
    </div>
      <div class="">
    {{game.team_aor_over_2_p_5_no}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      <div class="flexing ">
      <div class="">
    Draw or under 2.5
    </div>
      <div class="">
    {{game.team_aor_under_2_p_5_yes}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
    Draw or under 2.5
    </div>
      <div class="">
    {{game.team_aor_under_2_p_5_no}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>    
    </div>
    
      <div class="cardi">
     <h2 class="fdsh2">{{game.team_b}} win or multiple goals odds</h2><br>
      <div class="flexing ">
      <div class="">
    {{game.team_b}} win or over 2.5
    </div>
      <div class="">
    {{game.team_bor_over_2_p_5_yes}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
    {{game.team_b}} loss or over 2.5
    </div>
      <div class="">
    {{game.team_bor_over_2_p_5_no}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
      <div class="flexing ">
      <div class="">
    {{game.team_b}} win or under 2.5
    </div>
      <div class="">
    {{game.team_bor_under_2_p_5_yes}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
      <div class="">
    {{game.team_b}} loss or under 2.5
    </div>
      <div class="">
    {{game.team_bor_under_2_p_5_no}} 
    </div>
      <div class="">
      <img src="~/static/betika.png" alt="betika" class="betts" v-lazy-load/>
    </div>
    </div>
    </div>
    </div>
  </div>
</template>

<script>
import { http, host } from '~/helpers/index.js'
export default {
  data() {
    return {
      game:{}
    }
  },
  created(){
    // setInterval(() => {
      this.getdata()
    // }, 3000)
  },
  // created(){
  //   this.getdata()
  // },
  methods: {
    async getdata(){
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>", this.$route.params.id)
    const {data} = await http.get(`/gameresult/${this.$route.params.id}`)
      // console.log(">>>>>>>>>>>>>>>>>>>>>>>>", data)
      this.game = data
    }
  },
  head () {
    const seo = this.seo || {
      title: 'Online Help Regarding Website/Application',
      meta: 'Quick help about ecommerce most frequent asked questions'
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
.wraps{
  @apply bg-gray-100;
}
.section{
  @apply border border-b-2 py-8 container;
}
.fds{
  @apply text-center text-xl;
}
.fdsh2{
  @apply flex justify-start items-start px-4 pt-2 text-lg;
}
.gradient {
        background: linear-gradient(90deg, #8a0b31 0%, #8a0b31 100%);
}
.flexing{
  @apply flex justify-between items-center px-4 gradient my-1 py-1 bottom-1 text-white border-black;
}
.flexingheader{
  @apply flex justify-between items-center px-4 text-black p-4 font-semibold;

}
.griding{
  @apply grid lg:grid-cols-2 container gap-8;
}
.comment{
  @apply text-gray-700 font-normal text-lg m-2 mx-5;
}
.imaging{
  @apply rounded overflow-hidden;
}
.cardimg1{
  @apply w-full h-32 sm:h-full object-contain transform transition duration-500 hover:scale-125;
}
.ols{
  @apply ml-12;
}
.quiz{
 @apply text-black font-bold text-xl;
}
.answer{
  @apply text-gray-700 text-lg font-light mx-5 py-2;
}

.web{
  @apply my-2 text-blue-700 text-lg no-underline;
}
.gridder{
  @apply grid lg:grid-cols-2 gap-2;
}
.cardi{
  @apply bg-gray-200 shadow-lg  lg:px-4 2xl:px-0;
}
.betts{
  @apply w-24 h-14 -my-3;
}
.vamos{
  @apply text-red-700;
}
</style>