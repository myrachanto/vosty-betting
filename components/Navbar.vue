<template>
<div class="fixr">
  <header class="header">
    <div class="nav">
      <nuxt-link to="/" class="listy">
      <div class="logo"> 
        <!-- <img src="~/assets/imgs/logo.png" class="logo1"/> -->
        <span class="chantos1"><span class="chantos">Bet</span> Tips</span>
      </div>
      </nuxt-link>
      <div class="menu1" @click="isOpen = !isOpen">
          <svg xmlns="http://www.w3.org/2000/svg" class="svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
      </div>
    </div>
    <nav :class="isOpen ? 'block' : 'hidden'" class="menu2">
      <nuxt-link to="/" class="menulist2">Home</nuxt-link>
      <nuxt-link to="/games" class="menulist2">Games</nuxt-link>
      <nuxt-link to="/portfolio" class="menulist2">Tipster</nuxt-link>
      <nuxt-link to="/about" class="menulist2">Aboutus</nuxt-link>
      <nuxt-link to="/insights" class="menulist2">Insights</nuxt-link>
      <nuxt-link to="/contact" class="menulist2">Contact</nuxt-link> 
    </nav>
  </header>
      <hr class="hr" />
</div>
</template>

<script>
export default {
  data() {
    return {
      search: '',
      isOpen: false,
    }
  },
  watch:{
    $route (to, from){
        this.isOpen = false;
    }
},
}
</script>
<style scoped>
.block{
  display: block;
}
.hidden{
  display: none;
}
.gradient {
        background: linear-gradient(90deg, #8a0b31 0%, #c9b4d1 100%);
}
.chantos1{
  @apply  text-xl ;
}
.chantos{
  @apply text-white md:text-gray-200;
}
.fixr{
  @apply fixed w-full gradient z-30 top-0 mb-10 text-white;
}
.header{
  @apply bg-transparent lg:flex lg:justify-between lg:items-center xl:px-4 lg:py-3 mx-auto justify-around items-center border-current ;
}
.nav{
  @apply flex items-center justify-between px-4 py-3 xl:p-0;
}
.logo{
  @apply text-2xl lg:text-3xl text-white flex justify-center items-center;
}
.logo1{
  @apply h-7 w-7 md:h-10 md:w-10 mr-4;
}
.svg{
  @apply h-8 w-8;
}
.menu1{
  @apply lg:hidden flex justify-between items-center ;
}
.menubtn{
  @apply block text-gray-500 hover:text-white focus:text-white focus:outline-none;
}
.menu2{
  @apply space-x-0 px-2 pt-2 pb-4 lg:flex lg:p-0;
}
.listy{
  text-decoration: none;
}
.menulist2{
  @apply mt-1 block listy px-2 py-1 text-white lg:text-black text-lg rounded hover:text-white lg:mt-0 lg:ml-2;
}
.btn{
   @apply gradient px-4 py-2 text-blue-500 rounded-lg hover:bg-emerald-100 hover:text-green-700;
 }
.btn1{
  @apply gradient mx-auto listy lg:mx-0 hover:underline text-white font-bold rounded-full my-2 py-2 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.hr{
  @apply border-b border-gray-100 opacity-25 my-0 py-0;
}
.dwhats{
  @apply bg-transparent border-transparent cursor-pointer  lg:block;
}
.dwhats1{
  @apply bg-transparent  border-transparent cursor-pointer block md:block;
}
.what{
  @apply w-7;
}
</style>