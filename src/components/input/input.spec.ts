import { describe, it, expect } from 'vitest';
import { mount, shallowMount } from '@vue/test-utils';
import Input from '@/components/input/input.vue';
import { ref } from 'vue';

describe('Input', () => {
  it('Input', () => {
    it('has default values for props', () => {
      const wrapper = mount(Input);
      expect(wrapper.props().text).toBe('Label');
      expect(wrapper.props().variant).toBe('text');
      expect(wrapper.props().validationText).toBe('');
      expect(wrapper.props().isValid).toBe(null);
      expect(wrapper.props().placeholder).toBeUndefined();
      expect(wrapper.props().disabled).toBe(false);
      expect(wrapper.props().modelValue).toBe('');
      expect(wrapper.props().helpertext).toBe('');
      expect(wrapper.props().size).toBe('md');
    });
  });

  it('Input Component', () => {
    it('should have a computed value for inputClass', () => {
      const type = ref<string>('text');
      const inputClass = ref('input--' + type.value);
      expect(inputClass.value).toBe('input--text');
    });
  });

  it('Input component', () => {
    it('emits an "update:modelValue" event when its value changes', () => {
      const wrapper = shallowMount(Input);
      const inputEl = wrapper.find('input');
      inputEl.setValue('new value');
      expect(wrapper.emitted('update:modelValue')).toEqual([['new value']]);
    });
  });

  it('Input component', () => {
    it('changes the variant of the input component when a variant prop is passed', () => {
      const wrapper = shallowMount(Input, {
        propsData: { variant: 'password' }
      });
      expect(wrapper.vm).toBe('password');
    });
  });

  it('Input', () => {
    const wrapper = mount(Input, {
      propsData: {
        size: 'lg',
        variant: 'text',
        isValid: true,
        disabled: false,
        text: 'Test'
      }
    });
  it('displays the label', () => {
      const label = wrapper.find('h2');
      expect(label.text()).toBe('Test');
    });
  });
});
