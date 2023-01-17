<script setup lang="ts">
import { computed, ref, type Ref } from 'vue';
import FoamButton from '@/components/button/button.vue';
import { v4 as uuidv4 } from 'uuid';
import { createPopper } from '@popperjs/core';

type DropdownProps = {
    variant?: string
    text?: string
    icon?: string | null
};

const props = withDefaults(defineProps<DropdownProps>(), {
    variant: 'secondary',
    text: 'Foam Dropdown',
    icon: null
});

const showDropdown: Ref = ref<boolean>(false);
const dropdownId = ref(uuidv4())
const dropdown = ref()
// Is this needed?
const role: Ref = ref<string>('button')

const popperInstance = computed(() => {
  const buttonElem = document.querySelector('.button') as HTMLElement
  const dropdownElem = document.querySelector('#dropdown') as HTMLElement
  return createPopper(buttonElem, dropdownElem, {
    placement: 'auto-start',
    modifiers: [
      {
        name: 'flip',
        options: {
          allowedAutoPlacements: ['bottom-start', 'top-start']
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

</script>

<template>
  <section
    :id="dropdownId"
    :role="role"
    :action="props.variant"
    class="dropdown-container"
  >
    <FoamButton
      class="button"
      dropdown
      :text="props.text"
      :variant="props.variant"
      :active-dropdown="showDropdown"
      :icon="props.icon"
      @click="handleShowDropdown"
    />
    <div id="dropdown" ref="dropdown">
      <slot ></slot>

    </div>

  </section>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>