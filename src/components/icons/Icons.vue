<script setup lang="ts">
import { defineAsyncComponent, ref, type Ref } from 'vue';
import { computed } from '@vue/reactivity';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

const props = defineProps({
    iconType: {type: String, required: true },
    color: { type: String },
    iconSize: { type: Number}
})

let size: Ref = ref<string>('100%')
props.iconSize ? size.value = props.iconSize + 'px' : null

const IconLoad = computed(() => {
  if(props.iconType) {
    const Icon = defineAsyncComponent(() => import('../icons/Icons.vue'))
    return Icon
  }
})

const iconName = computed(() => {
  if(props.iconType) {
    const icon = 'fa-'+props.iconType
    return icon
  } else {
    return ''
  }
})


</script>

<template>
    <font-awesome-icon :icon="iconName" :class="props.color ? props.color : 'default-icon'" :style="{ fontSize: size }" />
</template>

<style lang="scss" scoped>
  @import './icons.scss';

</style>