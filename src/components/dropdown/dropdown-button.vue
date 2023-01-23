<script setup lang="ts">
import { computed, onMounted, ref, type Ref } from 'vue';
import FoamButton from '@/components/button/button.vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import useDetectOutsideClick from '@/composables/clickOutsideComponent'

type DropdownProps = {
    variant?: string
    text?: string
    icon?: string | null
    width?: number | null
    align?: string
    disabled?: boolean
};

const props = withDefaults(defineProps<DropdownProps>(), {
    variant: 'secondary',
    text: 'Foam Dropdown',
    icon: null,
    width: null,
    align: 'end',
    disabled: false
});

const showDropdown: Ref = ref<boolean>(false);
const dropdownId = ref<string>('dropdown-' + uuidv4())
const buttonId = ref<string>('btn-' + uuidv4())
const dropdown: Ref = ref()
const dropdownAlign = ref<string>(props.align)

onMounted(() => {
  if(props.align == 'end' || props.align == 'start') {
    return
  } else {
    dropdownAlign.value = 'end'
  }
})
const popperInstance = computed(() => {
  const buttonElem = document.querySelector(`#${buttonId.value}`) as HTMLElement
  const dropdownElem = document.querySelector(`.${dropdownId.value}`) as HTMLElement
  return createPopper(buttonElem, dropdownElem, {
    placement: 'auto-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: [`bottom-${dropdownAlign.value}`, `top-${dropdownAlign.value}`]
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

const handleShowDropdown: () => void = () => {
  showDropdown.value = !showDropdown.value

  if(showDropdown.value) {
    popperInstance.value.update()
    dropdown.value.setAttribute('data-show', '')
  } else {   
    dropdown.value.removeAttribute('data-show')
  }
}

const componentRef = ref()
// Close dropdown on click outside the component
useDetectOutsideClick(componentRef, () => { 
  showDropdown.value = false
  dropdown.value.removeAttribute('data-show')
})
</script>

<template>
  <section
    :id="dropdownId"
    ref="componentRef"
    class="dropdown-container"
    :data-test="dropdownAlign"
  >
    <FoamButton
      :id="buttonId"
      class="button"
      dropdown
      :text="props.text"
      :variant="props.variant"
      :active-dropdown="showDropdown"
      :icon="props.icon"
      :disabled="props.disabled"
      @click="handleShowDropdown"
    />
    <div
      id="dropdown"
      ref="dropdown"
      :class="dropdownId"
      :style="{ width: props.width ? props.width + 'px' : 'fit-content' }"
      @keyup.escape="handleShowDropdown"
    >
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>