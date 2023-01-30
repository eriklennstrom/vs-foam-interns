<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
import { ref, type Ref} from 'vue';
// import Icons from '@/components/icons/icons.vue'
// import Badge from '@/components/badge/badge.vue'
import Numberinput from '@/components/number-input/number-input.vue'

const test:Ref<number>= ref(0)


</script>


<template>

  <h1>{{ test }}</h1>

  <section>
  <Numberinput  :maxLength=5
  validationText="validation text"
   :is-valid=true v-model="test" text="helpertext super duper lång helpertextlol" helpertext="helpertext" />
  
   <Numberinput  :maxLength=5
   validationText="validation text"
   :is-valid=false v-model="test" text="Label" helpertext="helpertext" />
 
   <Numberinput
    v-model="test"
    text="Label that is longer"
    direction="vertical"
    :maxLength=5
    :maxValue=6999
    :is-valid=true
    validationText="validation text"
    helpertext="helpertext super duper lång helpertextlol"
  />

  <Numberinput
  v-model="test"
  text="Label that is the longest youve ever seen"
  direction="vertical"
  :maxLength=5
  :maxValue=6999
  :is-valid=false
  validationText="validation text"
  helpertext="helpertext"
/>

  <Numberinput
    v-model="test"
    text="Label"
    helpertext="helpertext" 
    direction="vertical"
    :max-length=5
    disabled
  />
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
