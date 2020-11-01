<template>
  <div id="app">
    <NavBar @show-cart-modal="showModal = true" />
    <Spinner class="app__spinner" v-bind="spinnerConfig" v-if="isLoading" />
    <template v-else>
      <div class="app__product-container">
        <Card
          v-for="product in products"
          :key="product.id"
          :product="product"
        />
      </div>
      <Modal v-if="showModal" @close="showModal = false">
        <h3 slot="header">My Cart</h3>
      </Modal>
    </template>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
import Card from "./components/Card";
import Modal from "./components/Modal";
import Spinner from "vue-simple-spinner";

export default {
  name: "App",
  components: { NavBar, Card, Modal, Spinner },
  data() {
    return {
      showModal: false,
      spinnerConfig: {
        size: "medium",
        message: "Fetching Products...",
      },
    };
  },
  computed: {
    showCount() {
      return this.$store.getters.getCount;
    },
    products() {
      return this.$store.getters.getAllProducts;
    },
    isLoading() {
      return this.$store.getters.isLoading;
    },
  },
  methods: {
    increment() {
      this.$store.dispatch("increment", 1);
    },
  },
  created() {
    if (this.products.length === 0) {
      this.$store.dispatch("getAllProducts");
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
}
.app__product-container {
  margin-top: 80px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 20px;
  padding: 0 20px;
}

.app__spinner {
  position: relative;
  top: 40%;
}
</style>
