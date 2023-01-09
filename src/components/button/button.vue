<script setup lang="ts">
import { defineAsyncComponent, ref, computed, type Ref } from 'vue';
import { defaultVariantMixin, buttonVariant } from '@/helpers/mixins/jsMixins';

type ButtonProps = {
  variant: string
  outline?: boolean
  text?: string
  icon?: string| null
};

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  outline: false,
  text: 'Button',
  icon: null
});

const type: Ref = ref<string>(props.variant);

defaultVariantMixin(buttonVariant).verifyVariant(props.variant)
  ? ''
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "primary"'
    ),
    (type.value = 'primary'));

const buttonClass = ref('button--' + type.value);

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
  <div :class="[buttonClass, props.outline ? buttonClass + '__outline' : null]">
    <AsyncIcon v-if="props.icon" :size="10" :variant="props.icon" />
    {{ props.text }}
  </div>
</template>

<style lang="scss" scoped>
@import "./button.scss";
</style>
