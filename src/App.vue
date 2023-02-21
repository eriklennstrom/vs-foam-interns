<script setup lang="ts">
import { ref, type Ref } from 'vue';
import NumberInput from './components/number-input/number-input.vue';


const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null

}
const test:Ref =ref()

</script>

<template>
  <p>{{ test }}</p>
  <button @click="darkMode">
    DARK MODE!
  </button>

  <section>
    <NumberInput
      v-model="test"
      direction="vertical"
      label="Label" 
      helpertext="Helpertext"
      :is-valid="true"
      :maxlength="3"
    />

    <NumberInput
      v-model="test"
      direction="horizontal"
      label="Label" 
      helpertext="Helpertext"
      :is-valid="true"
      :maxlength="5"
      :maxvalue="99999"
    />
  </section>
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
