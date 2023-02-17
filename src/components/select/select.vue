<script setup lang="ts">
import Icon from '@/components/icons/icons.vue';
import { computed, ref, watch, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
// import useDetectOutsideClick from '@/composables/clickOutsideComponent'

type SelectProps = {
    text?: string
    placeholder?: string
    position?: string
    options?: string[] | null
};
const props = withDefaults(defineProps<SelectProps>(), {
    text: 'Label',
    position: 'inside',
    placeholder: '',
    options : null
});

const emit = defineEmits(['change']);

const showOptions: Ref = ref<boolean>(false);
const selectId = ref<string>('select-' + uuidv4())
const buttonId = ref<string>('btn-' + uuidv4())
const selectRef: Ref = ref()
const userInput = ref<string>('')
const labelPosition = ref<string>(props.position)
const selectedOption = ref<string>('')


watch(() => userInput.value, (newVal) => { 
  const optionElems = document.querySelectorAll(`#${selectId.value} .option`)


  selectRef.value.setAttribute('data-show', '')
  const inputLowerCase = newVal.toLowerCase()
  Array.from(optionElems).forEach(function (element) {  
    element.textContent?.toLowerCase().includes(inputLowerCase) ? element.classList.remove('removed') : element.classList.add('removed')
  });
  

});
const popperInstance = computed(() => {
  const buttonElem = document.querySelector(`#${buttonId.value}`) as HTMLElement
  const dropdownElem = document.querySelector(`.${selectId.value}`) as HTMLElement
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
          offset: [0, props?.position == 'top' ? 12 : 6],
        }
      }
    ],
    strategy: 'absolute'
  });
})
const handleShowOptions: () => void = () => {
  showOptions.value = !showOptions.value
  
  if(showOptions.value) {
    const inputElem = document.querySelector(`#${selectId.value} #dropdown__input--input`) as HTMLElement  
    if(inputElem) { // Only for Vitest
      inputElem.focus()
    }  
    popperInstance.value.update()
    selectRef.value.setAttribute('data-show', '')
  } else {   
    selectRef.value.removeAttribute('data-show')
  }
}
const handleFocusOut: () => void = () => {
  userInput.value = selectedOption.value
}

const handleClearInput: () => void = () => {
  userInput.value = ''
}

const handleSelectOption: (option: string) => void = (option) => {
    selectedOption.value == option ? selectedOption.value = '' : selectedOption.value = option
    userInput.value = option
    emit('change', selectedOption.value)
}

const componentRef = ref()

// ---- REBASE MAIN - ADD TAB TRAP REMOVE COMPOSABLE FOLDER ----

// Close dropdown on click outside the component
// useDetectOutsideClick(componentRef, () => { 
//     showOptions.value = false
//     selectRef.value.removeAttribute('data-show')
// })

</script>

<template>
  <section
    :id="selectId"
    ref="componentRef"
    class="select"
    @click="handleShowOptions"
  >
    <div :id="buttonId" class="select--container">
      <div class="input-container">
        <input
          id="select--input"
          v-model="userInput"
          type="text"
          class="subtitle2"
          name="select-input"
          :placeholder="labelPosition == 'inside' ? ' ' : props.placeholder"
          @focus="handleClearInput"
          @focusout="handleFocusOut"
        >
        <label
          class="select--label subtitle2"
          :class="[`label-${labelPosition}`]"
          for="select-input"
          :data-active="[showOptions && labelPosition == 'inside' ? true : false]"
        >
          {{ props.text }}
        </label>
        <button class="select--button">
          <Icon
            :class="[showOptions ? 'options-active' : null]"
            icon="caret-down"
            :size="16"
          />
        </button>
        <div
          id="option__container"
          ref="selectRef"
          :class="selectId"
        >
          <div
            v-for="option in props.options"
            :key="option"
            :class="selectedOption == option ? 'option--selected option' : 'option'"
            @click="handleSelectOption(option)"
            @keyup.enter="handleSelectOption(option)"
          >
            {{ option }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/select/select.scss";
</style>