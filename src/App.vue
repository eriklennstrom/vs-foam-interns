<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
import Buttonvue from '@/components/button/button.vue'
import { ref } from 'vue';



const buttonIcon1 = ref(false)
const iconflip: () => void = () => {
  buttonIcon1.value = !buttonIcon1.value
}


const darkMode: () => void = () => {
  const body = document.querySelector('body')

  body?.classList.toggle('dark')

  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null
}

</script>

<template>
  <section>

    <Buttonvue
      variant="danger-outline"
      text="Hover"
      icon="warning"
      dropdown
      :activeDropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      variant="danger"
      text="Hover"
      icon="warning"
      dropdown
      :activeDropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      variant="primary"
      text="Hover"
      icon="warning"
      dropdown
      :activeDropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      variant="ghost"
      text="Hover"
      icon="warning"
      dropdown
      :activeDropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      variant="secondary"
      text="Hover"
      icon="warning"
      dropdown
      :activeDropdown="buttonIcon1"
      @click="iconflip"
    />

  </section>
  <button @click="darkMode">
      DARK MODE!
    </button>
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
