<script setup lang="ts">

import Icons from '../components/icons/icons.vue'
</script>

<template>
  <h1>Home <Icons icon-type="bi-alarm" color="blue" /></h1>
  <button>
    Button
    <Icons icon-type="bi-alarm" color="green" />
  </button>
  <Icons icon-type="bi-alarm" color="red" />
</template>

<style scoped lang="scss">
  button {
    padding: 1em 2em;
  }
</style>
