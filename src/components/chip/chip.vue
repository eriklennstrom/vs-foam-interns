<script setup lang="ts">
import { computed, defineAsyncComponent, ref, type Ref } from 'vue';
import { defaultVariantMixin, chipVariants } from '@/helpers/mixins/jsMixins';
type ChipProps = {
  variant: string
  text?: string
  icon?: string | null
  dropDown?: string[] | null
};

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'select',
  text: 'Foam Chip',
  icon: null,
  dropDown: null,
});
const chipVariant: Ref = ref<string>(props.variant);
const chipType = ref<string>(props.variant);

const chipSelected = ref(false);
const chipRemove = ref(false);
const chipIcon = ref<string>(props.icon ? props.icon : '');
const removedChip = ref(false);
const activeChip = ref(false);

defaultVariantMixin(chipVariants).verifyVariant(props.variant)
  ? null
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "select"'
    ),
    (chipVariant.value = 'select'));

const selectChip: () => void = () => {
  if (chipType.value == 'select') {
    activeChip.value = !activeChip.value;
    chipSelected.value = !chipSelected.value;
    chipIcon.value = 'check';
  } else if (chipType.value == 'remove') {
    activeChip.value = true;
    chipRemove.value = true;
    chipIcon.value = 'xmark';
  }
};

const removeChip: () => void = () => {
  removedChip.value = true;
};

// dynamic component import
const AsyncIcon = computed(() => {
  if (props.icon) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } else return null;
});

// ----- For future dropdown component -----
// const AsyncDropDown = computed(() => {
//   if (props.dropDown) {
//     const DropDown = defineAsyncComponent(
//       () => import('@/components/dropdown/dropdown.vue')
//     );
//     return DropDown;
//   } else return null;
// });

// const showDropDown = ref(false);
// const activeDropDown: () => void = () => {
//     showDropDown.value = !showDropDown.value
// }
</script>

<template>
  <div
    v-if="!removedChip"
    class="chip"
    :class="{ active: activeChip, dropContainer: props.dropDown }"
    :clickable="props.variant"
    @click="selectChip"
  >
    <AsyncIcon
      v-if="props.icon && props.variant == 'remove'"
      :variant="props.icon"
    />
    <AsyncIcon v-if="chipSelected" :variant="chipIcon" :size="8" />
    {{ props.text }}
    <AsyncIcon
      v-if="chipRemove"
      :icon-type="chipIcon"
      :size="8"
      @click="removeChip"
    />
    <AsyncIcon
      v-if="props.icon && props.variant == 'select'"
      :variant="props.icon"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/components/chip/chip.scss";
</style>
