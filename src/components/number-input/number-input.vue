<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  computed,
  ref,
  type Ref,
  onBeforeMount,
} from 'vue';

type InputProps = {
  label?: string
  validationText?: string
  isValid?: boolean | null
  placeholder?: string | undefined
  disabled?: boolean
  modelValue?: number
  helpertext?: string
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
  label: '',
  disabled: false,
  helpertext: '',
  modelValue: 0,
  maxLength: 3,
  maxValue: 999,
  direction: 'horizontal',
  increment: 1,
});

const maxLengthRef: Ref = ref(props.maxLength);
onBeforeMount(() => {
  if (maxLengthRef.value > 14) maxLengthRef.value = 14;
});

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function emitInput(e: any) {
  if (e.value > props.maxValue) {
    e.value = props.maxValue;
  }
  if (e.value == '') {
    e.value = 0;
  }
  e.value = e.value.slice(0, maxLengthRef.value);
  const emitValue = parseInt(e.value.slice(0, maxLengthRef.value));

  if (emitValue !== props.modelValue) {
    emit('update:modelValue', emitValue);
  }
}
}

const verticalAlignment = props.direction == 'vertical' ? 'verticalStyle' : '';

function increment() {
  const updatedValue = props.modelValue + props.increment;
  if (updatedValue > props.maxValue) {
    emit('update:modelValue', props.maxValue);
  }
  if (
    updatedValue.toString().length <= maxLengthRef.value &&
    updatedValue <= props.maxValue
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
const verticalWidthCalculation = (maxLengthRef.value * 9).toString();
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
  <div class="numbers-input__div">
    <div :class="['topWrapper', props.disabled ? 'disabled' : '']">
      <h1 class="h3">
        {{ props.label }}
      </h1>
    </div>
    <div
      class="alignment__container"
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
          'vertical__incrementDiv',
          'indicator',
          props.disabled ? 'disabled' : '',
        ]"
        role="button"
        @click="increment"
      >
        <AsyncIcon icon="chevron-up" />
      </div>

      <div
        :disabled="props.disabled"
        :class="[
          'inputWrapper',
          verticalAlignment,
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
        :style="{ width: verticalWidthCalculation + 'px' }"
        :class="[
          'vertical__decrementDiv',
          'indicator',
          props.disabled ? 'disabled' : '',
        ]"
        role="button"
        @click="decrement"
      >
        <AsyncIcon icon="chevron-down" />
      </div>
    </div>
    <div :class="['userInstructions']">
      <p
        v-if="props.isValid != null"
        :class="[
          props.disabled ? 'disabled' : '',
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
