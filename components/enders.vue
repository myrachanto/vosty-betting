<template>
<div class="cotna">
  <section class="main">
      <footercard  v-for="(item, i) in items" :key="i" :item="item"/>
       <ul class="uls">
              <li class="lis">
                <a href="#" target="_blank" class="link">SOCIAL</a>
              </li>
              <li class="lis">
                <a href="https://www.github.com/myrachanto" target="_blank" class="link">Github</a>
              </li>
              <li class="lis">
                <a href="https://www.linkedin.com/in/myrachanto" target="_blank" class="link">Linkedin</a>
              </li>
              <li class="lis">
                <a href="https://www.facebook.com/myrachanto" target="_blank" class="link">Facebook</a>
              </li>
            </ul>
    </section>
</div>
</template>

<script>
import footercard from './footercard.vue'
export default {
  components: { footercard },
  data(){
    return{
      items:[
        {
          title:{ head:"LINKS", link:'#'},
          link1: { head:'FAQ', link:'/fqa'},
          link2: { head:'Help', link:'/help'},
          link3: { head:'Support', link:'/support'},
        },
        {
          title:{ head:"LEGAL", link:'#'},
          link1: { head:'Terms', link:'#'},
          link2: { head:'Privacy', link:'#'},
          link3: { head:'Contract', link:'#'}
        },
        {
          title:{ head:"FIRM", link:'#'},
          link1: { head:'Blog', link:'/insights'},
          link2: { head:'Porfolio', link:'/portfolio'},
          link3: { head:'Contact', link:'/contact'}
        },
      ]
    }
  }

}
</script>

<style scoped>
/* .main{
  @apply ;
} */
.conta{
  @apply mx-4 lg:mx-0 -mt-10;
}
.mess{
  @apply my-4 text-3xl leading-tight;
}
.logo{
  @apply text-2xl lg:text-3xl text-white flex justify-start items-start mr-4;
}
.logo1{
  @apply h-10 w-10 mr-4;
} 
.uls{
  @apply list-none mb-6 ;
}
.lis{
  @apply mt-1 inline-block mr-1 md:block md:mr-0;
}
.link{
  @apply no-underline hover:underline text-black hover:text-gray-300;
}
</style>