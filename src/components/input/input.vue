<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  watch,
  useSlots
} from 'vue';
import { v4 as uuidv4 } from 'uuid';
import {
  inputSize,
  defaultVariantMixin,
  inputVariant,
} from '@/helpers/mixins/jsMixins';
import('@/components/button/button.vue');



type InputProps = {
  label: string
  variant?: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  disabled?: boolean
  modelValue?: string | null
  helpertext?: string
  size?: string
};



const slots = useSlots();


const emit = defineEmits(['change', 'update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: '',
  isValid: null,
  placeholder: undefined,
  variant: 'text',
  label: 'Label',
  disabled: false,
  helpertext: '',
  modelValue: '',
  size: 'md',
});
const accordionRef = ref<boolean>(false);
slots.sentContent ? (accordionRef.value = true) : (accordionRef.value = false);
const size = ref<string>(props.size);
const variantMiddleware = ref<string>(props.variant);
const showPassword= ref<boolean>(false);
const type= ref<string>(props.variant);
const accordionSwitch= ref<boolean>(false);
const labelRef = ref<string>(uuidv4().substring(0, 5));


defaultVariantMixin(inputSize).verifyVariant(size.value)
  ? ''
  : (size.value = 'md');

defaultVariantMixin(inputVariant).verifyVariant(props.variant)
  ? ''
  : (type.value = 'text');

const inputClass= ref('input--' + type.value);

// Watch for Password-show
watch(
  () => showPassword.value,
  (newVal) => {
    newVal
      ? (variantMiddleware.value = 'text')
      : (variantMiddleware.value = 'password');
  }
);


function emitInput(e: EventTarget | null) {
  if (e && 'value' in e) {
    emit('update:modelValue', e.value)
  }
  return
}

function changePasswordVisibility() {
  showPassword.value = !showPassword.value;

}

function toggleAccordion() {
  accordionSwitch.value = !accordionSwitch.value;
}

function start(el: HTMLElement) {
  el.style.height = el.scrollHeight + 'px';
}
function end(el: HTMLElement) {
  el.style.height = '';
}

// dynamic component import
const AsyncIcon = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  }
});

//USE sentContent class for styling in parent



</script>

<template>
  <div class="input-body">
    <div :class="[size, 'input-body__top-wrapper', props.disabled ? 'disabled' : '']">
      <label :for="labelRef" class="body1">
        {{ props.label }}
        <div v-if="accordionRef" class="icon-wrapper">
          <AsyncIcon
            class="dropdown"
            :class="[accordionSwitch ? 'accordion__toggled' : '']"
            icon="caret-down"
            tabindex="0"
            style="cursor: pointer;"
            @keydown.enter="toggleAccordion"
            @keydown.space="toggleAccordion"
            @click="toggleAccordion"
          />
        </div>
      </label>

      <transition
        name="slot"
        @enter="start"
        @after-enter="end"
        @before-leave="start"
        @after-leave="end"
      >
        <slot
          v-if="accordionSwitch"
          name="sentContent"
          class="sent-content"
          appear
        />
      </transition>
    </div>

    <div
      :disabled="props.disabled"
      :class="[
        size,
        'input__wrapper',
        inputClass,
        props.isValid ? 'valid' : '',
        props.isValid == false ? 'invalid' : '',
        props.disabled ? 'disabled' : '',
      ]"
    >
      <input
        :id="labelRef"
        autocomplete="off"
        :type="variantMiddleware"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :value="props.modelValue"
        tabindex="0"
        @input="emitInput($event.target)"
      >

      <div
        v-if="variantMiddleware == 'password' || props.variant == 'password'"
        ref="password__controls"
        class="password-controls"
        tabindex="0"
        style="cursor: pointer;"
        @keydown.enter="changePasswordVisibility"
        @keydown.space="changePasswordVisibility"
        @click="changePasswordVisibility"
      >
        <AsyncIcon
          v-if="showPassword == false"
          icon="eye"
        />
        <AsyncIcon
          v-if="showPassword == true"
          icon="eye-slash"
        />
      </div>
      <AsyncIcon
        v-if="props.isValid == false"
        class="warning-icon"
        icon="warning"
        variant="danger"
      />
      <AsyncIcon
        v-if="props.isValid == true"
        class="success-icon"
        icon="check"
        variant="success"
      />
    </div>
  </div>
  <div class="user-instructions text-sm">
    <p 
      v-if="props.isValid != null"
      :class="[
        props.disabled ? 'disabled' : '',
        props.isValid == true ? 'success-message-text' : '',
        props.isValid == false ? 'error-message-text' : '',
      ]"
    >
      {{ props.validationText }}
    </p>
    <p class="helper-message-text text-sm">
      {{ props.helpertext }}
    </p>
    <slot name="helper-message-text" class="helper-message-text"/> 
  </div>
</template>

<style lang="scss" scoped>
@import "./input.scss";
</style>
