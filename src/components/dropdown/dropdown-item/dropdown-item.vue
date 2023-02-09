<script setup lang="ts">import { computed, defineAsyncComponent, onMounted, ref, useSlots, type Ref} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import { defaultTypeMixin, dropdownItemTypes, dropdownIconPos } from '@/helpers/mixins/jsMixins';
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
    iconAlign?: string
};

type SlotName = {
    __name : string
   }

const props = withDefaults(defineProps<DropdownPropsItem>(), {
    text: '',
    icon: null,
    type: 'button',
    to: '/',
    secondaryText: null,
    width: null,
    subdropdown: false,
    iconAlign : 'right'
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
const displaySubdropdown = ref<boolean>(props.subdropdown)
const iconPos = ref<string>(props.iconAlign)

onMounted(() => {
  
  elementType.value != 'button' ? selectedItem.value = false : null
  !props.text ? secondaryText.value = null : null
})

defaultTypeMixin(dropdownItemTypes).verifyType(props.type)
  ? ''
  : (elementType.value = 'button');


defaultTypeMixin(dropdownIconPos).verifyType(iconPos.value)
  ? ''
  : (iconPos.value = 'right');


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

const handleShowSubDropdown: (e: KeyboardEvent) => void = (e) => {
  e.stopPropagation()
  e.preventDefault()
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
  showSubDropdown.value = !showSubDropdown.value
  const buttonElem = document.querySelector(`#${subDropdownId.value}`) as HTMLElement
  buttonElem.focus()
  subDropdown.value.removeAttribute('data-show')
}

const subDropdownRef = ref()
// Close dropdown on click outside the component
useDetectOutsideClick(subDropdownRef, () => { 
  if(showSubDropdown.value) {
    showSubDropdown.value = false 
    subDropdown.value.removeAttribute('data-show')
  }
})

onMounted(() => {
  const dropdownElem = document.querySelectorAll(`#sub-dropdown`)
  
  const elements = ref()
   dropdownElem.forEach(el => { 
    elements.value = el.querySelectorAll('a, button') 
    elements.value.forEach((el: Element) => {
      el.classList.add('sub-dropdown__item')
    })
   })

   const slots = useSlots()
   if(slots.default)
    Array.from(slots.default()).forEach(function (element) {  
      const slotElems = element.type as SlotName         
      slotElems.__name != 'dropdown-item' ? displaySubdropdown.value = false : null     
  });
   
   const subdropdownEl = document.querySelector(`.${subDropdownId.value}`) as HTMLElement
   for(let i = 0; i < 5; i++) {
     if(subdropdownEl) {
       const childElems = subdropdownEl.children
     
       let currentParent = subdropdownEl
       for(let j = 0; j < i; j++) {
         currentParent = currentParent.parentElement as HTMLElement
        }
        if(currentParent.id === 'dropdown') {
          // Max sub dropdown layers set to 2
          if(i > 2) { 
            displaySubdropdown.value = false; 
            return
          }
        Array.from(childElems).forEach(el => el.classList.add(`sub__item--${i}`))
      }
    }
  }
}

)

</script>

<template>
  <component
    :is="elementType == 'link' ? 'a' : elementType == 'route' ? 'router-link' : 'button'"
    :id="displaySubdropdown ? subDropdownId : dropdownId"
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
    @click="elementType == 'button' && !displaySubdropdown ? emit('click') : displaySubdropdown ? handleShowSubDropdown($event) : null"
    @keyup.arrow-right="handleShowSubDropdown($event)"
    @keyup.enter="elementType == 'route' ? goToRoute($event) : null"
    @keydown="useTabTrap($event)"
    @keyup="useRemoveRecordedStroke($event)"
  >
    <AsyncSelectedIcon
      v-if="props.selected"
      icon="check"
      :size="8"
      variant="primary"
    />
    <AsyncIcon v-if="props.icon && !displaySubdropdown && iconPos == 'left'" :size="10" :icon="props.icon" />
    <div v-if="props.text" class="text-container">
      <p>
        {{ props.text }}
      </p>
      <p v-if="secondaryText" class="secondary-text">
        {{ secondaryText }}
      </p>
    </div>
    <AsyncIcon v-if="props.icon && !displaySubdropdown && iconPos == 'right'" :size="10" :icon="props.icon" />
    <AsyncSubdropdownIcon
      v-if="displaySubdropdown"
      class="subdropdown-icon"
      :dropdown-open="[showSubDropdown]"
      :size="10"
      icon="caret-down"
    />
    <p v-if="displaySubdropdown" />
  </component>
  <div
    v-if="elementType == 'button' && displaySubdropdown"
    id="sub-dropdown"
    ref="subDropdown"
    :class="subDropdownId"
    :style="{ width: props.width ? props.width + 'px' : '100%' }"
    @keyup.arrow-left="handleCloseSubDropdown($event)"
    @keyup.escape="handleCloseSubDropdown($event)"
  >
    <slot />
  </div>
</template>

<style lang="scss" scoped>
    @import "@/components/dropdown/dropdown.scss";
</style>