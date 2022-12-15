<script setup lang="ts">
import type { Refs } from '@storybook/api';
import { computed, type Ref } from '@vue/reactivity';
import { defineAsyncComponent, ref } from 'vue';

const props = defineProps({
    type: {type: String, required: true },
    outline: { type: Boolean },
    text: {type: String, required: true },
    icon: {type: String}
})
const selectionArray: string[] = ['primary', 'secondary', 'danger', 'warning', 'success']
const type:Ref = ref<string>(props.type)

if(!selectionArray.includes(type.value)){
type.value = "secondary"
}

const badgeClass = ref('badge-'+type.value)

const Icon = computed(() => {
  if(props.icon) {
    const Icon = defineAsyncComponent(() => import('../icons/Icons.vue'))
    return Icon
  }
})
</script>

<template>
    <div :class="[badgeClass, props.outline ? 'badge-outline' : null]"> 
      <Icon v-if="props.icon" :iconType="props.icon" />
      {{props.text}}
    </div>
</template>

<style lang="scss" scoped>
  @import './badge.scss'
</style>