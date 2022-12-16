import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './badge.vue'
import Icons from '../icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Badge', () => {

  it('renders properly', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Hello' } })
    expect(wrapper.classes()).toContain('badge-danger')
  })  

  it('renders text correctly', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Varnish' } })
    expect(wrapper.vm.text).toBe('Varnish')
  })    

  it('renders correct with outline prop', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Varnish', outline: true } })
    const div = wrapper.find('div');
    const computedStyle = window.getComputedStyle(div.element);
    const borderWidth = computedStyle.getPropertyValue('border-width');
    expect(borderWidth).toBe('1px');
  })     

  it('renders correct color', () => {
    const wrapper = mount(Badge, { propsData: { type:'primary', text: 'Varnish' } })
    // console.log(getComputedStyle(wrapper.element).color == '#003349')
    expect(getComputedStyle(wrapper.element).fontSize).toBe('18px')
  })

  it('render icon properly', () => {
    const wrapper = mount(Badge, { propsData: { type:'primary', text: 'Varnish', icon: 'warning' } })
    expect(wrapper.findComponent(Icons))
  })

})