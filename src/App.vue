<script setup lang="ts">
import FoamDropdown from '@/components/dropdown/dropdown.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';

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
    <FoamDropdown
      icon="warning"
      variant="danger"
      text="Test Dropdown"
      align="start"
    >
      <FoamDropdownItem
        icon="warning"
        type="button"
        text="Button"
        disabled
        @click="testFunctionOne('Test dropdown item 1')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        text="Route /test"
        to="/test"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        text="Route /test"
        to="/test"
        :selected="true"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="google.se"
        type="link"
        to="http://www.google.se"
        @click="testFunctionThree('Test dropdown item 3')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Disabled"
        type="link"
        to="http://www.google.se"
        disabled
        @click="testFunctionThree('Test dropdown item 3')"
      />
    </FoamDropdown>
    <FoamDropdown
      icon="warning"
      variant="primary"
      text="Test Dropdown"
      align="end"
    >
      <FoamDropdownItem
        icon="warning"
        type="button"
        text="Button"
        disabled
        @click="testFunctionOne('Test dropdown item 1')"
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
