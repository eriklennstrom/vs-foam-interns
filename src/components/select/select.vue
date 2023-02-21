<script setup lang="ts">
import Icon from '@/components/icons/icons.vue';
import { computed, onMounted, ref, type Ref } from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';
import useDetectOutsideClick from '@/composables/clickOutsideComponent';
import { useTabTrap, useRemoveRecordedStroke } from '@/composables/tabTrap';

type OptionsProp = {
  id: string
  text: string
  value: string
};

type SelectProps = {
  label?: string
  position?: string
  options?: OptionsProp[] | []
  defaultoption?: string | null
  sort?: boolean
};

const props = withDefaults(defineProps<SelectProps>(), {
  label: 'Label',
  position: 'inside',
  defaultoption: null,
  sort: false,
  options: () => [],
});

const emit = defineEmits(['change']);

const showOptions: Ref = ref<boolean>(false);
const selectId = ref<string>('select-' + uuidv4());
const selectContainerId = ref<string>('select-container-' + uuidv4());
const selectRef: Ref = ref();
const labelPosition = ref<string>(props.position);
const selectedOption = ref<string>('');
const componentRef = ref();
const optionsList = ref<OptionsProp[]>([...props.options]);
const searchRef = ref<string>('');
const optionRefs = ref<HTMLElement[]>([]);

onMounted(() => {
  // If sort prop is true, sort list before default option is added to the array
  props.sort
    ? optionsList.value.sort((a, b) =>
        a.text > b.text ? 1 : b.text > a.text ? -1 : 0
      )
    : null;

  const defaultSelect: OptionsProp = {
    id: '0',
    value: props.defaultoption ? props.defaultoption : '',
    text: props.defaultoption ? props.defaultoption : '-- Choose an option --',
  };
  optionsList.value.unshift(defaultSelect);
});

const popperInstance = computed(() => {
  const wrapperElem = document.querySelector(`#${selectId.value}`) as HTMLElement;
  const selectElem = document.querySelector(`.${selectId.value}`) as HTMLElement;
  
  return createPopper(wrapperElem, selectElem, {
    placement: 'auto-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: [`bottom-end`, `top-end`],
        },
      },
      {
        name: 'offset',
        options: {
          offset: [0, props?.position == 'top' ? 12 : 2],
        },
      },
    ],
    strategy: 'absolute',
  });
});

const handleShowOptions: () => void = () => {
  showOptions.value = !showOptions.value;
  if (showOptions.value) {
    const selectElem = document.getElementById(
      selectContainerId.value
    ) as HTMLElement;
    if (selectElem) {
      // Only for Vitest
      selectElem.focus();
    }

    popperInstance.value.update();
    selectRef.value.setAttribute('data-show', '');
  } else {
    selectRef.value.removeAttribute('data-show');
  }
};

const handleEnterShow: () => void = () => {
  handleShowOptions();
};

let searchTimer: ReturnType<typeof setTimeout> | null = null;
const handleSearch: (e: KeyboardEvent) => void = (e) => {
  if (
    document.querySelector(`.${selectId.value}`)?.hasAttribute('data-show') &&
    e.key != 'Enter' &&
    e.key != 'Alt' &&
    e.key != 'Tab'
  ) {
    if(e.key == 'Space') {
      searchRef.value = searchRef.value + ' ';
    } else {
      searchRef.value = searchRef.value + e.key;
    }
  
    const index = optionsList.value.findIndex(option => option.text.toLowerCase().includes(searchRef.value))
    optionRefs.value[index].focus()

    if (searchTimer) {
      return;
    }

    searchTimer = setTimeout(() => {
      searchRef.value = '';
      searchTimer = null;
    }, 2500);
  }
};

const handleSelectOption: (option: string, value: string) => void = (option, value) => {
  selectedOption.value = option;
  showOptions.value = false;
  document.getElementById(selectContainerId.value)?.focus();  

  selectRef.value.removeAttribute('data-show');
  emit('change', value);
};

const handleEnterSelect: (option: string, value: string, e: KeyboardEvent) => void = ( option, value, e) => {
  e.stopPropagation();
  selectRef.value.removeAttribute('data-show');
  handleSelectOption(option, value);
};

// Close option list on click outside the component
useDetectOutsideClick(componentRef, () => {
  showOptions.value = false;
  selectRef.value.removeAttribute('data-show');
});
</script>

<template>
  <section
    :id="selectId"
    ref="componentRef"
    :tabindex="-1"
    class="select"
    :focusable="false"
  >
    <div
      :id="selectContainerId"
      class="select-container"
      :tabindex="0"
      @click="handleShowOptions"
      @keydown.enter="handleEnterShow"
      @keydown="handleSearch($event)"
    >
      <p v-if="selectedOption.length > 0" class="active--option subtitle2">
        {{ selectedOption }}
      </p>
      <label
        class="select--label subtitle2"
        :class="[`label-${labelPosition}`]"
        for="select-input"
        :data-active="[showOptions && labelPosition == 'inside' ? true : false]"
        :tabindex="-1"
      >
        {{ props.label }}
      </label>
      <div class="select--button">
        <Icon
          :class="[showOptions ? 'options-active' : null]"
          icon="caret-down"
          :size="16"
        />
      </div>
    </div>
    <div
      id="option__container"
      ref="selectRef"
      :class="selectId"
      @keydown="handleSearch($event)"
    >
      <div
        v-for="(option, index) in optionsList"
        :id="`option-${option.id}`"
        :ref="(el) => { optionRefs[index] = el as HTMLElement }"
        :key="index"
        :class="
          selectedOption == option.text ? 'option--selected option' : 'option'
        "
        tabindex="0"
        @click="handleSelectOption(option.text, option.value)"
        @keydown.enter="handleEnterSelect(option.text, option.value, $event)"
        @keyup.escape="handleShowOptions"
        @keydown.tab="useTabTrap($event)"
        @keyup="useRemoveRecordedStroke($event)"
      >
        {{ option.text }}
      </div>
    </div>
  </section>
</template>

<style lang="scss" scoped>
@import "@/components/select/select.scss";
</style>
