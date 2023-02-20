<script setup lang="ts">
import {
  defineEmits,
  defineAsyncComponent,
  computed,
  ref,
  type Ref,
  onBeforeMount,
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
  maxlength?: number
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
onBeforeMount(() => {
  if (maxLengthRef.value > 14) maxLengthRef.value = 14;
});


function emitInput(e: HTMLInputElement)  {
  if (e) {
 const comparevalue = parseInt(e.value)
  if ( comparevalue > props.maxvalue) {
    e.value = props.maxvalue.toString();
  }
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
const labelRef = ref(props.label+ ' '+ uuidv4());


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
  <div class="numbers-input__div">
    <div :class="['topWrapper', props.disabled ? 'disabled' : '']">
      <label :for="labelRef" class="h3">
        {{ props.label }}
      </label>
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
          'inputWrapper',
          verticalAlignment,
          props.disabled ? 'disabled' : '',
        ]"
      >
        <div
          v-if="props.direction == 'horizontal'"
          class="horizontal__decrementDiv indicator"
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
          :class="['horizontal__incrementDiv indicator']"
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
          'vertical__decrementDiv',
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
