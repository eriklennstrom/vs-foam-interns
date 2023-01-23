<script setup lang="ts">
import FoamDropdownButton from '@/components/dropdown/dropdown-button.vue';
import FoamDropdownItem from '@/components/dropdown/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdown-divider.vue';
import FoamDropdownFilter from '@/components/dropdown/dropdown-filter.vue';

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
    <FoamDropdownButton
      icon="circle-aaaaaaaaa"
      variant="danger"
      text="Test Dropdown"
      align="start"
      :width="200"
    >
      <FoamDropdownItem
        icon="warning"
        type="button"
        text="Button"
        selected
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
        text="Google"
        type="link"
        to="http://www.google.se"
        secondary-text="Link to Göggle"
        @click="testFunctionThree('Test dropdown item 3')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Disabled"
        type="link"
        to="http://www.google.se"
        disabled
        secondary-text="Secondary Text"
        @click="testFunctionThree('Test dropdown item 3')"
      />
    </FoamDropdownButton>
    <FoamDropdownButton
      icon="circle-down"
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
    </FoamDropdownButton>
    <FoamDropdownButton
      icon="circle-down"
      variant="primary"
      text="Test Dropdown"
      align="end"
      disabled
    />

    <FoamDropdownButton
      icon="circle-aaaaaaaaa"
      variant="danger"
      text=""
      align="start"
    >
      <FoamDropdownItem
        icon="warning"
        type="button"
        text=""
        @click="testFunctionOne('Test dropdown item 1')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        text=""
        to="/test"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        text=""
        to="/test"
        :selected="true"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text=""
        type="link"
        to="http://www.google.se"
        secondary-text="Link to Göggle"
        @click="testFunctionThree('Test dropdown item 3')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text=""
        type="link"
        to="http://www.google.se"
        disabled
        secondary-text="Secondary Text"
        @click="testFunctionThree('Test dropdown item 3')"
      />
    </FoamDropdownButton>
  </section>

  <button @click="darkMode">
    DARK MODE!
  </button>

  <section>
    <FoamDropdownButton :width="200">
      <FoamDropdownFilter type="color" color="red" text="Color" />
      <FoamDropdownFilter
        type="color"
        color="blue"
        text="Color"
        selected
      />
      <FoamDropdownFilter
        type="color"
        color="green"
        text="Color"
        selected
      />
      <FoamDropdownFilter
        type="color"
        color="#003349"
        text="Color"
        selected
      />
      <FoamDropdownFilter type="color" color="purple" text="Color" />
      <FoamDropdownFilter type="color" color="yellow" text="Color" />
      <FoamDropdownFilter type="color" color="white" text="Color" />
      <FoamDropdownFilter type="color" color="brown" text="Color" />
      <FoamDropdownFilter type="color" color="black" text="Color" />
      <FoamDropdownFilter type="color" color="hotpink" text="Color" />
    </FoamDropdownButton>
    <FoamDropdownButton :width="50">
      <FoamDropdownFilter type="container" text="1jsakdjksajd adjksalj dsak" />
      <FoamDropdownFilter type="container" text="2" />
      <FoamDropdownFilter type="container" text="3" />
      <FoamDropdownFilter type="container" text="4" />
      <FoamDropdownFilter type="container" text="Detta är en längre text" />
      <FoamDropdownFilter type="container" text="6" />
      <FoamDropdownFilter type="container" text="7" />
      <FoamDropdownFilter type="container" text="Långordhärhaha" />
      <FoamDropdownFilter type="container" text="9" />
      <FoamDropdownFilter type="container" text="10" />
    </FoamDropdownButton>
    <FoamDropdownButton :width="120">
      <FoamDropdownFilter type="container" text="1" selected />
      <FoamDropdownFilter type="container" text="2" />
      <FoamDropdownFilter type="container" text="3" selected />
      <FoamDropdownFilter type="container" text="4" selected />
      <FoamDropdownFilter type="container" text="5" />
      <FoamDropdownFilter type="container" text="6" />
      <FoamDropdownFilter type="container" text="7" />
      <FoamDropdownFilter type="container" text="8" />
      <FoamDropdownFilter type="container" text="9" />
      <FoamDropdownFilter type="container" text="10" />
      <FoamDropdownFilter type="container" text="10" />
    </FoamDropdownButton>
    <FoamDropdownButton>
      <FoamDropdownFilter type="checkbox" text="Checkbox" />
      <FoamDropdownFilter type="checkbox" text="Checkbox" selected />
      <FoamDropdownFilter type="checkbox" text="Checkbox" />
    </FoamDropdownButton>
  </section>
  <section>
    <FoamDropdownButton>
      <FoamDropdownItem text="1" />
      <FoamDropdownItem text="test 2" />
      <FoamDropdownItem text="test 3" />
      <FoamDropdownItem text="SUB DROP" icon="arrow-down" subdropdown>
        <FoamDropdownItem text="test inuti 1" />
        <FoamDropdownItem text="test inuti 2" />
      </FoamDropdownItem>
      <FoamDropdownItem text="test 4" />
      <FoamDropdownItem text="test 5" />
      <FoamDropdownItem text="test 6" />
      <FoamDropdownItem text="test 7" />
    </FoamDropdownButton>
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

.dropdown-test {
  margin: 15rem 0;
}
</style>
