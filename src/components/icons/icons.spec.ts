import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Icons from '@/components/icons/icons.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faUserSecret,
  faWarning,
  faArrowDown,
  faArrowAltCircleDown
} from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown);

describe('Icons', () => {
  it('renders properly', () => {
    const wrapper = mount(Icons, { propsData: { icon: 'warning' } });
    expect(wrapper.classes()).toContain('fa-warning');
  });

  it('renders correct icon prop', () => {
    const wrapper = mount(Icons, { propsData: { icon: 'warning' } });
    expect(wrapper.vm.icon).toBe('warning');
  });

  it('renders variant', () => {
    const wrapper = mount(Icons, {
      propsData: { icon: 'warning', variant: 'success' }
    });
    expect(wrapper.vm.variant).toBe('success');
    expect(wrapper.classes()).toContain('icon--success');
  });

  it('renders correct variant prop and class with no input', () => {
    const wrapper = mount(Icons);
    expect(wrapper.vm.variant).toBe('primary');
    expect(wrapper.classes()).toContain('icon--primary');
  });

  it('render correct size', () => {
    const wrapper = mount(Icons, {
      propsData: { icon: 'warning', size: 18 }
    });
    expect(getComputedStyle(wrapper.element).fontSize).toBe('18px');
  });

  it('render correct size with no input', () => {
    const wrapper = mount(Icons, { propsData: { icon: 'warning' } });
    console.log(getComputedStyle(wrapper.element).height);
    expect(getComputedStyle(wrapper.element).fontSize).toBe('100%');
  });

  it('render default variant with incorrect input', () => {
    const wrapper = mount(Icons, {
      propsData: { icon: 'warning', variant: 'red' }
    });
    console.log(wrapper.classes());
    expect(wrapper.classes()).toContain('icon--primary');
  });
});
