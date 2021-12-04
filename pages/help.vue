<template>
  <div>
    <div class="section">
      <h2 class="fds">Customer self help services</h2><br>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
         <div >
      <h3>Here are some of simple self help guide.</h3><br>
      <div class="comment">
        <ol>
          <li class="quiz">Can you help me build my own website?<br />
          <span class="answer">Yes but at cost well the first consultation is free</span></li>

          <li class="quiz">Can you guide me on how to build a career in web development?<br />
          <span class="answer">Well yes but i hope you have the guts to keep up with the pleasure of what it entails to be a  web developer</span></li>
         
        </ol>
        </div>
      <p class="web"><a href="https://www.chantosweb.com">Chech what we are all about!</a></p>
    </div>
      </div>
      <div class="imaging">
        <img src="~/assets/imgs/help2.jpeg" alt="help" class="cardimg1"/>
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
      title: 'Online Help Regarding Website/Application',
      meta: 'Quick help about ecommerce most frequent asked questions'
    }
    return {
      title: seo.title,
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
.section{
  @apply bg-gray-100  border border-b-2 py-8;
}
.fds{
  @apply text-center;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-2 container gap-8;
}
.comment{
  @apply text-gray-700 font-normal text-lg m-2 mx-5;
}
.imaging{
  @apply rounded overflow-hidden;
}
.cardimg1{
  @apply w-full h-32 sm:h-full object-contain transform transition duration-500 hover:scale-125;
}
.ols{
  @apply ml-12;
}
.quiz{
 @apply text-black font-bold text-xl;
}
.answer{
  @apply text-gray-700 text-lg font-light mx-5 py-2;
}

.web{
  @apply my-2 text-blue-700 text-lg no-underline;
}
</style>