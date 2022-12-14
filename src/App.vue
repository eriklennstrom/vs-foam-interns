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
  <section>
    <div class="badge-success badge-strong-light" ><Icons iconType="fa-warning"/>Badge</div>
    <div class="badge-danger badge-outline">Badge</div>
    <div class="badge-secondary"><Icons iconType="fa-warning" color="warning"/> Badge</div>
    <div class="badge-secondary-400 badge-outline badge-disabled"><Icons iconType="fa-warning" color="primary-700"/> Badge</div>
    <div class="badge-success"><Icons iconType="fa-warning" /> Badge</div>
  </section>

</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}




</style>
