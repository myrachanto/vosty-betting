<template>
<div class="section2">
<div class="c-div ">
<div class="c-wrapper">
  <div class="c-d ">
    <div class="c-m">
      <img class="c-img" src="~/assets/imgs/contact.jpg" alt="golang development">
    </div>
    <div class="c">
      <div class="c-header">More Info</div>
      <div class="contact-form">
        <form name="contact" method="POST" data-netlify="true">
              <p class="in">
                <label>Your Name: <input type="text" name="name" class="inpu" /></label>   
              </p>
              <p class="in">
                <label>Your Email: <input type="email" name="email" class="inpu" /></label>
              </p>
              <p class="in">
                <label>Message: <textarea class="inpu" name="message"></textarea></label>
              </p>
              <!-- <input type="hidden" name="form-name" value="contact"> -->

              <p class="inbtn">
                <button type="submit" class="btn3">Submit</button>
                or
       <a href="https://wa.me/254729308456/?text=Hello Chantosweb developers. I would like to Order Website ..." target="_blank">
        <img src="/dax/whatsapp.png" alt="Order a website" class="what">
       </a>
              </p>
            </form>

      </div>
    </div>
  </div>
</div>
</div>
</div>
</template>

<script>
export default {
 
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

<style lang="scss" scoped>
.section2{
  @apply bg-gray-100  border border-b-2 flex-grow mt-5;
}
.c-div{
  @apply bg-gray-100;
}
.c-wrapper{
  @apply mx-auto  bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl;
}
.c-d{
  @apply md:flex;
}
.inpu{
  @apply border rounded-lg w-full p-2 outline-none focus:shadow-inner;
}
.c-m{
 @apply md:flex-shrink-0;
}
.web{
  @apply text-xl font-bold text-gray-500;
}
.c{
  @apply p-8;
}
.c-img{
  @apply h-full w-full object-cover md:w-60;
}
.c-header{
  @apply uppercase tracking-wide text-xl  text-center text-indigo-500 font-semibold;
}
.c-content{
  @apply block mt-1 text-lg leading-tight font-medium text-black hover:underline;
}
.c-mes{
  @apply mt-2 text-gray-700 font-semibold text-xl ;
}
.email{
  @apply my-2;
}
.web{
  @apply text-gray-700 no-underline text-xl;
}
.in{
  @apply my-2;
}
.messag{
  @apply w-full mt-4 h-full py-2 text-gray-700 border rounded-lg focus:outline-none;
}
.tes{
  @apply ml-4 text-gray-500 p-2 m-1 bg-transparent;
}
.inbtn{
  @apply flex justify-between items-center;
}
.btn3{
  @apply bg-white text-gray-800 mx-auto lg:mx-0 hover:underline text-white font-bold rounded-full my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-lg transform transition hover:scale-105 duration-300 ease-in-out;
}
.dwhats{
  @apply bg-transparent  border-transparent cursor-pointer;
}
.what{
  @apply w-12;
}
</style>