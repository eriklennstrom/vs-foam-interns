<script setup lang="ts">
import { computed, type Ref } from "@vue/reactivity";
import { defineAsyncComponent, ref } from "vue";
import {badgeMixin} from "../mixins/jsMixins"

const props = defineProps({
  variant: { type: String, default: "secondary" },
  outline: { type: Boolean, default: false },
  text: { type: String, default: "Badge" },
  icon: { type: String },
});

const type: Ref = ref<string>(props.variant);

badgeMixin.verifyVariant(props.variant)? "" : type.value = "secondary"


const badgeClass = ref("badge-" + type.value);

// dynamic component import
const AsyncIcon = computed(() => {
  if(props.icon) {
    const Icon = defineAsyncComponent(() => import('../icons/icons.vue'))
    return Icon
  }
});
</script>

<template>
    <div :class="[badgeClass, props.outline ? 'badge-outline' : null]"> 
      <AsyncIcon v-if="props.icon" :variant="props.icon" />
      {{props.text}}
    </div>
</template>

<style lang="scss" scoped>
@import "./badge.scss";
</style>
