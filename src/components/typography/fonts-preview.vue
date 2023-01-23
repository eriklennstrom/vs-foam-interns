<script setup lang="ts">
type TextProps = {
  variant: string
  text?: string
};
const props = withDefaults(defineProps<TextProps>(), {
  variant: 'h1',
  text: 'Text',
});
</script>

<template>
  <div :class="[props.variant]">
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
@import "./font-system.scss";
</style>
