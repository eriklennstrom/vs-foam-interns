<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import { ref, type Ref} from 'vue';
// import Icons from '@/components/icons/icons.vue'
// import Badge from '@/components/badge/badge.vue'
import Numberinput from '@/components/number-input/number-input.vue'

const test:Ref<number>= ref(0)


</script>


<template>
  <h1>{{ test }}</h1>
  <Numberinput v-model="test" text="Numbers time!" />

</template>

<style scoped lang="scss">

body {
  background-color: #F6F8FA;
}
section {

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 4em;
}
</style>
