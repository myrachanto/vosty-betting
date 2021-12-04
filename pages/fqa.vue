<template>
  <div>
    <div class="section">
      <h2 class="fed">Frequent asked questions</h2><br>
      <div class="flexing">
      <div class="griding">
      <div class="comment">
         <div >
      <h3>Here are some of the most frequent questions in regard to web development and website design.</h3><br>
      <div class="comment">
        <ol>
          <li class="quiz">How much does a simple website cost?<br />
          <span class="answer">As low $100 but It depends on what you want accomplished for your website</span></li>

          <li class="quiz">Suppose i want a website build within a  day is that possible?<br />
          <span class="answer">In programming and science Nothing is impossible given the right resources and time</span></li>
          <li class="quiz">If I have a design in mind or a website i want emulated is it possible to get what i want?<br />
          <span class="answer">This is a tricky question and thus the best answer is that we do our best to appease a customer</span></li>

          <li class="quiz">How much does a single-page website cost?<br />
          <span class="answer">As low $100 but the price defers with the urgency rate- how fast the customer wants it delivered</span></li>

          <li class="quiz">How much does a an e-commerce website cost?<br />
          <span class="answer">Every customer has specific needs in regards to what they want reflected on they final product and thus its hard to estimate the amount. Simply put e-commerce shopping website are alittle expensive and the best way to get a figure is to contact us</span></li>

          <li class="quiz">How much time does a an online application takes to desing and build?<br />
          <span class="answer">Well online applications differ in their application and sophistication thus its hard to estimate the amount of time it will take to build one.</span></li>

          <li class="quiz">Which is the best technology to advice on when one wants a website/web application<br />
          <span class="answer">This is a complex question given the large number of technologies out there.
            Look at it this way one can write the same sentence in chinesse, spanish, english, german ect. if you proficient in the languages the receipient would understand what you need. <br/>
            Yes some technologies are efficient than others but it all comes down to the type of application you want build and its sophistication
            </span></li>
        </ol>

        </div>
      <p class="web"><a href="https://www.chantosweb.com">Chech what we are all about!</a></p>
    </div>
      </div>
      <div class="imaging">
        <img src="~/assets/imgs/fqa3.jpeg" alt="frequent asked questions" class="cardimg1"/>
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
      title: 'Ecommerce Website Frequent Asked Questions',
      meta: 'Answers to ecommerce websites, Frequent asked Websites Questions, application development'
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
.header{
  @apply flex justify-center items-center text-3xl md:text-5xl font-semibold text-gray-900;
}
.fed{
  @apply mx-auto text-center;
}
.flexing{
  @apply flex justify-center items-center;
}
.griding{
  @apply grid lg:grid-cols-2 container gap-8 ;
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

.email{
  @apply my-2 text-left;
}
.web{
  @apply my-2 text-blue-700 text-lg no-underline;
}
</style>