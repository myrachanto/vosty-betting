<template>
     <div class="card1"><img :src="`${host}${item.picture}`" class="cardimg" :alt="item.alt" :title="item.alt" v-lazy-load/>
        <div class="cardbody">
          <!-- {{host}}{{item.img}} -->
          <h4 class="h4header">{{item.title}}</h4>
          <p class="cardbodyp" v-html="item.description">
          </p>
          <div v-if="item.url !== '-'"><a :href="`${item.url}`" target="_Blank" class="ads">{{item.alias}}</a></div>
        </div>
        </div>
</template>

<script>
export default {
  props:['item', 'host']

}
</script>

<style lang="scss">
.card1{
  @apply bg-gray-200 rounded overflow-hidden shadow-lg;
}
.cardimg{
  @apply  w-full h-60 object-contain;
}
.h4header{
  @apply font-semibold text-xl md:text-2xl text-gray-700 text-left py-1 leading-tight;
}
.cardbody{
  @apply m-4 text-lg text-gray-600;
}
.ads{
  @apply text-sm;
}
</style>