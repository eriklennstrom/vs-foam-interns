<script setup lang="ts">
import { computed, defineAsyncComponent, onBeforeMount, ref, type Ref } from 'vue';
import { defaultVariantMixin, chipVariants } from '@/helpers/mixins/jsMixins';

type ChipProps = {
  variant?: string
  text?: string
  icon?: string
  removable?: boolean
  outline?: boolean
  selected?: boolean
  disabled?: boolean
};

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'input',
  text: '',
  icon: '',
  removable: false,
  outline: false,
  selected: false,
  disabled: false
});

const emit = defineEmits(['click'])
const foamChip: Ref = ref();
const chipVariant: Ref = ref<string>(props.variant);
const chipRemove: Ref = ref<boolean>(props.removable)
const chipOutline: Ref = ref<boolean>(props.outline)
const role: Ref = ref<string>('button')

defaultVariantMixin(chipVariants).verifyVariant(props.variant)
  ? null
  : (chipVariant.value = 'input');

onBeforeMount(() => {
  // If the chip is disabled, set role to disabled
  props.disabled ? role.value = 'disabled' : null

  chipVariant.value == 'filter' && chipRemove.value == true ? chipRemove.value = null : null
  chipVariant.value == 'filter' && chipOutline.value == true ? chipOutline.value = null : null
  props.selected != null ? chipRemove.value = null : null
})

// dynamic component import
const AsyncIcon = computed(() => {
  if (props.icon) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } 
  return null;
});

const AsyncSelectedIcon = computed(() => {
  if (props.selected) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } 
  return null;
});

const AsyncRemoveIcon = computed(() => {
  if (props.removable) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } 
  return null;
});

</script>

<template>
  <div
    ref="foamChip"
    :role="role"
    :class="[
      'chip text-sm', chipOutline ? 'chip__outline' : null, 
      props.selected ? 'chip--selected' : null, 
      props.variant == 'filter' ? 'chip--filter' : 'chip--input',
    ]"
    :action="props.variant"
    :data-test="chipRemove ? 'remove-icon' : 'no-remove'"
    @click="emit('click')"
  >
    <AsyncSelectedIcon v-if="props.selected" icon="check" :size="8" />
    <AsyncIcon
      v-if="props.icon && !props.selected"
      :icon="props.icon"
    />
    {{ props.text }}
    <AsyncRemoveIcon
      v-if="chipRemove"
      icon="xmark"
      :size="8"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/components/chip/chip.scss";
</style>
