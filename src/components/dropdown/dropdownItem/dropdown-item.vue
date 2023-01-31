<script setup lang="ts">import { computed, defineAsyncComponent, onMounted, ref, type Ref} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { defaultTypeMixin, dropdownItemTypes } from '@/helpers/mixins/jsMixins';
import { useTabTrap, useRemoveRecordedStroke } from '@/composables/tabTrap'
import { useRouter } from 'vue-router'
import { createPopper } from '@popperjs/core';
import useDetectOutsideClick from '@/composables/clickOutsideComponent';

type DropdownPropsItem = {
    type?: string
    text?: string | null
    icon?: string | null
    to?: string
    disabled?: boolean
    selected?: boolean
    secondaryText?: string | null
    width?: number | null
    subdropdown?: boolean
};

const props = withDefaults(defineProps<DropdownPropsItem>(), {
    text: '',
    icon: null,
    type: 'button',
    to: '/',
    secondaryText: null,
    width: null
});

const emit = defineEmits(['click']);

const elementType = ref(props.type)
const itemId = ref(uuidv4)
const secondaryText = ref<string | null>(props.secondaryText)
const selectedItem = ref<boolean | undefined>(props.selected)
const dropdownId = ref<string>('dropdown-' + uuidv4())
const showSubDropdown: Ref = ref<boolean>(false);
const subDropdownId = ref<string>('sub-dropdown-' + uuidv4())
const subDropdown: Ref = ref()

onMounted(() => {
  elementType.value != 'button' ? selectedItem.value = false : null
  !props.text ? secondaryText.value = null : null
})

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
  if (selectedItem.value) {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } 
  return null;
});

const AsyncSubdropdownIcon = computed(() => {
  if (props.subdropdown) {
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

const popperInstance = computed(() => {
  const buttonElem = document.querySelector(`#${subDropdownId.value}`) as HTMLElement
  const dropdownElem = document.querySelector(`.${subDropdownId.value}`) as HTMLElement
  return createPopper(buttonElem, dropdownElem, {
    placement: 'auto-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: [`right-start`, `left-start`]
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, 2],
        }
      }
    ],
    strategy: 'absolute'
  });
})

const handleShowSubDropdown: () => void = () => {
  showSubDropdown.value = !showSubDropdown.value
  
  if(showSubDropdown.value) {
    subDropdown.value.setAttribute('data-show', '')
    popperInstance.value.update()
  } else {   
    const buttonElem = document.querySelector(`#${subDropdownId.value}`) as HTMLElement
    buttonElem.focus()
    subDropdown.value.removeAttribute('data-show')
  }
}

const handleCloseSubDropdown: (e:KeyboardEvent) => void = (e) => {
  e.stopPropagation()
  e.preventDefault()
  const buttonElem = document.querySelector(`#${subDropdownId.value}`) as HTMLElement
  buttonElem.focus()
  subDropdown.value.removeAttribute('data-show')
}

function handleLeaveSubdropdown(e: FocusEvent) {
  const currentElem = e.target
  const lastElem = document.querySelector(`.${subDropdownId.value}`)?.lastElementChild as HTMLElement
  
  if(currentElem == lastElem) {
    showSubDropdown.value = false 
    subDropdown.value.removeAttribute('data-show')
  }
}

const subDropdownRef = ref()
// Close dropdown on click outside the component
useDetectOutsideClick(subDropdownRef, () => { 
  if(showSubDropdown.value) {
    showSubDropdown.value = false 
    subDropdown.value.removeAttribute('data-show')
  }
})

</script>

<template>
  <component
    :is="elementType == 'link' ? 'a' : elementType == 'route' ? 'router-link' : 'button'"
    :id="props.subdropdown ? subDropdownId : dropdownId"
    ref="subDropdownRef"
    :role="props.disabled ? 'disabled' : null" 
    :href="elementType == 'link' ? props.to : null"
    :target="elementType == 'link' ? '_blank' : null"
    :to="elementType == 'route' ? props.to : null"
    :class="[itemId, selectedItem ? 'dropdown__item--selected' : null]"
    class="dropdown__item"
    tabindex="0"
    :disabled="props.disabled ? disabled : null"
    :data-test="elementType"
    @keydown.enter="elementType == 'route' ? goToRoute($event) : null"
    @keydown="props.subdropdown ? handleShowSubDropdown() : useTabTrap($event)"
    @keyup="useRemoveRecordedStroke($event)"
    @click="elementType == 'button' && !props.subdropdown ? emit('click') : props.subdropdown ? handleShowSubDropdown() : null"
    @mouseenter="props.subdropdown ? handleShowSubDropdown() : null"
  >
    <AsyncSelectedIcon
      v-if="props.selected"
      icon="check"
      :size="8"
      variant="primary"
    />
    <div v-if="props.text" class="text-container">
      <p>
        {{ props.text }}
      </p>
      <p v-if="secondaryText" class="secondary-text">
        {{ secondaryText }}
      </p>
    </div>
    <AsyncIcon v-if="props.icon && !props.subdropdown" :size="10" :icon="props.icon" />
    <AsyncSubdropdownIcon
      v-if="props.subdropdown"
      class="subdropdown-icon"
      :dropdown-open="[showSubDropdown]"
      :size="10"
      icon="caret-down"
    />
    <p v-if="props.subdropdown" />
  </component>
  <div
    v-if="elementType == 'button' && props.subdropdown"
    id="sub-dropdown"
    ref="subDropdown"
    :class="subDropdownId"
    :style="{ width: props.width ? props.width + 'px' : 'fit-content' }"
    @focusout="handleLeaveSubdropdown($event)"
    @keyup.escape="handleCloseSubDropdown($event)"
    @mouseleave="handleShowSubDropdown()"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>