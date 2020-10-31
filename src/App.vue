<template>
  <div id="app">
    <NavBar />
    <div class="app__product-container">
      <Card v-for="product in products" :key="product.id" :product="product" />
    </div>
  </div>
</template>

<script>
import products from "./data/products";
import NavBar from "./components/NavBar";
import Card from "./components/Card";
export default {
  name: "App",
  components: { NavBar, Card },
  data() {
    return {
      products: [],
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
    // console.log(this.$store.getters.getCart);
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
  /* justify-content: space-between; */
}
</style>
