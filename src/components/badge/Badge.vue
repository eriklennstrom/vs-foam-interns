<script setup lang="ts">
import { onMounted, ref } from 'vue';
// import Icons from '../components/icons/Icons.vue';

const props = defineProps({
    type: {type: String, required: true },
    outline: { type: Boolean },
    text: {type: String, required: true },
    icon: {type: String}
})
const badgeClass = ref('badge-'+props.type)

let Icons: any
async function load() {
  Icons  = await import('../icons/Icons.vue');
    // let Icons = await import('../components/icons/Icons.vue');
  }
  load()
// onMounted(() => {
let iconName: string;
  props.icon ? 
  iconName = 'fa-'+props.icon
    : null
    // const Icons = () => import('../components/icons/Icons.vue')
//   import('../components/icons/Icons.vue').then(Icon) => {


</script>

<template>
    <div :class="[badgeClass, props.outline ? 'badge-outline' : null]"> 
      <Icons v-if="props.icon" :iconType="iconName" />
      {{props.text}}
    </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../components/styles/colors.scss';

@each $name, $bg in colors.$bg-colors {
  .badge-#{$name} {
    // @if  (str-index($name, 'secondary')) {
    //   color: colors.$strong-dark;
    // } @else {
    //   color: colors.$strong-light;
    // }
    padding: 8px 16px;
    background-color: $bg;
    border-radius: 28px;
    p {
      
      font-size: 12px;
    }
    &:has(svg) {
      display:flex;
      // align-items: center;
      padding-left: 0;
      svg {

        padding: 0 8px;
      }
    }
  }
  .badge-#{$name}.badge-outline {
    border: 1px solid $bg;
    background-color: color.adjust($bg, $alpha: -0.9);
    &:has(svg) {
      svg {
        padding: 0 8px;
      }
    }
  }
}

@each $text, $color in colors.$text-colors {
  
  .badge-#{$text} {
    color: $color;
    &:has(svg) {
      display:flex;
      // align-items: center;
      padding-left: 0;
      svg {
        color: $color;
        padding: 0 8px;
      }
    }
  }
}
</style>