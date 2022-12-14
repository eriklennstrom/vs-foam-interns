<script setup lang="ts">

import Icons from './components/icons/Icons.vue'
</script>

<template>
  <h1>Home <Icons iconType="fa-warning" color="blue"/></h1>
  <button>button <Icons iconType="fa-warning" color="blue"/></button>
  <h3>Home <Icons iconType="fa-warning" color="blue"/></h3>
  <div>
    <Icons iconType="fa-warning" color="blue"/>
  </div>
  <section>
    <div class="badge-success"><Icons iconType="fa-warning" color="red"/>Badge</div>
    <div class="badge-danger-500 badge-outline">Badge</div>
    <div class="badge-primary-400"><Icons iconType="fa-warning" color="blue"/> Badge</div>
    <div class="badge-warning"><Icons iconType="fa-warning" color="red"/> Badge</div>
    <div class="badge-success badge-outline"><Icons iconType="fa-warning" /> Badge</div>
  </section>
  <foam-badge warning outline></foam-badge>
</template>

<style scoped lang="scss">
@use 'sass:color';
@use './components/styles/colors.scss';

section {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}


@each $name, $bg in colors.$bg-colors {
  .badge-#{$name} {
    padding: 8px 16px;
    font-size: 12px;
    background-color: $bg;
    border-radius: 28px;
    &:has(svg) {
      display:flex;
      padding-left: 0;
      svg {
        padding: 0 8px;
      }
    }
  }
  .badge-#{$name}.badge-outline {
    // box-shadow: inset 0 0 1px $bg;
    border: 1px solid $bg;
    background-color: color.adjust($bg, $alpha: -0.9) 
  }
}

</style>
