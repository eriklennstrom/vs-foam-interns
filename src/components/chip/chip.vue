<script setup lang="ts">
import { computed, defineAsyncComponent, onBeforeMount, ref, type Ref } from 'vue';
import { defaultVariantMixin, chipVariants } from '@/helpers/mixins/jsMixins';
import { useAttrs } from 'vue'
type ChipProps = {
  variant?: string
  text?: string
  icon?: string
};

const props = withDefaults(defineProps<ChipProps>(), {
  variant: 'select',
  text: 'Foam Chip',
  icon: '',
});
// -------- WIP Fix emits, render X icon if the emit exists ----------
const attrs = useAttrs()
// const emit = defineEmits(['filter-list', 'remove-filter'])
console.log(attrs.onFilterList)

const foamChip = ref();
const chipVariant: Ref = ref<string>(props.variant);
const chipSelected = ref(false);
const chipIcon = ref<string>(props.icon)

const role = ref<string>('button')

defaultVariantMixin(chipVariants).verifyVariant(props.variant)
  ? null
  : (console.error(
      'Variant value is incorrect or not included. Value set to default "static"'
    ),
    (chipVariant.value = 'static'));

onBeforeMount(() => {
  // If the chip is not interactable, set role to not button
  chipVariant.value == 'filter' ?
  null 
  : emit('filter-list', props.text)
})

const selectChip: () => void = () => {
  if (chipVariant.value == 'filter') {
    foamChip.value.classList.contains('chip__active') ?
    (emit('remove-filter', props.text),
      chipIcon.value = props.icon
    )
    : (emit('filter-list', props.text), chipIcon.value = 'check')
    foamChip.value.classList.toggle('chip__active')
    chipSelected.value = !chipSelected.value;
  } 
};

const removeChip: () => void = () => {
  // Stop the user from removing the chip if the chip is selected
  if(chipSelected.value != null) {  
    chipVariant.value != 'select' ?
    emit('remove-filter', props.text)
    : null
    foamChip.value.remove()
  }
};
console.log(foamChip)
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
    class="chip"
    :action="props.variant"
    @click="selectChip"
  >
    <AsyncIcon v-if="chipSelected" :icon="chipIcon" :size="8" />
    <AsyncIcon
      v-if="props.icon && !chipSelected"
      :icon="chipIcon"
    />
    {{ props.text }}
    <AsyncIcon
      v-if="$attrs.removefilter"
      icon="xmark"
      :size="8"
      @click="removeChip"
    />
  </div>
</template>

<style lang="scss" scoped>
@import "@/components/chip/chip.scss";
</style>
