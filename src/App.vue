<script setup lang="ts">

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
  <div style="height: 100vh" />
</template>

<style scoped lang="scss">

article {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-evenly;
  margin-bottom: 4em;
}
</style>
