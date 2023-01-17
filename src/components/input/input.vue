<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  type Ref,
} from 'vue';
import { defaultVariantMixin, inputVariant } from '@/helpers/mixins/jsMixins';


type InputProps = {
  text: string
  variant?: string
  placeholder?: string | undefined
  accordian?: boolean
  disabled?: boolean
  activeDropdown?: boolean
};

const emit = defineEmits(['change']);

const props = withDefaults(defineProps<InputProps>(), {
  placeholder: undefined,
  accordian: false,
  variant: 'text',
  text: 'Label',
  activeDropdown: false,
  disabled: false,
});

const success = true
const error = true

const type: Ref = ref<string>(props.variant);
const disableCheck: Ref = ref<boolean>(props.disabled);

defaultVariantMixin(inputVariant).verifyVariant(props.variant)
  ? ''
  : (type.value = 'text');
const inputClass = ref('input--' + type.value);

// dynamic component import
const AsyncIcon = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } return null;
});

const AsyncSuccess = computed(() => {
  {
    const Icon = defineAsyncComponent(
      () => import('@/components/icons/icons.vue')
    );
    return Icon;
  } return null;
});

let showPassword:boolean = false

function changePasswordVisibility (){
  showPassword=!showPassword
  console.log(showPassword)
}

</script>

<template>
  <div class="topWrapper">
    <h2>{{ props.text }}
      <AsyncIcon v-if="props.accordian" class="dropdown" :class="[props.activeDropdown ? 'active' : null]"
        icon="caret-down" />
    </h2>
    <slot></slot>
  </div>

  <div :disabled=disableCheck :class="['inputWrapper', inputClass, props.disabled ? 'disabled' : '']">
    <input @click="emit('change')" type="text" :placeholder="props.placeholder" :disabled=disableCheck>

    <AsyncIcon class="warningIcon" v-if="error" icon="warning" variant="danger" />
    <AsyncSuccess class="successIcon" v-if="success" icon="check" variant="success" />
    <div v-if="props.variant=='password'" class="passwordControls">
      <AsyncSuccess   @click=changePasswordVisibility class="passwordIcon" icon="eye" />
      <AsyncSuccess  @click=changePasswordVisibility class="passwordIcon"  icon="eye-slash" />
    </div>

  </div>
  <div class="userInstructions">
    <p class="errorMessageText">
      <slot name="error"> </slot>
    </p>
    <p class="successMessageText">
      <slot name="success"> </slot>
    </p>
    <p class="helperMessageText">
      <slot name="helper"> </slot>
    </p>
  </div>


</template>

<style lang="scss" scoped>
@import "./input.scss";
</style>
