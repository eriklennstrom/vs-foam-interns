<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
import Buttonvue from '@/components/button/button.vue'
</script>

<template>
  <section>
    <Buttonvue
      variant="ghost"
      text="Hello Varnish"
      icon="warning"

    />
    <Buttonvue
      variant="primary"
      text="Hello Varnish"
      icon="warning"
    />
    <Buttonvue
      variant="secondary"
      text="Hello Varnish"
      icon="warning"
    />

    <Badge
      variant="dangejyhgr"
      text="Hello Varnish"
      outline
      icon="warning"
    />
    <Badge variant="primary" text="Hello Varnish" icon="arrow-down" />
    <Badge
      variant="warning"
      text="Hello Varnish"
      outline
      icon="arrow-down"
    />
    <Badge variant="success" text="Hello Varnish" icon="warning" />
  </section>
  <section>
    <Badge variant="secondary" outline text="Hello Varnish" />
    <Badge variant="danger" text="Hello Varnish" />
    <Badge variant="primary" outline text="Hello Varnish" />
    <Badge variant="warning" text="Hello Varnish" />
    <Badge variant="success" outline text="Hello Varnish" />
  </section>
  <section>
    <Icons icon="circle-down" />
   
    <Icons icon="warning" variant="success" />
    <Icons icon="user-secret" variant="danger" />
    <Icons />
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
