<script setup lang="ts">
import FoamDropdownButton from '@/components/dropdown/dropdownButton/dropdown-button.vue';
import FoamDropdownItem from '@/components/dropdown/dropdownItem/dropdown-item.vue';
import FoamDropdownDivider from '@/components/dropdown/dropdownDivider/dropdown-divider.vue';
import FoamDropdownInput from '@/components/dropdown/dropdownInput/dropdown-input.vue';
import FoamDropdownFilter from '@/components/dropdown/dropdownFilter/dropdown-filter.vue';
import FoamDropdown from '@/components/dropdown/dropdown.vue'
import { ref } from 'vue';

const testFunctionOne: (param:string) => void = (param) => {
  console.log(param)
}
const testFunctionTwo: (param:string) => void = (param) => {
  console.log(param)
}

const testFunctionThree: (param:string) => void = (param) => {
  console.log(param)
}

const selectTest = ref(false)
const testSelect: () => void = () => {
  selectTest.value = !selectTest.value
}

const selectTest1 = ref(false)
const testSelect1: () => void = () => {
  selectTest1.value = !selectTest1.value
}

const selectTest2 = ref(false)
const testSelect2: () => void = () => {
  selectTest2.value = !selectTest2.value
}
const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null

}

</script>

<template>
  <article class="dropdown-test">
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
        @click="testFunctionOne('Test dropdown item 1')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        to="/test"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
      <FoamDropdownDivider />
      <FoamDropdownItem
        icon="circle-down"
        type="route"
        to="/test"
        :selected="true"
        @click="testFunctionTwo('Test dropdown item 2')"
      />
    </FoamDropdownButton>
  </article>

  <button @click="darkMode">
    DARK MODE!
  </button>

  <article>
    <FoamDropdownButton />
    <FoamDropdownButton :width="200" variant="danger">
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
      <FoamDropdownFilter
        type="color"
        color="purple"
        text="Color"
        selected
      />
      <FoamDropdownFilter type="color" color="yellow" text="Color" />
      <FoamDropdownFilter type="color" color="white" text="Color" />
      <FoamDropdownFilter type="color" color="brown" text="Color" />
      <FoamDropdownFilter type="color" color="black" text="Color" />
      <FoamDropdownFilter type="color" color="hotpink" text="Color" />
    </FoamDropdownButton>
    <FoamDropdownButton :width="50" variant="primary">
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
    <FoamDropdownButton :width="120" variant="danger-outline">
      <FoamDropdownFilter type="container" text="1" :selected="true" />
      <FoamDropdownFilter type="container" text="2" />
      <FoamDropdownFilter
        type="container"
        text="3"
        :selected="selectTest2"
        @click="testSelect2"
      />
      <FoamDropdownFilter type="container" text="4" />
      <FoamDropdownFilter type="container" text="5" />
      <FoamDropdownFilter type="container" text="6" />
      <FoamDropdownFilter type="container" text="7" />
      <FoamDropdownFilter type="container" text="8" />
      <FoamDropdownFilter type="container" text="9" />
      <FoamDropdownFilter type="container" text="10" />
      <FoamDropdownFilter type="container" text="10" />
    </FoamDropdownButton>
    <FoamDropdownButton text="Test">
      <FoamDropdownFilter type="checkbox" text="Checkbox" selected />
      <FoamDropdownFilter
        type="checkbox"
        text="Checkbox"
        icon="warning"
        :selected="selectTest"
        @click="testSelect"
      />
      <FoamDropdownFilter type="checkbox" text="Checkbox" />
    </FoamDropdownButton>
    <FoamDropdownButton variant="ghost">
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
  </article>
  <article>
    <FoamDropdownInput text="Test Checkbox Function Extra long text">
      <FoamDropdownFilter type="checkbox" text="Checkbox 1" />
      <FoamDropdownFilter
        type="checkbox"
        text="Checkbox 2"
        :selected="selectTest"
        @click="testSelect"
      />
      <FoamDropdownFilter type="checkbox" text="Checkbox 3" />
    </FoamDropdownInput>

    <FoamDropdownInput text="Test Color Function">
      <FoamDropdownFilter type="color" text="Blue" color="blue" />
      <FoamDropdownFilter
        type="color"
        text="Red"
        color="red"
        :selected="selectTest1"
        @click="testSelect1"
      />
      <FoamDropdownFilter type="color" text="Green" color="green" />
      <FoamDropdownFilter type="color" text="Pink" color="hotpink" />
      <FoamDropdownFilter type="color" text="Yellow" color="yellow" />
      <FoamDropdownFilter type="color" text="Purple" color="purple" />
      <FoamDropdownFilter type="color" text="Brown" color="brown" />
    </FoamDropdownInput>

    <FoamDropdownInput text="Test Container Function">
      <FoamDropdownFilter type="container" text="1" :selected="true" />
      <FoamDropdownFilter
        type="container"
        text="2"
        :selected="selectTest2"
        @click="testSelect2"
      />
      <FoamDropdownFilter type="container" text="3" :selected="true" />
      <FoamDropdownFilter type="container" text="4" :selected="true" />
      <FoamDropdownFilter type="container" text="5" />
      <FoamDropdownFilter type="container" text="6" />
      <FoamDropdownFilter type="container" text="7" />
      <FoamDropdownFilter type="container" text="8" />
      <FoamDropdownFilter type="container" text="9" />
      <FoamDropdownFilter type="container" text="10" />
      <FoamDropdownFilter type="container" text="10" />
    </FoamDropdownInput>
  </article>
  <article>
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
    <FoamDropdownInput text="Links" placeholder="Search links...">
      <FoamDropdownItem text="Google" to="https://www.google.se" type="link" />
      <FoamDropdownItem text="Aftonbladet" to="https://www.aftonbladet.se" type="link" />
      <FoamDropdownItem text="Varnish Software" to="https://varnish-software.teamtailor.com/#jobs" type="link" />
    </FoamDropdownInput>
  </article>
  <article>
    <FoamDropdownButton text="Item Test" align="end" :width="250">
      <FoamDropdownItem text="Google" to="https://www.google.se" type="link" />
      <FoamDropdownItem text="Aftonbladet" to="https://www.aftonbladet.se" type="link" />
      <FoamDropdownItem text="Varnish Software" to="https://varnish-software.teamtailor.com/#jobs" type="link" />
    </FoamDropdownButton>
    <FoamDropdownButton text="Find Jobs" align="start" variant="primary">
      <FoamDropdownItem text="Google" to="https://www.google.se" type="link" />
      <FoamDropdownItem text="Arbetsförmedlingen" to="https://arbetsformedlingen.se/" type="link" />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Varnish Software"
        to="https://varnish-software.teamtailor.com/#jobs"
        type="link"
        disabled
      />
    </FoamDropdownButton>
    <FoamDropdownButton text="Find Jobs" align="end" variant="danger-outline">
      <FoamDropdownItem text="Google" to="https://www.google.se" />
      <FoamDropdownItem text="Arbetsförmedlingen" to="https://arbetsformedlingen.se/" type="link" />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Varnish Software"
        to="https://varnish-software.teamtailor.com/#jobs"
        type="link"
        disabled
      />
    </FoamDropdownButton>
    <FoamDropdownItem w />
  </article>
  <article>
    <p>TEST</p>
    <FoamDropdown text="Test Default">
      <FoamDropdownItem text="Google" to="https://www.google.se" />
      <FoamDropdownItem text="Arbetsförmedlingen" to="https://arbetsformedlingen.se/" type="link" />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Varnish Software"
        to="https://varnish-software.teamtailor.com/#jobs"
        type="link"
        disabled
      />
    </FoamDropdown>
    <FoamDropdown text="Test Button" role="button" variant="danger">
      <FoamDropdownItem text="Google" to="https://www.google.se" />
      <FoamDropdownItem text="Arbetsförmedlingen" to="https://arbetsformedlingen.se/" type="link" />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Varnish Software"
        to="https://varnish-software.teamtailor.com/#jobs"
        type="link"
        disabled
      />
    </FoamDropdown>
    <FoamDropdown
      text="Test Input"
      role="input"
      label="Test Label"
    >
      <FoamDropdownItem text="Google" to="https://www.google.se" />
      <FoamDropdownItem text="Arbetsförmedlingen" to="https://arbetsformedlingen.se/" type="link" />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Varnish Software"
        to="https://varnish-software.teamtailor.com/#jobs"
        type="link"
        disabled
      />
    </FoamDropdown>
    <FoamDropdown
      role="input"
      label="Test TOP"
      position="top"
      placeholer="Test ph"
    >
      <FoamDropdownItem text="Google" to="https://www.google.se" />
      <FoamDropdownItem text="Arbetsförmedlingen" to="https://arbetsformedlingen.se/" type="link" />
      <FoamDropdownDivider />
      <FoamDropdownItem
        text="Varnish Software"
        to="https://varnish-software.teamtailor.com/#jobs"
        type="link"
        disabled
      />
    </FoamDropdown>
  </article>
  <article>
    <div style="height: 100vh" />
  </article>
</template>

<style scoped lang="scss">

article {
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
