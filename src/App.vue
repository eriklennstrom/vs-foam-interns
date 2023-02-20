<script setup lang="ts">
import FoamSelect from '@/components/select/select.vue'
import FoamButton from '@/components/button/button.vue'

const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null
}

const changeFunc: (item: string) => void = (item) => { 
  console.log(item);  
}

const testOptions = [
  {
    id: '123',
    text: 'Testar',
    value: 'test'
  },
  {
    id: '123',
    text: 'Kakor',
    value: 'kakor'
  },
  {
    id: '123',
    text: 'Kaffe',
    value: 'kaffe'
  },
  {
    id: '123',
    text: 'Test Igen',
    value: 'igen'
  }
]

const testOptions2 = [
  {
    id: '123',
    text: 'Testar',
    value: 'test'
  },
  {
    id: '123',
    text: 'Kakor',
    value: 'kakor'
  },
  {
    id: '123',
    text: 'Kaffe',
    value: 'kaffe'
  },
  {
    id: '123',
    text: 'Test Igen',
    value: 'igen'
  }
]

const testOptions3 = [
  {
    id: '1',
    text: 'Testar',
    value: 'test'
  },
  {
    id: '2',
    text: 'Kakor',
    value: 'kakor'
  },
  {
    id: '3',
    text: 'Kaffe',
    value: 'kaffe'
  },
  {
    id: '4',
    text: 'Test Igen',
    value: 'igen'
  }
]

</script>

<template>
  <div class="wrapper">
    <!-- <FoamSelect 
      text="Cool Label" 
      :options="testOptions" 
      defaultoption="Something?"
      @change="changeFunc"
    />
    
    <FoamSelect
      text="LabelText"
      :options="testOptions2"
      position="top"
      sort
      @change="changeFunc"
    />-->
    <FoamSelect
      text="LabelText"
      :options="testOptions3"
      position="top"
      @change="changeFunc"
    /> 
    <FoamSelect />
    <!-- <FoamButton text="Dark Mode" variant="primary" @click="darkMode" /> -->
  </div>
</template>

<style scoped lang="scss">

body {
  background-color: #F6F8FA;
}
.wrapper {
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  gap: 2em;
  margin: 4em;
}

body{
  background-color: #668592;

}

</style>
