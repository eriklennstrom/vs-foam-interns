<script setup lang="ts">
import Icon from '@/components/icons/icons.vue';
import { computed, onMounted, ref, watch, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import useDetectOutsideClick from '@/composables/clickOutsideComponent'
import { isQualifiedTypeIdentifier } from '@babel/types';

type DropdownProps = {
    variant?: string
    text?: string
    icon?: string | null
    disabled?: boolean
};

const props = withDefaults(defineProps<DropdownProps>(), {
    variant: 'secondary',
    text: 'Foam Dropdown',
    icon: null,
    width: null,
    disabled: false
});

const showDropdown: Ref = ref<boolean>(false);
const dropdownId = ref<string>('dropdown-filter' + uuidv4())
const buttonId = ref<string>('btn-' + uuidv4())
const dropdownFilter: Ref = ref()
const userInput = ref<string>('')
const optionsSelected = ref<number>(0)

// Maybe use watch to check input?
watch(() => userInput.value, (newVal) => { 
  const dropdownElems = document.querySelectorAll('.dropdown__filter--container .checkbox__item')
  dropdownFilter.value.setAttribute('data-show', '')
  const inputLowerCase = newVal.toLowerCase()
  optionsSelected.value = 0
  Array.from(dropdownElems).forEach(function (element) {
    element.getAttribute('checked') == 'true' ? optionsSelected.value = optionsSelected.value + 1 : null   
    element.textContent?.toLowerCase().includes(inputLowerCase) ? element.classList.remove('removed') : element.classList.add('removed')
  });
    
});

onMounted(() => {
  const dropdownElems = document.querySelectorAll('.dropdown__filter--container .checkbox__item')

  optionsSelected.value = 0
  Array.from(dropdownElems).forEach(function (element) {
    element.getAttribute('checked') == 'true' ? optionsSelected.value = optionsSelected.value + 1 : null   

  });
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
          allowedAutoPlacements: [`bottom-end`, `top-end`]
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
    const inputElem = document.querySelector('#dropdown__input--input') as HTMLElement
    inputElem.focus()
    popperInstance.value.update()
    dropdownFilter.value.setAttribute('data-show', '')
  } else {   
    dropdownFilter.value.removeAttribute('data-show')
  }
}

const handeClearInput: () => void = () => {
  userInput.value = ''
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
    class="dropdown__filter--container"
    @click="handleShowDropdown"
  >
    <div :id="buttonId" class="dropdown__input--container">
      <label class="dropdown__input--label" for="dropdown-input">{{ props.text }}</label>
      <div class="input-container">
        <span class="amount-selected">{{ optionsSelected }}</span>
        <input
          id="dropdown__input--input"
          v-model="userInput"
          type="text"
          name="dropdown-input"
          placeholder="Search"
        >
        <Icon
          v-if="userInput.length > 0"
          class="remove-input"
          icon="xmark"
          :size="16"
          @click="handeClearInput"
        />
        <button class="dropdown__input--button">
          <Icon
            :class="[showDropdown ? 'dropdown-active' : null]"
            icon="caret-down"
            :size="16"
          />
        </button>
      </div>
    </div>
    <div
      id="dropdown"
      ref="dropdownFilter"
      class="dropdown--input"
      :class="dropdownId"
    >
      <slot />
    </div>
  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>