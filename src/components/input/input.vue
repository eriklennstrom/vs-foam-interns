<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  watch,
  type Ref,
  onBeforeMount,
} from 'vue';
import { defaultVariantMixin, inputVariant } from '@/helpers/mixins/jsMixins';

type InputProps = {
  text: string
  variant?: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  accordian?: boolean
  disabled?: boolean
  activeDropdown?: boolean
  modelValue?:string | null
  helpertext?:string
  
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
  modelValue:''
});

const type: Ref = ref<string>(props.variant);
const accordianSwitch: Ref = ref<boolean>(false);

// dynamic component import
const AsyncIcon = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  }
});
const AsyncSuccess = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  }
});

defaultVariantMixin(inputVariant).verifyVariant(props.variant)
  ? ''
  : (type.value = 'text');
const inputClass = ref('input--' + type.value);

const variantMiddleware: Ref = ref<string>(props.variant);
const showPassword: Ref = ref<boolean>(false);

watch(
  () => showPassword.value, 
  (newVal) => {
    newVal
      ? (variantMiddleware.value = 'text')
      : (variantMiddleware.value = 'password');
  }
);

function emitInput(e: InputEvent | null){
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
  emit('update:modelValue', e.target.value)

}

function changePasswordVisibility() {
  showPassword.value = !showPassword.value;
}

function toggleAccordian(){
  accordianSwitch.value= !accordianSwitch.value
}

</script>

<template>
  <div :class="['topWrapper', props.disabled ? 'disabled' : '' ]">
    <h2>
      {{ props.text }}
      <div v-if="props.accordian" class="iconWrapper">
        <AsyncIcon
          v-if="props.accordian"
          class="dropdown"
          :class="[props.activeDropdown ? 'active' : ''
                   , accordianSwitch? 'toggledAccordian' :'']"
          icon="caret-down"
          @click="toggleAccordian"
        />
      </div>
    </h2>
    <slot v-if="accordianSwitch" name="sendContent" class="sendContent" />
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
      @input="emitInput($event)"
    >

    <AsyncIcon
      v-if="props.isValid == false"
      class="warningIcon"
      icon="warning"
      variant="danger"
    />
    <AsyncSuccess
      v-if="props.isValid == true"
      class="successIcon"
      icon="check"
      variant="success"
    />

    <div v-if="props.variant == 'password'" class="passwordControls">
      <AsyncSuccess
        v-if="showPassword == false"
        class="passwordIcon"
        icon="eye"
        @click="changePasswordVisibility"
      />
      <AsyncSuccess
        v-if="showPassword == true"
        class="passwordIcon"
        icon="eye-slash"
        @click="changePasswordVisibility"
      />
    </div>
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
