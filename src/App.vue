<script setup lang="ts">

import Icons from './components/icons/Icons.vue'
</script>

<template>
  <h1>Home <Icons iconType="fa-warning" color="blue"/></h1>
  <button>button <Icons iconType="fa-warning" color="blue"/></button>
  <h3>Home <Icons iconType="fa-warning" color="blue"/></h3>
  <div>
    <Icons iconType="fa-warning" color="blue"/>
  </div>
</template>

<style scoped>
  button {
    padding: 1em 2em;
    font-size: 16px;
  }
</style>
