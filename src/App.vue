<template>
  <div id="app">
    <NavBar @show-cart-modal="showModal = true" />
    <div class="app__product-container">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
    <Modal v-if="showModal" @close="showModal = false">
      <h3 slot="header">My Cart</h3>
    </Modal>
  </div>
</template>

<script>
import products from "./data/products";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Modal from "./components/Modal";
export default {
  name: "App",
  components: { NavBar, Card, Modal },
  data() {
    return {
      products: [],
      showModal: false,
    };
  },
  computed: {
    showCount() {
      return this.$store.getters.getCount;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", 1);
    },
  },
  created() {
    // simulate api call
    this.products = products;
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.app__product-container {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}
</style>
