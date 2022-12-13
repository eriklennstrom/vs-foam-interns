<script setup lang="ts">

import Icons from '../components/icons/Icons.vue'
</script>

<template>
  <h1>Home <Icons iconType="bi-alarm" color="blue" /></h1>
  <button>
    Button
    <Icons iconType="bi-alarm" color="green" />
  </button>
  <Icons iconType="bi-alarm" color="red" />
</template>

<style scoped lang="scss">
  button {
    padding: 1em 2em;
  }
</style>
