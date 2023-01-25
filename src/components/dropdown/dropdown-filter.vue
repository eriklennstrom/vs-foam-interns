<script setup lang="ts">import { computed, defineAsyncComponent, ref} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { defaultTypeMixin, dropdownFilterTypes } from '@/helpers/mixins/jsMixins';
import { useTabTrap, useRemoveRecordedStroke } from '@/composables/tabTrap'

type DropdownPropsFilter = {
    type?: string
    text?: string
    disabled?: boolean
    selected?: boolean
    color?: string | null
};

const props = withDefaults(defineProps<DropdownPropsFilter>(), {
    text: '',
    type: 'checkbox',
    color: null
});

const emit = defineEmits(['click']);

const filterType = ref(props.type)
const itemId = ref(uuidv4)

defaultTypeMixin(dropdownFilterTypes).verifyType(props.type)
  ? ''
  : (filterType.value = 'checkbox');

// dynamic component import
const AsyncSelectedIcon = computed(() => {
  if (props.selected) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } 
  return null;
});
function handleEmit(e: MouseEvent) {
  e.stopPropagation()
  emit('click')
}
</script>

<template>
  <div
    :role="props.disabled ? 'disabled' : ''" 
    :class="[itemId, props.selected ? 'dropdown__filter--selected' : null]"
    class="dropdown__filter"
    tabindex="0"
    :disabled="props.disabled ? disabled : null"
    :data-test="filterType"
    @keydown.enter="emit('click')"
    @keydown="useTabTrap($event)"
    @keyup="useRemoveRecordedStroke($event)"
    @click="handleEmit($event)"
  >
    <div v-if="props.type == 'checkbox'" :class="[filterType + '__item']" :checked="props.selected ? true : false">
      <AsyncSelectedIcon
        v-if="props.selected"
        icon="check"
        :size="10"
        variant="primary"
      />
      <div v-else class="dropdown__filter--checkbox" @click="emit('click')" />
      <p v-if="props.text">
        {{ props.text }}
      </p>
    </div>
    <div v-else :class="[filterType + '__item']">
      <div v-if="filterType == 'color'" :style="{'background-color': props.color ? props.color: 'red'}" />
      <span>
        {{ props.text }}
      </span>
    </div>
  </div>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>