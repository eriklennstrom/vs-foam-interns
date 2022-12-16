<script setup lang="ts">
import { ref, type Ref } from 'vue';
import { computed } from '@vue/reactivity';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    variant: {type: String, default: 'warning' },
    color: { type: String, default: 'primary' },
    size: { type: Number}
})

let size: Ref = ref<string>('100%')
props.size ? size.value = props.size + 'px' : null

const iconName = computed(() => {
  if(props.variant) {
    const icon = 'fa-'+props.variant
    return icon
  } else {
    return ''
  }
})


</script>

<template>
    <font-awesome-icon :icon="iconName" :class="props.color" :style="{ fontSize: size }" />
</template>

<style lang="scss" scoped>
  @import './icons.scss';

</style>