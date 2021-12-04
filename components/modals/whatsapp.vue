<template>
  <div class="modal-backdrop ">
    <div class="modal bg-green-500 dv8">

      <section class="modal-body  dv8">
        <slot name="body">
          <div class="">
        <div class="flex justify-center items-center font-bold text-xl my-2 py-3">Order via Whatsapp</div>
        <hr class="my-2"/>
        <div class="flex justify-center items-center font-bold text-xl my-2 py-3">{{item.name}}</div>
        <hr class="my-2"/>
    </div>
    <div class="drid">
      <label  class="text-left">Specifications:</label>
        <div v-if="item.services">
                <div class="m-1 p-1" v-for="(service,i) in item.services" :key="i" >
                  <input type="radio" :id="service.name" v-model="specs" @change="getprice(specs)" :value="service.name">
                  <label for="radio">{{ service.name }} @ ${{ formatcurrency(service.price) }}/=</label>
                </div>
          </div>
    </div>
    <div class="drid">
      <label  class="text-left">Color:</label>
        <div v-if="item.colors" class="flex justify-center items-center flex-wrap">
                <div class="m-1 p-1 bg-gray-200 rounded-xl" v-for="(color,i) in item.colors" :key="i" >
                  <input type="radio" v-model="colo"  :value="color.name">
                  <label for="radio">{{ color.name }}</label>
                </div>
          </div>
    </div>
          <div class="drid">
        <label class="w-48 flex justify-start items-center" for="">Delivery location</label>
          <input class="m-2 p-2 shadow-md" type="text" v-model="location" />
       </div>
          <div class="drid">
        <label class="text-left" for="">Quantity</label>
          <input class="m-2 p-2 shadow-md" type="number" v-model="quantity" />
    </div>
        </slot>
       </section>

      <footer class="flex justify-between items-center dv8">
        <button
          type="button"
          class="btn3 "
          @click="whatsappclose"
        >
          X
        </button>
         <a :href="`https://wa.me/254713629383/?text=Hello Dhavyies Collection. I would like to Order ${quantity} ${item.name} with ${specs} color- ${colo}  @ ksh ${price} each. Totaling ksh ${total} location ${location}`" target="_blank">
              <button class="btn3">
                Order
            </button>
            </a>
      </footer>
    </div>
  </div>
</template>
<script>
import formartMoney from '~/common/constants.js'
export default {
  name: 'Modal',
  props: ['item', 'whatsappclose'],
  data () {
    return {
      quantity: 1,
      specs: '',
      colo: '',
      price: '',
      location: ''
    }
  },
  computed: {
    total () {
      return this.price * this.quantity
    }
    // pricing () {
    //   const serv = this.item.services.find(service => service.price === size)
    //   return serv.price
    // }
  },
  methods: {
    formatcurrency (d) {
      // console.log(d)
      return formartMoney(d)
    },
    getcolor (co) {
      const serv = this.item.colors.find(colos => colos.name === co)
      this.colo = serv.name
    },
    getprice (specs) {
      console.log(specs)
      const serv = this.item.services.find(service => service.name === specs)
      this.price = serv.price
      console.log(this.price)
      return serv
    },
  }
}
</script>
<style scoped>
/* .group{
    @apply block my-1;
} */
.btn3{
  @apply mx-auto lg:mx-0 hover:underline text-gray-800 font-bold rounded-full py-4 px-8;
}
.svg{
  @apply h-4 w-4 md:h-5 md:w-5  mx-2;
}
.texti{
  text-align: left;
}
.dv8{
  @apply mx-4;
}
.drid {
  @apply grid md:grid-cols-2 grid-cols-1;
}
  .modal-backdrop {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(8, 5, 5, 0.3);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal {
    /* background: #FFFFFF; */
    box-shadow: 2px 2px 20px 1px;
    overflow-x: auto;
    display: flex;
    flex-direction: column;
  }
  .modal-header,
  .modal-footer {
    /* padding: 15px; */
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .modal-header {
    position: relative;
    /* border-bottom: 1px solid #eeeeee; */
    color: black;
    justify-content: space-between;
  }
  .modal-footer {
    /* border-top: 1px solid #eeeeee; */
    flex-direction: column;
    justify-content: flex-end;
  }
  .modal-body {
    position: relative;
    /* padding: 20px 10px; */
  }
  .btn-close {
    position: absolute;
    top: 0;
    right: 0;
    border: none;
    /* font-size: 20px; */
    /* padding: 10px; */
    cursor: pointer;
    font-weight: bold;
    color: #4AAE9B;
    background: transparent;
  }
  /* .btn-green {
    color: white;
    background: #4AAE9B;
    border: 1px solid #4AAE9B;
    border-radius: 2px;
  } */
</style>