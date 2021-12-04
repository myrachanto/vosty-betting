<template>
  <div>
    <div class="section">
      <div class="flexings">
      <div class="gridings">
      <div class="comment">
         <div >
      <h2>About us</h2><br>
      <h4>We provide the best responsive e commerce web design and develoment solutions to our clients.</h4><br>
      <p>
        Chantosweb developers is a web design and development firm that offers solution to web application needs in the realm 
        of e commerce for both simple and sophisticated web development. We offer our services to clients in need of </p>
        <ol class="ols">
        <li>Personal responsive websites.</li>
        <li>Responsive business websites .</li>
        <li>E commerce web application.</li>
        <li>E commerce Softwares among others.</li>
        </ol><p>
        Responsive nature of a website is becoming quite a figure in the world of internet today. Given that 
        Responsive websites tend to be prioritized by the search engines not to mention the fact that vast internet
        surfing is done via mobile phones and tablets</p>

    </div>
      </div>
      <div class="imaging">
        <img src="~/static/chantoms.png" alt="application dashboard" class="cardimg1"/>
      </div>
    </div>
    </div>
    </div>
     <!-- <seo :header='seo.header_1' :body='seo.footer'/> -->
  </div>
</template>

<script>
import { http } from '~/helpers/index.js'
// import seo from '~/components/seo.vue'
export default {
  // components: { seo },
   data(){
    return{
      title: 'Best Ecommerce Developers|Custom website Designers at an Afforadable Price'
    }
  },   
  async asyncData () {
    let seo = {}
    // let name = ''
    try {
      const { data } = await http.get(`/front/seo/aboutus`)
      // console.log(">>>>>>>>>>>>>>>>>>", data)
      seo = data
      return { seo }
    } catch (err) {
      console.log(err)
    }
  },
  head () {
    const seo = this.seo || {
      title: 'Best Responsive Ecommerce, Website And Web Application Development Firm',
      meta: 'Responsive Websites, Ecommerce and web application development firm At in Nairobi'
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
.section{
  @apply bg-gray-200  border border-b-2 py-4 pb-16 flex-grow;
}
.headerr{
  @apply flex justify-center items-center font-semibold text-gray-900;
}
.flexings{
  @apply flex justify-center items-center;
}
.gridings{
  @apply grid lg:grid-cols-2 container gap-4;
}
.comment{
  @apply text-gray-700 font-normal text-lg m-2 mx-5;
}
.imaging{
  @apply rounded overflow-hidden shadow-lg;
}
.cardimg1{
  @apply w-full px-4 lg:px-0 object-contain transform transition duration-500 hover:scale-125;
}
.ols{
  @apply ml-12;
}
</style>