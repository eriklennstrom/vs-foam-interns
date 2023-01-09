import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Button', () => {
  
  const textVariable = 'Varnish'

  it('renders button properly', () => {
    const wrapper = mount(Button, { propsData: { variant:'danger', text: textVariable } })
    expect(wrapper.classes()).toContain('button--danger')
  })

  it('renders text correctly', () => {
  
    const wrapper = mount(Button, { propsData: { variant:'danger', text: textVariable } })
    expect(wrapper.vm.text).toBe(textVariable)
  })

  it('renders correct with outline prop', () => {
    const wrapper = mount(Button, { propsData: { variant:'danger', text: textVariable, outline: true } })
    expect(wrapper.vm.outline).toBe(true);
    expect(wrapper.classes()).toContain('button--danger__outline');
  })

  it('renders correct color', () => {
    const wrapper = mount(Button, { propsData: { variant:'primary', text: textVariable } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('button--primary');
  })

  it('render icon properly', () => {
    const wrapper = mount(Button, { propsData: { variant:'primary', text: textVariable, icon: 'warning' } })
    expect(wrapper.findComponent(Icons))
  })
})