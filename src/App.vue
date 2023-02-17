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

</script>

<template>
  <div class="wrapper">
    <FoamSelect 
      text="To Do" 
      :options="['kaka', 'dator', 'test', 'kaffe']" 
      @change="changeFunc"
    />
    
    <FoamSelect
      text="To Do"
      :options="['kaka', 'dator', 'test', 'kaffe']"
      position="top"
      @change="changeFunc"
    />
    
    <FoamButton text="Dark Mode" variant="primary" @click="darkMode" />
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
