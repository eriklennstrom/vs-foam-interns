<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  computed
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
  maxValue?: number
  direction?: 'horizontal' | 'vertical'
  increment?: number

};

const emit = defineEmits(['change', 'update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: 'validation text',
  isValid: null,
  placeholder: undefined,
  text: 'Label',
  disabled: false,
  helpertext: '',
  modelValue: 0,
  defaultvalue: 0,
  maxLength: 5,
  maxValue: 99999,
  direction: 'horizontal',
  increment: 1
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function emitInput(e: any) {
  if (e.value == '') {
    e.value = 0
  }
  e.value = e.value.slice(0, props.maxLength)
  const emitValue = parseInt(e.value.slice(0, props.maxLength))

  if (emitValue !== props.modelValue) {
    emit('update:modelValue', emitValue);
  }
}

const verticalAlignment = props.direction == 'vertical' ? 'verticalStyle' : ''

function increment() {
  const updatedValue = props.modelValue + props.increment
  if (updatedValue.toString().length <= props.maxLength && updatedValue <= props.maxValue)
    emit('update:modelValue', props.modelValue + props.increment)
}

function decrement() {
  if (props.modelValue > 0)
    emit('update:modelValue', props.modelValue - props.increment)
}

const horizontalWidthCalculation = (props.maxLength * 12)
const verticalWidthCalculation = (props.maxLength * 9)

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
  <div class="numbers-input__div">
    <div :class="['topWrapper', props.disabled ? 'disabled' : '']">
      <h2>
        {{ props.text }}
      </h2>
    </div>
    <div
      v-if="props.direction == 'vertical'"
      :style="{ width: props.direction === 'vertical' ? verticalWidthCalculation + 'px' : '' }"
      :class="['vertical__incrementDiv', 'indicator',
               props.disabled ? 'disabled' : '']"
      role="button"
      @click="increment"
    >
      <AsyncIcon icon="chevron-up" />
    </div>

    <div
      :disabled="props.disabled"
      :class="[
        'inputWrapper', verticalAlignment,
        props.disabled ? 'disabled' : '',
      ]"
    >
      <div
        v-if="props.direction == 'horizontal'"
        class="horizontal__decrementDiv indicator"
        role="button"
        @click="decrement"
      >
        <AsyncIcon icon="chevron-left" />
      </div>

      <input
        :style="{ width: props.direction === 'horizontal' ? horizontalWidthCalculation + 'px' : verticalWidthCalculation + 'px' }"
        autocomplete="off"
        type="number"
        :placeholder="props.placeholder"
        :disabled="props.disabled"
        :value="props.modelValue"
        @input="emitInput($event.target)"
      >


      <div
        v-if="props.direction == 'horizontal'"
        :class="['horizontal__incrementDiv indicator']"
        role="button"
        @click="increment"
      >
        <AsyncIcon icon="chevron-right" />
      </div>
    </div>

    <div
      v-if="props.direction == 'vertical'"
      :style="{ width: props.direction === 'vertical' ? verticalWidthCalculation + 'px' : '' }"
      :class="['vertical__decrementDiv', 'indicator',
               props.disabled ? 'disabled' : '']"
      role="button"
      @click="decrement"
    >
      <AsyncIcon icon="chevron-down" />
    </div>
    <div
      :class="['userInstructions',
               props.direction==='horizontal' ? 'horizontal__helperoffset' : '']"
    >
      <p
        v-if="props.isValid != null"
        :class="[
          props.isValid == true ? 'successMessageText' : '',
          props.isValid == false ? 'errorMessageText' : '',
        ]"
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
        
        {{ props.validationText }}
         
      </p>
      <p class="helperMessageText">
        {{ props.helpertext }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./number-input.scss";
</style>