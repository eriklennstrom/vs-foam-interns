<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import { ref, type Ref } from 'vue';
// import Icons from '@/components/icons/icons.vue'
// import Badge from '@/components/badge/badge.vue'
import Numberinput from '@/components/number-input/number-input.vue'

const test: Ref<number> = ref(0)

const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body ? body.style.backgroundColor = '#F6F8FA' : null
}

</script>


<template>
  <button @click="darkMode">
    DARK MODE!
  </button>
  <h1>{{ test }}</h1>

  <section>
    <Numberinput
      v-model="test"
      :max-length="5"
      validation-text="validation text"
      :is-valid="true"
      text="helpertext super duper lång helpertextlol"
      helpertext="helpertext"
    />

    <Numberinput
      v-model="test"
      :max-length="5"
      validation-text="validation text"
      :is-valid="false"
      text="Label"
      helpertext="helpertext"
    />

    <Numberinput
      v-model="test"
      text="Label that is longer"
      direction="vertical"
      :max-length="5"
      :max-value="6999"
      :is-valid="true"
      validation-text="validation text"
      helpertext="helpertext super duper lång helpertextlol"
    />

    <Numberinput
      v-model="test"
      text="Label that is the longest youve ever seen"
      direction="vertical"
      :max-length="5"
      :max-value="6999"
      :is-valid="false"
      validation-text="validation text"
      helpertext="helpertext"
    />

    <Numberinput
      v-model="test"
      text="Label"
      helpertext="helpertext"
      direction="vertical"
      :max-length="5"
      disabled
    />
  </section>
</template>

<style scoped lang="scss">
section {

  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: space-evenly;
  margin-bottom: 4em;
}
</style>
