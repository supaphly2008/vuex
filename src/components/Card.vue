<template>
  <div class="card">
    <h2 class="card__title">{{ product.title }}</h2>
    <img :src="product.image" alt="" class="card__image" />
    <p class="card__price">${{ product.price }}</p>
    <Button @click.native="addToCart(product)">Add to Cart</Button>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  props: {
    product: {
      id: Number,
      price: Number,
      category: String,
      description: String,
      image: String,
      title: String,
    },
  },
  components: {
    Button,
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
  margin-bottom: 20px;
}

.card__image {
  width: 60%;
  height: 50%;
  object-fit: contain;
}

.card__price {
  margin: 10px 0;
}
</style>