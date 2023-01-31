<script setup lang="ts">
import Icon from '@/components/icons/icons.vue';
import { computed, ref, useSlots, watch, watchEffect, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import useDetectOutsideClick from '@/composables/clickOutsideComponent'
import { defaultTypeMixin, dropdownInputPosition} from '@/helpers/mixins/jsMixins';

type DropdownProps = {
    text: string
    placeholder?: string
    position?: string
};

const props = withDefaults(defineProps<DropdownProps>(), {
    ext: 'Search',
    position: 'inside',
    placeholder: ''
});

const showDropdown: Ref = ref<boolean>(false);
const dropdownId = ref<string>('dropdown-filter-' + uuidv4())
const buttonId = ref<string>('btn-' + uuidv4())
const dropdownFilter: Ref = ref()
const userInput = ref<string>('')
const labelPosition = ref<string>(props.position)
const amountChecked = ref<number>(0)

  defaultTypeMixin(dropdownInputPosition).verifyType(props.position)
  ? ''
  : (labelPosition.value = 'inside');


const slots = useSlots()

watchEffect(() => {
  amountChecked.value = 0
  if(slots.default)
  Array.from(slots.default()).forEach(function (element) {  
    element?.props?.selected == true ? amountChecked.value = amountChecked.value + 1 : ''   
  });

})

watch(() => userInput.value, (newVal) => { 
  const filterElems = document.querySelectorAll(`#${dropdownId.value} .dropdown__filter`)
  const itemElems = document.querySelectorAll(`#${dropdownId.value} .dropdown__item`)
  let dropdownElems;

  if(filterElems.length > 0) {
    dropdownElems = filterElems
  } else {
    dropdownElems = itemElems
  }

  dropdownFilter.value.setAttribute('data-show', '')
  const inputLowerCase = newVal.toLowerCase()


  Array.from(dropdownElems).forEach(function (element) {  
    element.textContent?.toLowerCase().includes(inputLowerCase) ? element.classList.remove('removed') : element.classList.add('removed')
  });
  
  const removedElems = document.querySelectorAll(`#${dropdownId.value} .removed`)
  const dropdownElem = document.querySelector(`.${dropdownId.value}`)
  if(dropdownElems.length == removedElems.length) {
    dropdownElem?.classList.add('empty-dropdown')
  } else {
    dropdownElem?.classList.remove('empty-dropdown')
  }
});

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
          offset: [0, 6],
        }
      }
    ],
    strategy: 'absolute'
  });
})

const handleShowDropdown: () => void = () => {
  showDropdown.value = !showDropdown.value
  
  if(showDropdown.value) {
    const inputElem = document.querySelector(`#${dropdownId.value} #dropdown__input--input`) as HTMLElement  
    if(inputElem) { // Only for Vitest
      inputElem.focus()
    }  
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
      <div class="input-container">
        <input
          id="dropdown__input--input"
          v-model="userInput"
          type="text"
          name="dropdown-input"
          :placeholder="labelPosition == 'inside' ? ' ' : props.placeholder"
        >
        <label
          class="dropdown__input--label"
          :class="[`label-${labelPosition}`]"
          for="dropdown-input"
          :data-active="[showDropdown && labelPosition == 'inside' ? true : false]"
        >
          {{ props.text }}
        </label>
        <span v-if="amountChecked > 0" class="amount-selected">{{ amountChecked }}</span>
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