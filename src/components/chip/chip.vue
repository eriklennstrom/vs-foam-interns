<script setup lang="ts">
import { computed, defineAsyncComponent, onBeforeMount, ref, type Ref } from 'vue';
import { defaultVariantMixin, chipVariants } from '@/helpers/mixins/jsMixins';

type ChipProps = {
  variant?: string
  text?: string
  icon?: string
  removable?: boolean | null
  outline?: boolean | null
  selected?: boolean | null
  disabled?: boolean
};

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'input',
  text: 'Foam Chip',
  icon: '',
  removable: null,
  outline: null,
  selected: null,
  disabled: false
});

const emit = defineEmits(['click'])
const foamChip = ref();
const chipVariant: Ref = ref<string>(props.variant);
const chipIcon = ref<string>(props.icon)
const chipRemove = ref(props.removable)
const chipOutline = ref(props.outline)
const role = ref<string>('button')

defaultVariantMixin(chipVariants).verifyVariant(props.variant)
  ? null
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "input"'
    ),
    (chipVariant.value = 'input'));

onBeforeMount(() => {
  // If the chip is disabled, set role to disabled
  props.disabled ? role.value = 'disabled' : null

  chipVariant.value == 'filter' && chipRemove.value == true ? chipRemove.value = null : null
  chipVariant.value == 'filter' && chipOutline.value == true ? chipOutline.value = null : null
})

// dynamic component import
const AsyncIcon = computed(() => {
  if (props.icon || props.removable) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } else return null;
});

</script>

<template>
  <div
    ref="foamChip"
    :role="role"
    :class="[
      'chip', chipOutline ? 'chip__outline' : null, 
      props.selected ? 'chip--selected' : null, 
      props.variant == 'filter' ? 'chip--filter' : 'chip--input'
    ]"
    :action="props.variant"
    @click="emit('click', props.text)"
  >
    <AsyncIcon v-if="props.selected" icon="check" :size="8" />
    <AsyncIcon
      v-if="props.icon && !props.selected"
      :icon="chipIcon"
    />
    {{ props.text }}
    <AsyncIcon
      v-if="chipRemove"
      icon="xmark"
      :size="8"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/components/chip/chip.scss";
</style>
