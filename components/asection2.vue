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
      <!-- <h2 class="h2c">About our website designs and development experience</h2> -->
      <p>We have been engaged in betting since it became mainstream in Kenya. We have seen the industry grow and major players join the industry. However, we have also seen the hurdles increase from a lack of good odds comparison tools to unscrupulous cons who pose as professional tipsters. These two main obstacles, combined with the taxes imposed by the government in 2018, make it hard for Kenyan bettors to be profitable. WekeleaHapa is the first of a kind website in Kenya dedicated to removing these hurdles and sanitizing the already tarnished name of a ‘Gambler.’ We want to prove that there can also be professional bettors who can make a living from betting. Join us on this incredible journey to ‘sanitize’ ourselves and prove the naysayers wrong!</p>
       <br/>
       <!-- <h2>Our mision</h2>
       <p>WekeleaHapa’s mission is to ensure that Kenyan bettors have the tools necessary to become profitable by helping them find the highest odds for their stakes and easily track their betting outcomes. We also seek to ensure tipsters’ transparency and accountability through a proven track record and profitability before they can sell their tips. </p> -->

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