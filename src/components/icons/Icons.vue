<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    iconType: {type: String, required: true },
    color: { type: String },
    iconSize: { type: Number}
})

let size: Ref = ref<string>('100%')
props.iconSize ? size.value = props.iconSize + 'px' : null
</script>

<template>
    <font-awesome-icon :icon="props.iconType" :class="props.color ? props.color : 'default-icon'" :style="{ fontSize: size }" />
</template>

<style lang="scss" scoped>
 @use '../styles/colors.scss';

 @each $name, $color in colors.$icon-colors {
  .#{$name} {
    color: $color;
  }
}

.default-icon {
    color: black;
}

</style>