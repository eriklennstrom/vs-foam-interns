<script setup lang="ts">

import Icons from './components/icons/Icons.vue'
import Badge from './components/badge/Badge.vue'
</script>

<template>
  <section>
    <Badge type="secondary" text="Hello Varnish" icon="warning" />
    <Badge type="danger" text="Hello Varnish" icon="warning" />
    <Badge type="primary" text="Hello Varnish" icon="warning" />
    <Badge type="warning" text="Hello Varnish" icon="warning" />
    <Badge type="success" text="Hello Varnish" icon="warning" />
  </section>
  <section>
    <Badge type="secondary" text="Hello Varnish" />
    <Badge type="danger" text="Hello Varnish" />
    <Badge type="primary" text="Hello Varnish" />
    <Badge type="warning" text="Hello Varnish" />
    <Badge type="success" text="Hello Varnish" />
  </section>
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
  margin-bottom: 4em;
}




</style>
