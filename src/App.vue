<script setup lang="ts">


const darkMode: () => void = () => {
  const body = document.querySelector('body')
  body?.classList.toggle('dark')
  body?.classList.contains('dark') ? body.style.backgroundColor = '#1F252F' : body? body.style.backgroundColor = '#F6F8FA' : null

}

const test= ref('')

</script>

<template>
  <h1>{{ test }}</h1>

  <Inputvue
    v-model="test"
    :is-valid="true"
    validation-text="Validation-text"
    variant="email"
    text="Valid"
    placeholder="placeholder"
    helpertext="Helper text"
  />
  <Inputvue
    v-model="test"
    :is-valid="false"
    validation-text="Validation-text"
    variant="text"
    text="Not valid"
    placeholder="placeholder"
    helpertext="Helper text"
  />


  <Inputvue
    v-model="test"
    variant="text"
    text="Neutral"
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
    text="Disabled"
    placeholder="placeholder"
   
  />
  <Inputvue
    v-model="test"
    :is-valid="false"
    validation-text="validation-text"
    variant="password"
    text="Password"
    placeholder="placeholder"
  />
  

  <Inputvue
    v-model="test"
    :is-valid="true"
    validation-text="validation-text"
    variant="password"
    text="Password"
    placeholder="placeholder"
  >
    <template #helperMessageText>
      Helper text
    </template>
  </Inputvue>


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
