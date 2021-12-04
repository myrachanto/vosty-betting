<template>
  <div>
    <div class="section">
      <h2 class="fds">Customer Support services</h2><br>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
         <div >
      <div class="comment">
        <ol>
          <li class="quiz">How many revisions do offer after hosting a website?<br />
          <span class="answer">We offer two revisions including the go ahead during hosting</span></li>

          <li class="quiz">How much do you charge for extra revisions?<br />
          <span class="answer">That depends on the website or the application or the work needed to be done</span></li>
         
        </ol>
        </div>
      <p class="web"><a href="https://www.chantosweb.com/contact">Chech what we are all about!</a></p>
    </div>
      </div>
      <div class="imaging">
        <img src="~/assets/imgs/support.jpeg" alt="support" class="cardimg1"/>
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
      title: 'Ecommerce Website Development Online Support ',
      meta: 'Quick support about ecommerce most frequent asked questions'
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
  @apply text-gray-700 text-lg font-normal m-2 mx-5;
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

</style>