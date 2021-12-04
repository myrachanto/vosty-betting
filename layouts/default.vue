<template>
  <div class="wrapper wrapps ">
    <navbar class=""/>
    <Nuxt class="dfs5" />
    <enders class="footer"/>
  </div>
</template>

<script>
import Vue from 'vue'
import global from '../mixins/global'
Vue.mixin(global)
export default {
  // middleware: ['checkAuth']
}
</script>
<style>
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif Arial, Helvetica;
}
p{
    @apply py-1;
}
ol {
    /* list-style-position: inside; */
    list-style-type: decimal;
    list-style-position:inside;
    /* color: red; */
    /* margin-left: 16px; */
}
ul {
    /* list-style-position: inside; */
    /* list-style-type: decimal; */
    list-style-position:inside;
    /* color: red; */
    /* margin-left: 16px; */
}
ul ul {
  color: red;
}
ul > li > ul > li{
    /* list-style-position: inside; */
    /* list-style-type: decimal; */
    list-style-position:inside;
    padding-left: 16px;
    color: red;

}
ul > li > ul > li{
    /* list-style-position: inside; */
    /* list-style-type: decimal; */
    list-style-position:inside;
    padding-left: 16px;
    color: red;

}
h2{
  @apply text-xl;
}
.gradient {
        background: linear-gradient(90deg, #8a0b31 0%, #c9b4d1 100%);
}
.wrapper {
  position: relative;
  min-height: 100vh;
}
.wrapps{
  @apply gradient  flex flex-col min-h-screen;
}
.dfs5{
  @apply flex-grow pt-16 ;
}
.footer {
  /* position: absolute; */
  bottom: 0px;
  width: 100%;
  /* height: 200px; */
  /* background: linear-gradient(90deg, #0e0d0e 0%, #1b1b1b 100%); */
}
h3{
  @apply my-1;
}
</style>
