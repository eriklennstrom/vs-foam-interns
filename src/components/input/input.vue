<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  watch,
  type Ref,
} from 'vue';
import {
  inputSize,
  defaultVariantMixin,
  inputVariant,
} from '@/helpers/mixins/jsMixins';
import('@/components/button/button.vue');

type InputProps = {
  text: string
  variant?: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  accordian?: boolean
  disabled?: boolean
  activeDropdown?: boolean
  modelValue?: string | null
  helpertext?: string
  size?: string
};

const emit = defineEmits(['change', 'update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: '',
  isValid: null,
  placeholder: undefined,
  accordian: false,
  variant: 'text',
  text: 'Label',
  activeDropdown: false,
  disabled: false,
  helpertext: '',
  modelValue: '',
  size: 'M',
});

const size: Ref = ref<string>(props.size);
const variantMiddleware: Ref = ref<string>(props.variant);
const showPassword: Ref = ref<boolean>(false);

defaultVariantMixin(inputSize).verifyVariant(size.value)
  ? ''
  : (size.value = 'M');

const type: Ref = ref<string>(props.variant);
const accordianSwitch: Ref = ref<boolean>(false);

defaultVariantMixin(inputVariant).verifyVariant(props.variant)
  ? ''
  : (type.value = 'text');
const inputClass = ref('input--' + type.value);

watch(
  () => showPassword.value,
  (newVal) => {
    newVal
      ? (variantMiddleware.value = 'text')
      : (variantMiddleware.value = 'password');
  }
);

function emitInput(e: any) {
  const targetVal = e.value;
  emit('update:modelValue', targetVal);
}

function changePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function toggleAccordian() {
  accordianSwitch.value = !accordianSwitch.value;
  console.log(accordianSwitch.value);
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
</script>

<template>
  <div :class="[size, 'topWrapper', props.disabled ? 'disabled' : '']">
    <h2>
      {{ props.text }}
      <div v-if="props.accordian" class="iconWrapper">
        <AsyncIcon
          v-if="props.accordian"
          class="dropdown"
          :class="[
            props.activeDropdown ? 'active' : '',
            accordianSwitch ? 'toggledAccordian' : '',
          ]"
          icon="caret-down"
          @click="toggleAccordian"
        />
      </div>
    </h2>

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

    <div v-if="props.variant == 'password'" class="passwordControls">
      <AsyncIcon
        v-if="showPassword == false"
        class="passwordIcon"
        icon="eye"
        @click="changePasswordVisibility"
      />
      <AsyncIcon
        v-if="showPassword == true"
        class="passwordIcon"
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
  <div class="userInstructions">
    <p
      :class="[
        props.isValid == true ? 'successMessageText' : '',
        props.isValid == false ? 'errorMessageText' : '',
      ]"
    >
      {{ props.validationText }}
    </p>
    <p class="helperMessageText">
      {{ props.helpertext }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
@import "./input.scss";
</style>
