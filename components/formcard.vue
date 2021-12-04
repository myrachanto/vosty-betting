<template>
  <div class="main">

  <div class="header">
    Ready to build your website?
  </div>

  <div class="form">

    <div class="g">
      <input type="text" class="in" placeholder="Name"/>
    </div>

    <div class="g">
      <input type="text" class="in" placeholder="Email Address"/>
    </div>

    <div class="col-span-2">
      <textarea cols="30" rows="8" class="in" placeholder="Message"></textarea>
    </div>

    <div class="btn">
      <button class="sub">
        Submit
      </button>
    </div>

  </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.main{
  @apply max-w-2xl bg-white py-10 px-5 m-auto w-full mt-10;
}
.header{
  @apply text-3xl mb-6 text-center;
}
.form{
  @apply grid grid-cols-2 gap-4 max-w-xl m-auto;
}
.g{
  @apply col-span-2 lg:col-span-1;
}
.in{
  @apply border-solid border-gray-400 border-2 p-3 md:text-xl w-full;
}
.btn{
  @apply col-span-2 text-right;
}
.sub{
  @apply py-3 px-6 bg-green-500 text-white font-bold w-full sm:w-32;
}
</style>