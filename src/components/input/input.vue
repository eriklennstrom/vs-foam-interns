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
};

const emit = defineEmits(['change']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: "",
  isValid: null,
  placeholder: undefined,
  accordian: false,
  variant: 'text',
  text: 'Label',
  activeDropdown: false,
  disabled: false,
});

const type: Ref = ref<string>(props.variant);

// dynamic component import
const AsyncIcon = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  };
});
const AsyncSuccess = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  };
});
defaultVariantMixin(inputVariant).verifyVariant(props.variant)
  ? ''
  : (type.value = 'text');
const inputClass = ref('input--' + type.value);




let variantMiddleware: Ref = ref<string>()
let showPassword: Ref = ref<boolean>(false);



if (props.variant == "password" && showPassword.value == false) {
  variantMiddleware.value = "password"
} else {
  variantMiddleware.value = "text"
  console.log("usch")
}


function changePasswordVisibility() {
  showPassword.value = !showPassword.value
  console.log(showPassword.value, "password value")
}
</script>


<template>
  <div class="topWrapper">
    <h2>{{ props.text }}
      <AsyncIcon v-if="props.accordian" class="dropdown" :class="[props.activeDropdown ? 'active' : null]"
        icon="caret-down" />
    </h2>
    <slot class="sendContent"/>
  </div>

  <div :disabled=props.disabled
    :class="['inputWrapper', inputClass, props.isValid? 'valid' : '', props.isValid!? 'invalid' : '', props.disabled ? 'disabled' : '']">
    <input autocomplete="off" @click="emit('change')" :type="variantMiddleware.value ? 'password' : props.variant"
      :placeholder="props.placeholder" :disabled=props.disabled>

    <AsyncIcon class="warningIcon" v-if="props.isValid == false" icon="warning" variant="danger" />
    <AsyncSuccess class="successIcon" v-if="props.isValid == true" icon="check" variant="success" />

    <div v-if="props.variant == 'password'" class="passwordControls">
      <AsyncSuccess :v-if="showPassword.value == false" @click=changePasswordVisibility class="passwordIcon"
        icon="eye" />
      <AsyncSuccess :v-if="showPassword.value == true" @click=changePasswordVisibility class="passwordIcon"
        icon="eye-slash" />
    </div>

  </div>
  <div class="userInstructions">
    <p :class="[props.isValid ? 'successMessageText' : '', !props.isValid? 'errorMessageText': '']">
      {{ props.validationText }}
    </p>
    <slot name="helperMessageText" class="helperMessageText"/> 
  </div>


</template>

<style lang="scss" scoped>
@import "./input.scss";
</style>
