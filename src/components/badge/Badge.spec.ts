import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'
import Icons from '../icons/Icons.vue'
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

  it('renders correct color with an outline', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Varnish', outline: true } })
    expect(getComputedStyle(wrapper.element).color == '#dc3545')
  })     

  it('renders correct color', () => {
    const wrapper = mount(Badge, { propsData: { type:'primary', text: 'Varnish' } })
    expect(getComputedStyle(wrapper.element).color == '#003349')
  })

  it('render icon properly', () => {
    const wrapper = mount(Badge, { propsData: { type:'primary', text: 'Varnish', icon: 'warning' } })
    expect(wrapper.findComponent(Icons))
  })

})