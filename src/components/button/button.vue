<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  type Ref,
} from 'vue';
import { defaultVariantMixin, buttonVariant } from '@/helpers/mixins/jsMixins';

type ButtonProps = {
  variant: string
  text?: string
  icon?: string | null
  dropdown?: boolean
  disabled?: boolean
  activeDropdown?: boolean
};

const emit = defineEmits(['click']);

const props = withDefaults(defineProps<ButtonProps>(), {
  variant: 'primary',
  text: 'Button',
  icon: null,
  activeDropdown: false,
  dropdown: false,
  disabled: false,
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

const AsyncDropdownIcon = computed(() => {
  if (props.dropdown) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } else return null;
});
</script>

<template>
  <button
    :class="[buttonClass, props.disabled ? 'disabled' : '']"
    @click="emit('click')"
  >
    <AsyncIcon v-if="props.icon" :icon="props.icon" />
    {{ props.text }}
    <AsyncDropdownIcon
      v-if="props.dropdown"
      class="dropdown"
      :class="[props.activeDropdown ? 'active' : null]"
      icon="caret-down"
    />
  </button>
</template>

<style lang="scss" scoped>
@import "./button.scss";
</style>
