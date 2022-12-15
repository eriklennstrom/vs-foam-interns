<script setup lang="ts">
import ButtonVue from './components/Button/Button.vue';
import Icons from './components/icons/Icons.vue'
import Badge from './components/badge/Badge.vue'
</script>

<template>
  <Badge type="secondary" text="Hello Varnish" icon="warning" />
  <section>
    <Badge type="danger" text="Hello Varnish" outline icon="warning" />
    <Badge type="primary" text="Hello Varnish" icon="arrow-down" />
    <Badge type="warning" text="Hello Varnish" outline icon="arrow-down" />
    <Badge type="success" text="Hello Varnish" icon="warning" />
  </section>
  <section>
    <Badge type="secondary" outline text="Hello Varnish" />
    <Badge type="danger" text="Hello Varnish" />
    <Badge type="primary" outline text="Hello Varnish" />
    <Badge type="warning" text="Hello Varnish" />
    <Badge type="success" outline text="Hello Varnish" />
  </section>
  <section>
    <Icons iconType="circle-down"/>
   
    <Icons iconType="warning" color="success"/>
    <Icons iconType="user-secret" color="primary"/>
  </section>

</template>

<style scoped lang="scss">
section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 4em;
}



</style>
