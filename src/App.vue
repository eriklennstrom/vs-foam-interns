<script setup lang="ts">
import chip from './components/chip/chip.vue';
import buttonvue from './components/button/button.vue';
const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null

}

</script>

<template>
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
