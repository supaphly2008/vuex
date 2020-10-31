<template>
  <div class="card">
    <h2>{{ product.name }}</h2>
    <p>NT${{ product.price }}</p>
    <button @click="addToCart(product)">Add to Cart</button>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      id: String,
      name: String,
      price: Number,
    },
  },
  methods: {
    addToCart(product) {
      this.$store.dispatch("addToCart", product);
    },
  },
};
</script>

<style scoped>
.card {
  text-align: center;
  width: 200px;
  border: 1px solid darkgray;
  border-radius: 5px;
  padding: 15px 0;
}
</style>