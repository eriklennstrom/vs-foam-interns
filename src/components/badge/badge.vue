<script setup lang="ts">
import { defineAsyncComponent, ref, computed, type Ref } from 'vue';
import { defaultVariantMixin, badgeVariant } from '@/helpers/mixins/jsMixins';

type BadgeProps = {
  variant: string
  outline?: boolean
  text?: string
  icon?: string| null
};
const props = withDefaults(defineProps<BadgeProps>(), {
  variant: 'secondary',
  outline: false,
  text: 'Badge',
  icon: null
});

const type: Ref = ref<string>(props.variant);

defaultVariantMixin(badgeVariant).verifyVariant(props.variant)
  ? ''
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "secondary"'
    ),
    (type.value = 'secondary'));

const badgeClass = ref('badge--' + type.value);

// dynamic component import

const AsyncIcon = computed(() => {
  if (props.icon) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } else return null;
});
</script>

<template>
  <div :class="[badgeClass, props.outline ? badgeClass + '__outline' : null]">
    <AsyncIcon v-if="props.icon" :size="10" :variant="props.icon" />
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
@import "./badge.scss";
</style>
