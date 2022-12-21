<script setup lang="ts">
import { computed, type Ref } from "@vue/reactivity";
import { defineAsyncComponent, ref } from "vue";
import { badgeMixin } from "../mixins/jsMixins";

type BadgeProps = {
  variant: string;
  outline?: boolean;
  text?: string;
  icon?: string;
};

const props = withDefaults(defineProps<BadgeProps>(), {
  variant: "secondary",
  outline: false,
  text: "Badge",
});

const type: Ref = ref<string>(props.variant);

badgeMixin.verifyVariant(props.variant)
  ? ""
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "secondary"'
    ),
    (type.value = "secondary"));

const badgeClass = ref("badge-" + type.value);

// dynamic component import
const AsyncIcon = computed(() => {
  if (props.icon) {
    const Icon = defineAsyncComponent(() => import("../icons/icons.vue"));
    return Icon;
  }
});
</script>

<template>
  <div :class="[badgeClass, props.outline ? 'badge-outline' : null]">
    <AsyncIcon v-if="props.icon" :variant="props.icon" />
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
@import "./badge.scss";
</style>
