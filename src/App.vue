<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
import Chip from '@/components/chip/chip.vue'
import { ref } from 'vue';

// TEST FUNCTIONS ----------------------------------------------------
const selectedChipOne = ref(false)
const functionSomSkaKöras: () => void = () => {
  selectedChipOne.value = !selectedChipOne.value
  setTimeout(() => {
    selectedChipOne.value = !selectedChipOne.value
  }, 5000);
}

const selectedChipTwo = ref(false)
const functionSomSkaKörasTvå: () => void = () => {
  selectedChipTwo.value = !selectedChipTwo.value
}


const showChipThree = ref(true)
const selectedChipThree = ref(false)
const removeChipThree: () => void = () => {
  showChipThree.value = false
}
//  --------------------------------------------------------------------

// DARK MODE
const body = document.querySelector('body')
  
  body?.classList.toggle('light')
const darkMode: () => void = () => {
  const body = document.querySelector('body')
  
  body?.classList.toggle('light')
  body?.classList.toggle('dark')

  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : null
  body?.classList.contains('light') ? body.style.backgroundColor = '#DEE2E6' : null
}

</script>

<template>
  <section>
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
  <section>
    <Chip
      variant="filter"
      icon="circle-down"
      text="1"
      outline
      :selected="selectedChipOne"
      @click="functionSomSkaKöras"
    />
    <Chip
      variant="filter"
      icon="circle-down"
      text="2"
      outline
      removable
      :selected="selectedChipTwo"
      @click="functionSomSkaKörasTvå"
    />

    <Chip
      v-if="showChipThree"
      variant="input"
      icon="circle-down"
      text="3"
      outline
      removable
      :selected="selectedChipThree"
      @click="removeChipThree"
    />
    <Chip 
      variant="input"
      icon="circle-down"
    />
  </section>
  <section>
    <button @click="darkMode">
      DARK MODE!
    </button>
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
