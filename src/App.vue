<script setup lang="ts">
// import ButtonVue from './components/Button/Button.vue';
// import Icons from '@/components/icons/icons.vue'
// import Badge from '@/components/badge/badge.vue'
// import Buttonvue from '@/components/button/button.vue'
import Inputvue from '@/components/input/input.vue'
import { ref, type Ref } from 'vue';
import NumberInput from './components/number-input/number-input.vue';


const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#002737' : body ? body.style.backgroundColor = '#F6F8FA' : null
}
const test= ref('')

</script>

<template>
  <section>
    <h1>{{ test }}</h1>
  
    <Inputvue
      v-model="test"
      size="sm"
      validation-text="Validation-text"
      variant="number"
      label="Valid"
      placeholder="placeholder"
      helpertext="Helper text"
    />

    <Inputvue

      v-model="test"
      :is-valid="true"
      validation-text="Validation-text"
      variant="email"
      label="Valid"
      placeholder="placeholder"
      helpertext="Helper text"
    />
    <Inputvue
      v-model="test"
      size="sm"
      :is-valid="false"
      validation-text="Validation-text"
      variant="text"
      label="Not valid"
      placeholder="placeholder"
      helpertext="Helper text"
    />


    <Inputvue
      v-model="test"
      size="lg"
      variant="text"
      label="Neutral"
      placeholder="placeholder"
      helpertext="Helper text"
    >
      <template #sentContent>
        <div>
          <p>Sent content</p><p>Sent content</p><p>Sent content</p><p>Sent content</p><p>Sent content</p><p>Sent content</p><p>Sent content</p><p>Sent content</p>
        </div>
      </template>
    </Inputvue>

    <Inputvue
      v-model="test"
      variant="number"
      label="Disabled"
      placeholder="placeholder"
      disabled
    />
    <Inputvue
      v-model="test"
      :is-valid="false"
      validation-text="validation-text"
      variant="password"
      label="Password"
      placeholder="placeholder"
    />
  

    <Inputvue
      v-model="test"
      :is-valid="true"
      validation-text="validation-text"
      variant="password"
      label="Password"
      placeholder="placeholder"
    >
      <template #helperMessageText>
        Helper text
      </template>
    </Inputvue>


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
  margin-bottom: 4em;
  margin-top: 4em;
}

.nice{
  border: 1px solid black;
  background-color: grey;
  border-radius: 7px;
}
body{
  background-color: #668592;
;
}

</style>
