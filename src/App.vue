<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
import FoamDropdown from '@/components/dropdown/dropdown.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamButton from '@/components/button/button.vue'
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
  <section class="dropdown-test">
    <FoamDropdown variant="danger" text="test" >

      <!-- <FoamDropdownItem />
      <FoamDropdownItem />
      <FoamDropdownItem />
      <FoamDropdownItem /> -->
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>
      <h2>Test</h2>

    </FoamDropdown>
  </section>

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

.dropdown-test {
  margin: 15rem 0;
}
</style>
