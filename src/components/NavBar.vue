<template>
  <div class="navbar">
    <p class="navbar__heading">My shopping cart</p>
    <div class="navbar__cart">
      <p class="navbar__cart__total">
        Subtotal: {{ getCart.total.toFixed(2) }}
      </p>
      <i class="fas fa-cart-plus" @click="$emit('show-cart-modal')"></i>
      <span class="navbar__cart__count">({{ getCart.count }})</span>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    getCart() {
      return this.$store.getters.getCart;
    },
  },
};
</script>

<style scoped>
.navbar {
  padding: 0 10px;
  color: #fff;
  background-color: rgb(73, 76, 255);
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
}
.navbar__heading {
  flex: 1;
}

.navbar__cart > i {
  cursor: pointer;
}

.navbar__cart__count {
  width: 5px;
  height: 5px;
  padding: 3px;
}
.navbar__cart__total {
  display: inline;
  margin-right: 15px;
}
</style>