<template>
  <div>
    <div class="sections">
      <!-- <h2 class="header1">Services</h2> -->
      <div class="flexing">
      <div class="griding">
      <div class="comment">
      <h2 class="h2c">Our Mission</h2>
      <p>WekeleaHapa’s mission is to ensure that Kenyan bettors have the tools necessary to become profitable by helping them find the highest odds for their stakes and easily track their betting outcomes. We also seek to ensure tipsters’ transparency and accountability through a proven track record and profitability before they can sell their tips. </p>

      </div>
      <div class="imaging">
        <img src="~/static/soccer8.jpeg" alt="rresponsive dashboard" class="cardimg1" v-lazy-load/>
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
  @apply bg-gray-50;
}
.header1{
  @apply flex justify-center items-center text-2xl md:mx-10 md:px-10 font-semibold text-gray-900 ;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid md:grid-cols-2 container mx-4 gap-8 md:mt-10;
}
.comment{
  @apply text-gray-700 text-lg font-normal;
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