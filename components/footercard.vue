<template>
   <div class="">
     <!-- {{item.title.head}} -->
            <ul class="uls">
              <li class="lis">
                <nuxt-link :to="item.title.link" class="link">{{item.title.head}}</nuxt-link>
              </li>
              <li class="lis">
                <nuxt-link :to="item.link1.link" class="link">{{item.link1.head}}</nuxt-link>
              </li>
              <li class="lis">
                <nuxt-link :to="item.link2.link" class="link">{{item.link2.head}}</nuxt-link>
              </li>
              <li class="lis">
                <nuxt-link :to="item.link3.link" class="link">{{item.link3.head}}</nuxt-link>
              </li>
            </ul>
          </div>
</template>

<script>
export default {
props:["item"]
}
</script>

<style lang="scss" scoped>
.main{
  @apply flex-1 ;
}
.p{
  @apply uppercase text-gray-500 mb-0 md:mb-6;
}
.uls{
  @apply list-none mb-6;
}
.lis{
  @apply mt-0 md:mt-2 inline-block mr-2 md:block md:mr-0;
}
.link{
  @apply no-underline hover:underline text-white;
}
</style>