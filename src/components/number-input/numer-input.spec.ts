import { describe, it, expect, beforeEach } from 'vitest';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faWarning,
  faArrowDown,
  faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown);
import Input from '@/components/number-input/number-input.vue';
import { mount} from '@vue/test-utils'

const wrapper = mount(Input, {propsData: {
  label: 'Test Label',
  validationText: 'Test Validation Text',
  isValid: null,
  placeholder: 'Test Placeholder',
  disabled: false,
  modelValue: 0,
  helpertext: 'Test Helper Text',
  defaultvalue: 0,
  maxLength: 3,
  maxValue: 999,
  direction: 'horizontal',
  increment: 1
}})

describe('Input', () => {
  it('displays the label', () => {
    const label = wrapper.find('h2')
    expect(label.text()).toBe('Test Label')
  })

  it('renders an input element with correct placeholder', () => {
    const input = wrapper.find('input')
    expect(input.attributes().placeholder).toBe('Test Placeholder')
  })

  it('emits an update:modelValue event when input value changes', async () => {
    const input = wrapper.find('input')
    input.setValue(100)
    await expect(wrapper.emitted()['update:modelValue'][0]).toEqual([100])
  })

  it('limits the max length of input value to 3 characters', async () => {
    const input = wrapper.find('input')
    input.setValue(1000)
    await expect(input.element.value).toBe('100')
  })
})