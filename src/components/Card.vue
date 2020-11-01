<template>
  <div class="card">
    <h2 class="card__title">{{ product.title }}</h2>
    <p class="card__price">${{ product.price }}</p>
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
  max-width: 300px;
  border: 1px solid darkgray;
  border-radius: 5px;
  padding: 15px 10px;
}
.card__title {
  font-size: 16px;
}
.card__price {
  margin: 10px 0;
}
</style>