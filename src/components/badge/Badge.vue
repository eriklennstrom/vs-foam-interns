<script setup lang="ts">
import { computed } from '@vue/reactivity';
import { defineAsyncComponent, ref } from 'vue';

const props = defineProps({
    type: {type: String, required: true },
    outline: { type: Boolean },
    text: {type: String, required: true },
    icon: {type: String}
})

const badgeClass = ref('badge-'+props.type)

const iconName = computed(() => {
  if(props.icon) {
    const icon = 'fa-'+props.icon
    return icon
  } else {
    return ''
  }
})

const Icon = computed(() => {
  if(props.icon) {
    const Icon = defineAsyncComponent(() => import('../icons/Icons.vue'))
    return Icon
  }
})
</script>

<template>
    <div :class="[badgeClass, props.outline ? 'badge-outline' : null]"> 
      <Icon v-if="props.icon" :iconType="iconName" />
      {{props.text}}
    </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use '../styles/colors.scss';

@each $name, $bg in colors.$bg-colors {
  .badge-#{$name} {
    @if (str-index($name, 'secondary')) {
      color: map-get(colors.$text-colors, strong-dark);
    } @else {
      color: map-get(colors.$text-colors, strong-light);
    }
    padding: 8px 16px;
    background-color: $bg;
    border-radius: 28px;
    p {
      
      font-size: 12px;
    }
    &:has(svg) {
      display:flex;
      padding-left: 0;
      svg {
        color: inherit;
        padding: 0 8px;
      }
    }
  }
  .badge-#{$name}.badge-outline {
    @if (str-index($name, 'secondary')) {
      color: map-get(colors.$text-colors, light-light);
    } @else {
      color: $bg;
    }
    border: 1px solid $bg;
    background-color: color.adjust($bg, $alpha: -0.9);
    &:has(svg) {
      svg {
        color: inherit;
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
      padding-left: 0;
      svg {
        color: $color;
        padding: 0 8px;
      }
    }
  }
}
</style>