<script setup lang="ts">import { computed, defineAsyncComponent, ref} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { defaultTypeMixin, dropdownItemTypes } from '@/helpers/mixins/jsMixins';
import { useTabTrap, useRemoveRecordedStroke } from '@/composables/tabTrap'
import { useRouter } from 'vue-router'


type DropdownProps = {
    type?: string
    text?: string
    icon?: string | null
    to?: string
    disabled?: boolean
    selected?: boolean
    secondaryText?: string | null
};

const props = withDefaults(defineProps<DropdownProps>(), {
    text: 'Dropdown Item',
    icon: null,
    type: 'button',
    to: '/',
    secondaryText: null
});

const emit = defineEmits(['click']);

const elementType = ref(props.type)
const itemId = ref(uuidv4)


defaultTypeMixin(dropdownItemTypes).verifyType(props.type)
  ? ''
  : (elementType.value = 'button');

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

const router = useRouter()
const goToRoute: (e:KeyboardEvent) => void = (e) => {
  if(e.key == 'Enter') {
    router.push({ path: props.to });
  }
}

</script>

<template>
  <component
    :is="elementType == 'link' ? 'a' : elementType == 'route' ? 'router-link' : 'button'"
    :role="props.disabled ? 'disabled' : null" 
    :href="elementType == 'link' ? props.to : null"
    :target="elementType == 'link' ? '_blank' : null"
    :to="elementType == 'route' ? props.to : null"
    :class="[itemId, props.selected ? 'dropdown__item--selected' : null]"
    class="dropdown__item"
    tabindex="0"
    :disabled="props.disabled ? disabled : null"
    :data-test="elementType"
    @keydown.enter="goToRoute($event)"
    @keydown="useTabTrap($event)"
    @keyup="useRemoveRecordedStroke($event)"
    @click="elementType == 'button' ? emit('click') : null"
  >
    <AsyncSelectedIcon
      v-if="props.selected"
      icon="check"
      :size="8"
      variant="primary"
    />
    <p>{{ props.text }}</p>
    <p v-if="props.secondaryText" class="secondary-text">{{ props.secondaryText }}</p>
    <AsyncIcon v-if="props.icon" :size="10" :variant="props.icon" />
  </component>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>