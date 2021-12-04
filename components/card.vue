<template>
     <div class="card">
          <div class="cardbody">
          <h2 class="h4header">{{item.team_a}} <span class="vs">VS</span> {{item.team_b}}</h2>
          <hr />
          <h4 class="dv">Competition: <span class="vs">{{item.competition}}</span></h4>
          <h5 class="dv">Time: <span class="vs">{{item.dated}}</span></h5>
          <div class="odds">
            <div class="win dv8">Win</div>
            <div class="draw dv8">Draw</div>
            <div class="loss dv8">Loss</div>
          </div>
          <div class="odds">
            <div class="win pb ">{{item.team_a_win}}</div>
            <div class="draw pb">{{item.draw}}</div>
            <div class="loss pb">{{item.team_b_win}}</div>
          </div>
          <hr class="dv9"/>
          <div class="odds">
            <div class="win dv8">1 or X</div>
            <div class="draw dv8">X or 2</div>
            <div class="loss dv8">1 or 2</div>
          </div>
          <div class="odds">
            <div class="win pb ">{{item.team_a_win_or_draw}}</div>
            <div class="draw pb">{{item.team_b_win_or_draw}}</div>
            <div class="loss pb">{{item.team_a_win_or_team_b_win}}</div>
          </div>
          <hr class="dv9"/>
          <div class="odds1">
            <div class="win dv8">Over 2.5 goals</div>
            <div class="draw dv8">Below 2.5 goals</div>
          </div>
          <div class="odds1">
            <div class="win pb ">{{item.goal_over}}</div>
            <div class="draw pb">{{item.goal_under}}</div>
          </div>
          <nuxt-link :to="`${item.url}`" class="learn">{{item.alias}}</nuxt-link>
        </div>
        </div>
</template>

<script>
export default {
  props:['item', 'host']

}
</script>

<style lang="scss" scoped>
.gradient {
        background: linear-gradient(90deg, #5041a5 0%, #c9b4d1 100%);
}
.card{
  @apply bg-gray-200 rounded overflow-hidden shadow-lg;
}
.colortheme{
  @apply text-red-700;
}
.vs{
  @apply colortheme text-sm;
}
.pb{
  @apply colortheme text-sm cursor-pointer;
}
.dv8{
  @apply text-base text-green-700; 
}
.dv9{
  @apply my-2 text-green-700; 
}
.dv{
  @apply py-2;
}
.odds{
  @apply grid grid-cols-3;
}
.odds1{
  @apply grid grid-cols-2;
}
.cardimg{
  @apply  w-full h-32 sm:h-48 object-cover;
}
.h4header{
  @apply  text-xl text-gray-700 text-left leading-tight;
}
.cardbody{
  @apply m-4 text-lg text-gray-600 ;
}
.btn{
  @apply bg-gray-300 text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.ft{
  @apply flex justify-center items-center;
}
.learn{
  @apply no-underline hover:underline;
}
</style>