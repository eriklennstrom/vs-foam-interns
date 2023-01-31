<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
<<<<<<< HEAD
import Buttonvue from '@/components/button/button.vue'
import { ref } from 'vue';



const buttonIcon1 = ref(false)
const iconflip: () => void = () => {
  buttonIcon1.value = !buttonIcon1.value
}


const darkMode: () => void = () => {
  const body = document.querySelector('body')

  body?.classList.toggle('dark')

  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body ? body.style.backgroundColor = '#F6F8FA' : null
=======
import Chip from '@/components/chip/chip.vue'
import { ref } from 'vue';

// TEST FUNCTIONS ----------------------------------------------------
const selectedChipOne = ref(false)
const functionOne: () => void = () => {
  selectedChipOne.value = !selectedChipOne.value
  setTimeout(() => {
    selectedChipOne.value = !selectedChipOne.value
  }, 5000);
}

const selectedChipTwo = ref(false)
const functionTwo: () => void = () => {
  selectedChipTwo.value = !selectedChipTwo.value
}

const selectedChipThree = ref(false)
const functionThree: () => void = () => {
  selectedChipThree.value = !selectedChipThree.value
}

const activeFilters:any = ref([])

const filters = [
  { id: 1, text: 'Gul', value: 'Gul', checked: false },
  { id: 2, text: 'Grön', value: 'Grön', checked: false },
  { id: 3, text: 'Blå', value: 'Blå', checked: false },
];

const filterChip: (filter:any) => void = (filter) => {
  filter.checked = !filter.checked
  
  let activeCopy = [...activeFilters.value]
  if(!filter.checked) {
    activeCopy = activeCopy.filter(x => x.id != filter.id)
  } else if(filter.checked) {
    activeCopy.push(filter)
  }
  activeFilters.value = [...activeCopy]
  console.log(activeFilters.value)
}
//  --------------------------------------------------------------------

// DARK MODE

const darkMode: () => void = () => {
  const body = document.querySelector('body')
  
  body?.classList.toggle('dark')

  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null
>>>>>>> ad39bfb (removed unnecessary variable)
}

</script>

<template>
<<<<<<< HEAD
  <section>
    <Buttonvue />
    <Buttonvue
      variant="primary"
      text="Hover"
=======
  <!-- <section>
    <Badge
      variant="dangejyhgr"
      text="Hello Varnish"
      outline
>>>>>>> ad39bfb (removed unnecessary variable)
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />
    <Buttonvue
      variant="danger"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      variant="danger-outline"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />


    <Buttonvue
      variant="secondary"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      variant="ghost"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />
  </section>
  <section>
    <Buttonvue
      disabled
      variant="primary"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      disabled
      variant="danger"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      disabled
      variant="danger-outline"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />

    <Buttonvue
      disabled
      variant="secondary"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />



    <Buttonvue
      disabled
      variant="ghost"
      text="Hover"
      icon="warning"
      dropdown
      :active-dropdown="buttonIcon1"
      @click="iconflip"
    />
  </section>
<<<<<<< HEAD


  <button @click="darkMode">
    DARK MODE!
  </button>
=======
  <section>
    <div v-for="filter, id in filters" :key="id">
      <label :for="filter.text">{{ filter.text }}</label>
      <input 
        type="checkbox" 
        :checked="filter.checked" 
        :name="filter.text" 
        @click="filterChip(filter)"
      >
    </div>
  </section>
  <section>
    <Chip
      variant="filter"
      icon="circle-down"
      text="1"
      outline
      disabled
      :selected="selectedChipOne"
      @click="functionOne"
    />
    <Chip
      variant="filter"
      icon="circle-down"
      text="2"
      outline
      removable
      :selected="selectedChipTwo"
      @click="functionTwo"
    />

    <Chip 
      variant="filter"
      icon="circle-down"
      text="Filter chip"
      removable
      :selected="selectedChipThree"
      @click="functionThree"
    />

    <Chip 
      variant="filter"
      text="Removable Input Chip"
      removable
    />
  </section>
  <section>
    <Chip 
      v-for="filter, id in activeFilters" 
      :key="id" 
      variant="input"
      :text="filter.text" 
      removable 
      outline
      @click="filterChip(filter)"
    />
  </section>
  <section>
    <Chip variant="input" selected removable />
    <Chip variant="input" outline />
    <Chip variant="input" removable />
    <Chip 
      variant="input"
      outline
      :selected="selectedChipThree"
      @click="functionThree"
    />
  </section>
  <section>
    <Chip variant="filter" />
    <Chip 
      variant="filter"       
      :selected="selectedChipTwo"
      @click="functionTwo" 
    />
  </section> -->
  <section>
    <h2>Input Default</h2>
    <Chip variant="input" disabled />
    <Chip variant="input" selected />
    <Chip variant="input" removable />
    <h2>Input Outline</h2>
    <Chip variant="input" outline />
    <Chip variant="input" outline selected />
    <Chip variant="input" outline removable />  
  </section>

  <section>
    <h2>Filter</h2>
    <Chip variant="filter" />
    <Chip variant="filter" selected />
  </section>
  <section>
    <button @click="darkMode">
      DARK MODE!
    </button>
  </section>
>>>>>>> ad39bfb (removed unnecessary variable)
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
