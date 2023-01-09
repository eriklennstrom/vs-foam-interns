<script setup lang="ts">
import { computed, defineAsyncComponent, onBeforeMount, ref, type Ref } from 'vue';
import { defaultVariantMixin, chipVariants } from '@/helpers/mixins/jsMixins';

type ChipProps = {
  variant?: string
  text?: string
  icon?: string
  removable?: boolean
  outline?: boolean
  selected?: boolean | null
};

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'select',
  text: 'Foam Chip',
  icon: '',
  removable: false,
  outline: false,
  selected: null
});

const emit = defineEmits(['click'])
const foamChip = ref();
const chipVariant: Ref = ref<string>(props.variant);
const chipIcon = ref<string>(props.icon)
const chipRemove = ref(props.removable)
const role = ref<string>('button')

defaultVariantMixin(chipVariants).verifyVariant(props.variant)
  ? null
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "input"'
    ),
    (chipVariant.value = 'input'));

onBeforeMount(() => {
  // If the chip is not interactable, set role to not button
  chipVariant.value == 'filter' && chipRemove.value == true ? chipRemove.value = false : null
})

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
  <div
    ref="foamChip"
    :role="role"
    :class="['chip', props.outline ? 'chip__outline' : null, '', props.selected ? 'chip--selected' : null, props.variant == 'input' ? 'chip--input' : null]"
    :action="props.variant"
    @click="emit('click')"
  >
    <AsyncIcon v-if="props.selected" icon="check" :size="8" />
    <AsyncIcon
      v-if="props.icon && !props.selected"
      :icon="chipIcon"
    />
    <text>
      {{ props.text }}
    </text>
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
