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
  maxLength: 1
});

function emitInput(e: any) {
  if (e.value == '') {
    e.value = 0
  }
  e.value = e.value.slice(0, props.maxLength)
  const emitValue = parseInt(e.value.slice(0, props.maxLength))
  emit('update:modelValue', emitValue);
}


function increment() {
  const updatedValue = props.modelValue +1
  if(updatedValue.toString().length == props.maxLength)
  emit('update:modelValue', props.modelValue + 1)
}

function decrement() {
  if(props.modelValue > 0 )
  emit('update:modelValue', props.modelValue - 1)
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

  <div :disabled="props.disabled" :class="[
    'inputWrapper',
    props.isValid ? 'valid' : '',
    props.isValid == false ? 'invalid' : '',
    props.disabled ? 'disabled' : '',
  ]">
    <div class="decrementDiv indicator" role="button" @click="decrement" > - </div>

    <input ref="inputElem" autocomplete="off" type="number" :placeholder="props.placeholder"
      :disabled="props.disabled" :value="props.modelValue" @input="emitInput($event.target)">

    <AsyncIcon v-if="props.isValid == false" class="warningIcon" icon="warning" variant="danger" />
    <AsyncIcon v-if="props.isValid == true" class="successIcon" icon="check" variant="success" />

    <div class="incrementDiv indicator" role="button" @click="increment" > + </div>
   
  </div>
  <div class="userInstructions">
    <p :class="[
      props.isValid == true ? 'successMessageText' : '',
      props.isValid == false ? 'errorMessageText' : '',
    ]">
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