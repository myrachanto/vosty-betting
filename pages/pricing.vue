<template>
  <section class="rating-wrapper">
      <div class="rating-main">
        <h1 class="rating-header">
          Pricing
        </h1>
        <div class="rating-divede">
          <div class="rating-divi gradient"></div>
        </div>
        <div class="rating-cont">
          <div class="rating-cont1">
            <div class="rating-cont2">
              <div class="rating-cont3">Basic Package</div>
              <div class="rating-cont13 gradient"></div>
              <ul class="rating-cont4">
                <li class="rating-cont5">Responsive Design</li>
                <li class="rating-cont5">Content Management system (CMS)</li>
                <li class="rating-cont5">Seo Friendly</li>
                <li class="rating-cont5">Custom Design</li>
                <li class="rating-cont5">2 revisons </li>
              </ul>
            </div>
            <div class="rating-cont6">
                <h1 class="redding">Best suited for personal websites</h1>
              <div class="rating-cont7">
                $200
              </div>
              <div class="rating-cont8">
                  <div class="dwhats">
                <a href="https://wa.me/254729308456/?text=Hello Chantosweb developers. I would like to Order a Website of the Basic package of amount $200" target="_blank" class="">
                    <img src="/dax/whatsapp.png" alt="Order a website" class="what">
                </a>
                </div>
              </div>
            </div>
          </div>
          <div class="rating-cont10 order-2 md:order-3">
            <div class="rating-cont11">
              <div class="rating-cont12">Gold Package</div>
              <div class="rating-cont13 gradient"></div>
              <ul class="rating-cont14">
                  
                <li class="rating-cont5">Responsive Design</li>
                <li class="rating-cont5">Content Management system (CMS)</li>
                <li class="rating-cont5">Seo Friendly</li>
                <li class="rating-cont5">Custom Design</li>
                <li class="rating-cont5">5 revisons </li>
                <li class="rating-cont5">Social media Linking</li>
                <li class="rating-cont5">10 pages</li>
                <li class="rating-cont5">Easy to integrate with mobile app (API enabled)</li>
                <li class="rating-cont5">Highly secure( 2-factor authentication)</li>
              </ul>
            </div>
            <div class="rating-cont6">
                <h1 class="redding">Best suited for sophisticated websites with APIs</h1>
              <div class="rating-cont15">
                $500
              </div>
              <div class="rating-cont8">
                  <div class="dwhats">
       <a href="https://wa.me/254729308456/?text=Hello Chantosweb developers. I would like to Order a Website of the Gold package of amount $500" target="_blank" class="">
        <img src="/dax/whatsapp.png" alt="Order a website" class="what">
      </a>
      </div>
              </div>
            </div>
          </div>
          <div class="rating-cont1">
            <div class="rating-cont2">
              <div class="rating-cont3">
               Silver Package
              </div>
              <div class="rating-cont13 gradient"></div>
              <ul class="rating-cont4">
                <li class="rating-cont5">Responsive Design</li>
                <li class="rating-cont5">Content Management system (CMS)</li>
                <li class="rating-cont5">Seo Friendly</li>
                <li class="rating-cont5">Custom Design</li>
                <li class="rating-cont5">3 revisons </li>
                <li class="rating-cont5">Social media Linking</li>
                <li class="rating-cont5">7 pages</li>
              </ul>
            </div>
            <div class="rating-cont6">
                <h1 class="redding">Best suited for ecommerce websites </h1>
              <div class="rating-cont7">
                $300
              </div>
              <div class="rating-cont8">
                  <div class="dwhats">
       <a href="https://wa.me/254729308456/?text=Hello Chantosweb developers. I would like to Order a Website of the silver package of amount $300" target="_blank" class="">
        <img src="/dax/whatsapp.png" alt="Order a website" class="what">
      </a>
      </div>
               <!-- <nuxt-link to="/register"> <button class="rating-cont9  gradient">
                   Sign Up
                </button></nuxt-link> -->
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
</template>

<script>
export default {
  head () {
    const seo = this.seo || {
      title: 'Best Responsive Ecommerce, Website And Web Application Development Pricing',
      meta: 'Responsive Websites, Ecommerce and web application affordable pricing'
    }
    return {
      meta: [
        { hid: 'description', name: 'description', content: seo.meta },
        { hid: 'og:title', name: 'og:title', content: seo.title },
        { hid: 'og:description', name: 'og:description', content: seo.meta },
        { hid: 'og:type', name: 'og:type', content: seo.title },
        { hid: 'og:url', name: 'og:url', content: 'https://chantosweb.co.ke' },
        { hid: 'og:image', name: 'og:image', content: 'https://chantosweb.co.ke/logo.png' }
      ]
    }
  }
}
</script>

<style scoped>
ul {
 @apply list-none text-lg ml-4;
}
li {
  @apply flex;
}
li:before
{
    content: '✔';   
    margin-left: 1em;
    margin-right: .100em;
    color: green;
}
.uls
{
   padding-left: 20px;
   text-indent: 2px;
   list-style: none;
   list-style-position: outside;
} 
 ul li{
    @apply border-b py-4;
}
.rating-wrapper{
    @apply bg-gray-100 py-20;
}
.rating-main{
    @apply container mx-auto px-2 pt-4 pb-12 text-gray-800;
}
.rating-header{
    @apply w-full my-2 font-bold leading-tight text-center text-gray-800;
}
.rating-diveder{
    @apply w-full mb-4;
}
.rating-divi{
    @apply h-1 mx-auto  w-64 opacity-25 my-0 py-0 rounded-t;
}
.rating-cont{
    @apply flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4;
}
.rating-cont1{
    @apply flex flex-col w-5/6 lg:w-1/4 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4;
}
.rating-cont2{
    @apply flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden shadow;
}
.rating-cont3{
    @apply p-8 font-bold text-center border-b-4 text-xl;
}
.rating-cont4{
    @apply w-full text-center;
}
.redding{
    @apply text-lg text-green-700 font-bold text-center;
}
.rating-cont5{
    @apply py-2 border-b;
}
.rating-cont6{
    @apply flex-none mt-auto bg-white rounded-b rounded-t-none overflow-hidden shadow p-6;
}
.rating-cont7{
    @apply w-full pt-6 text-gray-600 font-bold text-center text-xl;
}
.rating-cont8{
    @apply flex items-center justify-center;
}
.rating-cont9{
    @apply mx-auto lg:mx-0 hover:underline  text-white font-bold rounded-full my-2 py-2 px-4 shadow-lg  transform transition hover:scale-105 duration-300 ease-in-out;
}
.rating-cont10{
    @apply flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-lg bg-white mt-4 sm:-mt-6 shadow-lg z-10;
}
.rating-cont11{
    @apply flex-1 bg-white rounded-t rounded-b-none overflow-hidden shadow;
}
.rating-cont12{
    @apply w-full p-8 font-bold text-center text-2xl;
}
.rating-cont13{
    @apply h-1 w-full  my-0 py-0 rounded-t;
}
.rating-cont14{
    @apply w-full text-center font-bold;
}
.rating-cont15{
    @apply w-full pt-6 font-bold text-center text-xl;
}
.dwhats{
  @apply bg-transparent border-transparent cursor-pointer  lg:block;
}
.dwhats1{
  @apply bg-transparent  border-transparent cursor-pointer block md:block;
}
.what{
  @apply w-16;
}
</style>
