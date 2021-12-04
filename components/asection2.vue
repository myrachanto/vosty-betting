<template>
  <div>
    <div class="sections">
      <h2 class="header1">Why us</h2>
      <div class="flexing">
      <div class="griding">
        <div class="imaging">
        <img src="~/static/soccer7.jpeg" alt="responsive web development" class="cardimg1"  v-lazy-load/>
      </div>
      <div class="comment">
      <h2 class="h2c">About our website designs and development experience</h2>
      <p>We have been in the industry designing simple websites, e commerce websites, web applications and content management system (CMS) for more than three years now</p>
       <br/>
       <h2>Our mision</h2>
       <p>Our mision is to ensure that our clients get responsive, efficient, fast loading and more importantly search engine optimized(SEO) friendly websites</p>

      </div>
      
    </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.sections{
  @apply bg-gray-50  -mt-3;
}
.header1{
  @apply flex justify-center items-center text-xl pt-7 mx-2 font-semibold text-gray-900 ;
}

.h2c{
  @apply my-2;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid md:grid-cols-2 mx-4 container gap-8 mt-3 md:mt-10 py-8;
}
.comment{
  @apply text-lg text-gray-700 font-normal;
}
.imaging{
  @apply rounded overflow-hidden shadow-lg;
}
.cardimg1{
  @apply w-full h-60 object-contain transform transition duration-500 hover:scale-125;
}
.br{
  @apply my-2;
}
</style>