<script setup lang="ts">
import Icon from '@/components/icons/icons.vue';
import { computed, onMounted, ref, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import useDetectOutsideClick from '@/composables/clickOutsideComponent'

type DropdownProps = {
    variant?: string
    text?: string
    icon?: string | null
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
const dropdownId = ref<string>('dropdown-filter' + uuidv4())
const buttonId = ref<string>('btn-' + uuidv4())
const dropdownFilter: Ref = ref()
const dropdownAlign = ref<string>(props.align)
const userInput = ref<string>('')

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
    dropdownFilter.value.setAttribute('data-show', '')
  } else {   
    dropdownFilter.value.removeAttribute('data-show')
  }
}



const componentRef = ref()
// Close dropdown on click outside the component
useDetectOutsideClick(componentRef, () => { 
  showDropdown.value = false
  dropdownFilter.value.removeAttribute('data-show')
})
</script>

<template>
  <section
    :id="dropdownId"
    ref="componentRef"
    class="dropdown-container"
    :data-test="dropdownAlign"
  >
    <div class="dropdown__input--container">
      <label class="dropdown__input--label" for="dropdown-input">{{ props.text }}</label>
      <div class="input-container" @click="handleShowDropdown">
        <input
          id="dropdown__input--input"
          v-model="userInput"
          type="text"
          name="dropdown-input"
        >
        <button class="dropdown__input--button">
          <Icon
            :class="[showDropdown ? 'dropdown-active' : null]"
            icon="caret-down"
            :size="16"
          />
        </button>
      </div>
    <div
      id="dropdown"
      ref="dropdownFilter"
      class="dropdown--input"
      :class="dropdownId"
      :style="{ width : '100%' }"
    >
      <slot />
    </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>