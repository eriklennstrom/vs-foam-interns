<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  computed,
} from 'vue';


type InputProps = {
  text: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  disabled?: boolean
  modelValue?: number
  helpertext?: string
  defaultvalue?: number
  maxLength?: number
  maxValue?:number
  direction?: 'horizontal'| 'vertical'
  increment?:number

};

const emit = defineEmits(['change', 'update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: '',
  isValid: null,
  placeholder: undefined,
  text: 'Label',
  disabled: false,
  helpertext: '',
  modelValue: 0,
  defaultvalue: 0,
  maxLength: 6,
  maxValue: 999999,
  direction: 'horizontal',
  increment:1
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function emitInput(e: any) {
  console.log(e.value, 'evalue')
  if (e.value == '') {
    e.value = 0
  }
  e.value = e.value.slice(0, props.maxLength)
  const emitValue = parseInt(e.value.slice(0, props.maxLength))

  if(emitValue !== props.modelValue)  {
  console.log(emitValue, 'emitvalue')
  emit('update:modelValue', emitValue);
}
}

const verticalAlignment = props.direction=='vertical'? 'verticalStyle' : ''

function increment() {
  const updatedValue = props.modelValue +props.increment
  if(updatedValue.toString().length <= props.maxLength && updatedValue <= props.maxValue )
  emit('update:modelValue', props.modelValue + props.increment)
}

function decrement() {
  if(props.modelValue > 0 )
  emit('update:modelValue', props.modelValue - props.increment)
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
    v-if="props.direction=='vertical'"
    class="vertical__decrementDiv indicator"
    role="button"
    @click="increment"
  >
    <AsyncIcon
      icon="chevron-up"
    />
  </div>

  <div
    :disabled="props.disabled"
    :class="[
       'inputWrapper', verticalAlignment,
      props.isValid ? 'valid' : '',
      props.isValid == false ? 'invalid' : '',
      props.disabled ? 'disabled' : '',
    ]"
  >
    <div
      v-if="props.direction=='horizontal'"
      class="horizontal__decrementDiv indicator"
      role="button"
      @click="decrement"
    >
      <AsyncIcon
        icon="chevron-left"
      />
    </div>

    <input
      ref="inputElem"
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
      v-if="props.direction=='horizontal'"
      class="horizontal__incrementDiv indicator"
      role="button"
      @click="increment"
    >
      <AsyncIcon
        icon="chevron-right"
      />
    </div>
  </div>
  
  <div
    v-if="props.direction=='vertical'"
    class="vertical__decrementDiv indicator"
    role="button"
    @click="decrement"
  >
    <AsyncIcon
      icon="chevron-down"
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