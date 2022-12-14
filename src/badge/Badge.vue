<script setup lang="ts">

const props = defineProps({
    type: {type: String, required: true },
    outline: { type: Boolean }
})

</script>

<template>
    <div :class="'badge-'props.type, props.outline ? 'badge-'props.outline"> </div>
</template>

<style lang="scss" scoped>
@use 'sass:color';
@use './components/styles/colors.scss';

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
      padding-left: 0;
      svg {
        color: $color;
        padding: 0 8px;
      }
    }
  }
}
</style>