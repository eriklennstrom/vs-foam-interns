<script setup lang="ts">
import type maxlengthInterface from '@/helpers/types/interface';
import {
  defineEmits,
  defineAsyncComponent,
  computed,
  ref,
  type Ref,
} from 'vue';
import { v4 as uuidv4 } from 'uuid';



type InputProps = {
  label?: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  disabled?: boolean
  modelValue?: number
  helpertext?: string
  maxlength?: maxlengthInterface['maxlength']
  maxvalue?: number
  direction?: 'horizontal' | 'vertical'
  increment?: number
};



const emit = defineEmits(['change', 'update:modelValue']);

const props = withDefaults(defineProps<InputProps>(), {
  validationText: 'validation text',
  isValid: null,
  placeholder: undefined,
  label: '',
  disabled: false,
  helpertext: '',
  modelValue: 0,
  maxlength: 3,
  maxvalue: 999,
  direction: 'horizontal',
  increment: 1,
});

const maxLengthRef: Ref = ref(props.maxlength);

function emitInput(e: HTMLInputElement)  {
  if (e) {

  if (e.value == '' ) {
    e.value = '0';
  }
  e.value = e.value.slice(0, maxLengthRef.value);
  const emitValue = parseInt(e.value.slice(0, maxLengthRef.value));

  if (emitValue !== props.modelValue) {
    emit('update:modelValue', emitValue);
  }
}
}

const verticalAlignment = props.direction == 'vertical' ? 'verticalStyle' : '';
const labelRef = ref(uuidv4());


function increment() {
  const updatedValue = props.modelValue + props.increment;
  if (updatedValue > props.maxvalue) {
    emit('update:modelValue', props.maxvalue);
  }
  if (
    updatedValue.toString().length <= maxLengthRef.value &&
    updatedValue <= props.maxvalue
  )
    emit('update:modelValue', props.modelValue + props.increment);
}

function decrement() {
  const updatedValue = props.modelValue - props.increment;
  if (updatedValue < 0) {
    emit('update:modelValue', 0);
  } else if (props.modelValue > 0)
    emit('update:modelValue', props.modelValue - props.increment);
}

const horizontalWidthCalculation = (maxLengthRef.value * 12).toString();
const verticalWidthCalculation = (maxLengthRef.value * 12).toString();
const verticalWidthCalculationAlignment = (
  verticalWidthCalculation + 40
).toString();

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
  <div class="number-input">
    <div :class="['number-input__top', props.disabled ? 'disabled' : '']">
      <label :for="labelRef" class="body1">
        {{ props.label }}
      </label>
    </div>
    <div
      class="number-input__alignment"
      :style="{
        width:
          props.direction == 'vertical'
            ? verticalWidthCalculationAlignment + ' px'
            : '',
      }"
    >
      <div
        v-if="props.direction == 'vertical'"
        :style="{
          width:
            props.direction === 'vertical'
              ? verticalWidthCalculation + 'px'
              : '',
        }"
        :class="[
          'increment-div__vertical',
          'indicator',
          props.disabled ? 'disabled' : '',
        ]"
        role="button"
        tabindex="0"
        @click="increment"
        @keydown.space="increment"
        @keydown.enter="increment"
      >
        <AsyncIcon icon="chevron-up" />
      </div>

      <div
        :disabled="props.disabled"
        :class="[
          'input__wrapper',
          verticalAlignment,
          props.disabled ? 'disabled' : '',
        ]"
      >
        <div
          v-if="props.direction == 'horizontal'"
          class="decrement-div__horizontal indicator"
          role="button"
          tabindex="0"
          @click="decrement"
          @keydown.space="decrement"
          @keydown.enter="decrement"
        >
          <AsyncIcon icon="chevron-left" />
        </div>

        <input
          :id="labelRef"
          :style="{
            width:
              props.direction === 'horizontal'
                ? horizontalWidthCalculation + 'px'
                : verticalWidthCalculation + 'px',
          }"
          autocomplete="off"
          type="number"
          :placeholder="props.placeholder"
          :disabled="props.disabled"
          :value="props.modelValue"
          class="h5"
          tabindex="0"
          @input=" emitInput($event.target as HTMLInputElement)"
        >

        <div
          v-if="props.direction == 'horizontal'"
          :class="['increment-div__horizontal indicator']"
          role="button"
          tabindex="0"
          @click="increment"
          @keydown.space="increment"
          @keydown.enter="increment"
        >
          <AsyncIcon icon="chevron-right" />
        </div>
      </div>

      <div
        v-if="props.direction == 'vertical'"
        :style="{ width: verticalWidthCalculation + 'px' }"
        :class="[
          'decrement-div__vertical',
          'indicator',
          props.disabled ? 'disabled' : '',
        ]"
        role="button"
        tabindex="0"
        @click="decrement"
        @keydown.space="decrement"
        @keydown.enter="decrement"
      >
        <AsyncIcon icon="chevron-down" />
      </div>
    </div>
    <div :class="['user-instructions']">
      <p
        v-if="props.isValid != null"
        :class="['body2',
                 props.disabled ? 'disabled' : '',
                 props.isValid == true ? 'successMessageText' : '',
                 props.isValid == false ? 'errorMessageText' : '',
        ]"
      >
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

        {{ props.validationText }}
      </p>
      <p class="helper-message-text body2">
        {{ props.helpertext }}
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "./number-input.scss";
</style>
