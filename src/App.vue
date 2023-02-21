<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import { ref, type Ref } from 'vue';
// import Icons from '@/components/icons/icons.vue'
// import Badge from '@/components/badge/badge.vue'
import Numberinput from '@/components/number-input/number-input.vue';

const test: Ref<number> = ref(0);

const test2: Ref<number> = ref(0);

const darkMode: () => void = () => {
  const body = document.querySelector('body');
  body?.classList.toggle('dark');
  body?.classList.contains('dark')
    ? (body.style.backgroundColor = '#1F252F')
    : body
    ? (body.style.backgroundColor = '#F6F8FA')
    : null;
};
</script>

<template>
  <p>{{ test }}</p>
  <button @click="darkMode">
    DARK MODE!
  </button>
</template>

<style scoped lang="scss">

body {
  background-color: #F6F8FA;
}

section {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 4em;
}
</style>
