<template>
<div class="mais">
<div class="maxi">
    <div class="sectionseo">
      <h2 class="header1">{{header}}</h2>
      <div class="flexingw">
       <div class="container seox" v-html="body">
       </div>
      </div>
    </div>
    </div></div>
</template>
<script>
export default {
  props: ['header', 'body']

}
</script>
<style scoped>
.seox{
    @apply text-lg;
}
.mais{
    @apply bg-gray-100 pt-5;
}
.maxi{
    @apply bg-gray-100 container  mx-auto ;
}
.sectionseo{
  @apply px-4 md:px-0;
}
.header1{
  @apply flex justify-start items-center py-2 ;
}
.flexingw{
  @apply flex justify-start items-center;
}
</style>
