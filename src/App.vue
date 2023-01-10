<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
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


const settings = ref([])
const filters = [
  { id: 1, text: 'Gul', value: 'Gul', checked: false },
  { id: 2, text: 'Grön', value: 'Grön', checked: false },
  { id: 3, text: 'Blå', value: 'Blå', checked: false },
];
const removeFilter: (e:any) => void = (e) => {
  console.log(e)
}


const selectedChipThree = ref(false)
const functionThree: () => void = () => {
  selectedChipThree.value = !selectedChipThree.value
}

//  --------------------------------------------------------------------

// DARK MODE

const darkMode: () => void = () => {
  const body = document.querySelector('body')
  
  body?.classList.toggle('dark')

  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null
}
const hejhopp = ref([])


const tjenis: (filter:any) => void = (filter) => {
  filter.checked = !filter.checked
  filter.checked ? hejhopp.value.push(filter) : hejhopp.value = hejhopp.value.filter(x => x.text != filter.text)
  console.log(hejhopp.value);
  
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
    <div v-for="filter, id in filters" :key="id">
      <label :for="filter.text">{{ filter.text }}</label>
      <input type="checkbox" :name="filter.text" @click="tjenis(filter)">
    </div>
  </section>
  <section>
    <Chip
      variant="filter"
      icon="circle-down"
      text="1"
      outline
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
      v-for="setting in settings"
      :key="setting"
   
      :text="setting"

      removable
      @click="removeFilter($event)"
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
      variant="input"
      icon="circle-down"
      text="Removable Input Chip"
      outline
      removable
    />
  </section>
  <section>
    <Chip 
      v-for="filter, id in hejhopp" 
      :key="id" 
      variant="input"
      :text="filter.text" 
      removable 
      outline
    />
  </section>
  <section>
    <button @click="darkMode">
      DARK MODE!
    </button>
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
