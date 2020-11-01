<template>
  <button class="button">
    <slot></slot>
  </button>
</template>

<style scoped>
.button {
  border: none;
  padding: 10px 10px;
  border-radius: 5px;
  color: #fff;
  background-color: rgb(73, 76, 255);
  cursor: pointer;
}
</style>

