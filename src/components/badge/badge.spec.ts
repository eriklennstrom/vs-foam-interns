import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './badge.vue'
import Icons from '../icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Badge', () => {

  it('renders properly', () => {
    const wrapper = mount(Badge, { propsData: { variant:'danger', text: 'Hello' } })
    expect(wrapper.classes()).toContain('badge-danger')
  })  

  it('renders text correctly', () => {
    const wrapper = mount(Badge, { propsData: { variant:'danger', text: 'Varnish' } })
    expect(wrapper.vm.text).toBe('Varnish')
  })    

  it('renders correct with outline prop', () => {
    const wrapper = mount(Badge, { propsData: { variant:'danger', text: 'Varnish', outline: true } })
    expect(wrapper.classes()).toContain('badge-outline');
  })     

  it('renders correct color', () => {
    const wrapper = mount(Badge, { propsData: { variant:'primary', text: 'Varnish' } })
    expect(wrapper.classes()).toContain('badge-primary');
  })

  it('render icon properly', () => {
    const wrapper = mount(Badge, { propsData: { variant:'primary', text: 'Varnish', icon: 'warning' } })
    expect(wrapper.findComponent(Icons))
  })

})