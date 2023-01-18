<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
import FoamDropdown from '@/components/dropdown/dropdown.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import FoamButton from '@/components/button/button.vue'
import { ref } from 'vue';



const buttonIcon1 = ref(false)
const testFunctionOne: (param:string) => void = (param) => {
  console.log(param)
}
const testFunctionTwo: (param:string) => void = (param) => {
  console.log(param)
}

const testFunctionThree: (param:string) => void = (param) => {
  console.log(param)
}


const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null

}

</script>

<template>
  <section class="dropdown-test">
    <FoamDropdown icon="warning" variant="danger" text="Test Dropdown">
      <FoamDropdownItem
        icon="warning"
        type="button"
        text="Button"
        @click="testFunctionOne('Test dropdown item 1')"
      />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        text="Route /test"
        to="/TEST"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="google.se"
        type="route"
        to="http://www.google.se"
        @click="testFunctionThree('Test dropdown item 3')"
      />
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
