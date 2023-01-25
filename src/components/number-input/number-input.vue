<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  ref,
  computed,
  type Ref,
} from 'vue';


type InputProps = {
  text: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  disabled?: boolean
  modelValue?: number | null
  helpertext?: string
  defaultvalue?: number
};


const emit = defineEmits(['change', 'update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: '',
  isValid: null,
  placeholder: undefined,
  text: 'Label',
  disabled: false,
  helpertext: '',
  modelValue: null,
  defaultvalue: 0,
});

const numberRef: Ref = ref<number | null>(props.modelValue);
// const emitValue: Ref = ref<number | null>(props.modelValue);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function emitInput(e: any) {
  const targetVal = e.value.slice(0,5)
  emit('update:modelValue', targetVal);
  numberRef.value= targetVal
  console.log(numberRef.value , 'emitted value')
  console.log(props.modelValue, 'modelvalue.value')
}

function increment() {
    numberRef.value = numberRef.value++;
}

function decrement() {
    numberRef.value = numberRef.value--;
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
  <div :class="['topWrapper', props.disabled ? 'disabled' : '']">
    <h2>
      {{ props.text }}
    </h2>
  </div>

  <div
    :disabled="props.disabled"
    :class="[
      'inputWrapper',
      props.isValid ? 'valid' : '',
      props.isValid == false ? 'invalid' : '',
      props.disabled ? 'disabled' : '',
    ]"
  >
    <div
      class="decrementDiv"
  
      @click="decrement"
    />

    <input
      maxlength="5"
      autocomplete="off"
      type="number"
      :placeholder="props.placeholder"
      :disabled="props.disabled"
      :value="props.modelValue"
      @input="emitInput($event.target)"
    >

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

    <div
      class="incrementDiv" 
      @click="increment"
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
@import "./number-input.scss";
</style>