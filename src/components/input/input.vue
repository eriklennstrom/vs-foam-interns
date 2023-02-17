<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  watch,
  useSlots,
  type Ref,
} from 'vue';
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
  text: 'Label',
  disabled: false,
  helpertext: '',
  modelValue: '',
  size: 'md',
});

const accordianRef: Ref = ref<boolean>(false);
slots.sentContent ? (accordianRef.value = true) : (accordianRef.value = false);
const size: Ref = ref<string>(props.size);
const variantMiddleware: Ref = ref<string>(props.variant);
const showPassword: Ref = ref<boolean>(false);
const type: Ref = ref<string>(props.variant);
const accordianSwitch= ref<boolean>(false);

defaultVariantMixin(inputSize).verifyVariant(size.value)
  ? ''
  : (size.value = 'md');

defaultVariantMixin(inputVariant).verifyVariant(props.variant)
  ? ''
  : (type.value = 'text');

const inputClass: Ref = ref('input--' + type.value);

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

function toggleAccordian() {
  accordianSwitch.value = !accordianSwitch.value;
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

function changePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function toggleAccordian() {
  accordianSwitch.value = !accordianSwitch.value;
}
</script>

<template>
  <div class="inputBody">
    <div :class="[size, 'topWrapper', props.disabled ? 'disabled' : '']">
      <label for="input" class="h3">
        {{ props.text }}
        <div v-if="accordianRef" class="iconWrapper">
          <AsyncIcon
            v-if="accordianRef"
            id="input"
            class="dropdown h2"
            :class="[accordianSwitch ? 'toggledAccordian' : '']"
            icon="caret-down"
            @click="toggleAccordian"
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
          v-if="accordianSwitch"
          name="sentContent"
          class="sentContent"
          appear
        />
      </transition>
    </div>

    <div
      :disabled="props.disabled"
      :class="[
        size,
        'inputWrapper',
        inputClass,
        props.isValid ? 'valid' : '',
        props.isValid == false ? 'invalid' : '',
        props.disabled ? 'disabled' : '',
      ]"
    >
      <input
        autocomplete="off"
        :type="variantMiddleware"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :value="props.modelValue"
        @input="emitInput($event.target)"
      >

      <div
        v-if="variantMiddleware == 'password' || props.variant == 'password'"
        class="passwordControls"
      >
        <AsyncIcon
          v-if="showPassword == false"
          icon="eye"
          @click="changePasswordVisibility"
        />
        <AsyncIcon
          v-if="showPassword == true"
          icon="eye-slash"
          @click="changePasswordVisibility"
        />
      </div>
      <AsyncIcon
        v-if="props.isValid == false"
        class="warningIcon"
        icon="warning"
        variant="danger"
      />
      <AsyncIcon
        v-if="props.isValid == true"
        class="successIcon"
        icon="check"
        variant="success"
      />
    </div>
    <AsyncIcon
      v-if="props.isValid == false"
      class="warningIcon"
      icon="warning"
      variant="danger"
    />
    <AsyncIcon
      v-if="props.isValid == true"
      class="successIcon"
      icon="check"
      variant="success"
    />
  </div>
  <div class="userInstructions text-sm">
    <p 
      v-if="props.isValid != null"
      :class="[
        props.disabled ? 'disabled' : '',
        props.isValid == true ? 'successMessageText' : '',
        props.isValid == false ? 'errorMessageText' : '',
      ]"
    >
      {{ props.validationText }}
    </p>
    <p class="helperMessageText text-sm">
      {{ props.helpertext }}
    </p>
    <slot name="helperMessageText" class="helperMessageText"/> 
  </div>
</template>

<style lang="scss" scoped>
@import "./input.scss";
</style>
