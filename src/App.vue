<script setup lang="ts">
import ButtonVue from './components/Button/Button.vue';
import Icons from './components/icons/Icons.vue'
import Badge from './components/badge/Badge.vue'
</script>

<template>
  <section>
    <Badge type="danger" text="Hello Varnish" icon="warning" />

  </section>
  <ButtonVue type="primary" icon="warning" text="Yes" color="primary"/>
  <Icons iconType="warning" :iconSize="100" />
  <!-- <section>
    <div class="badge-success badge-strong-light" ><Icons iconType="fa-warning"/>Badge</div>
    <div class="badge-danger badge-outline">Badge</div>
    <div class="badge-secondary"><Icons iconType="fa-warning" color="warning"/> Badge</div>
    <div class="badge-secondary-400 badge-outline badge-disabled"><Icons iconType="fa-warning" color="primary-700"/> Badge</div>
    <div class="badge-success"><Icons iconType="fa-warning" /> Badge</div>
  </section> -->

</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}




</style>
