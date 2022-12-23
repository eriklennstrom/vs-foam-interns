<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import Icons from '@/components/icons/icons.vue'
import Badge from '@/components/badge/badge.vue'
import Chip from '@/components/chip/chip.vue'
import { ref } from 'vue';

const testList = ref([1, 2, 3, 4, 5, 6])
const filteredTestList = ref(testList.value)

const filterTest: (y: number) => void = (y) => {
  filteredTestList.value =  filteredTestList.value.filter(x => x != y) 
}

const revertFilter: (x:number) => void = (x) => {
  const arrCopy: number[] = [...filteredTestList.value]
  arrCopy.push(x)
  filteredTestList.value =  arrCopy.sort()
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
      @filterList="filterTest"
      @removefilter="revertFilter"
    />
    <Chip
      variant="static"
      icon="user-secret"
      text="2"
      @filter-list="filterTest"
      @remove-filter="revertFilter"
    />
    <Chip variant="static" icon="hdwajkdwa" />
    <Chip variant="filter" icon="check" />
    <Chip />
  </section>
  <section>
    <div v-for="item in filteredTestList" :key="item">
      <li>{{ item }}</li>  
    </div>
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
