<template>
     <div class="card">
        <nuxt-link :to="`/insights/${item.url}`" class="learn">
        <img :src="`${host}${item.picture}`" class="cardimg" :alt="item.alt" :title="item.alt"/></nuxt-link>
        <div class="cardbody">
          <h4 class="h4header">{{item.title}}</h4>
          <p class="cardbodyp" v-html="item.valor">
          </p>
          <nuxt-link :to="`/insights/${item.url}`" class="learn"> {{item.alias}}</nuxt-link>
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