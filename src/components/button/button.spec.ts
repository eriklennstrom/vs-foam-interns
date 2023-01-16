import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Button from '@/components/button/button.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Button', () => {

  const textVariable = 'Varnish'


  it.todo, ()=>{
    // Emits correct value (click)
    // Check that all colors (classes) is present, primary, danger when setting variant
    // What happens if you set a variant that doesn't exist?
    // What happens if you don't set any text?
    // What happens if you don't select any icons?
  }


  it('renders button properly', () => {
    const wrapper = mount(Button, { propsData: { variant: 'danger', text: textVariable } })
    expect(wrapper.classes()).toContain('button--danger')
  })

  it('renders text correctly', () => {

    const wrapper = mount(Button, { propsData: { variant: 'danger', text: textVariable } })
    expect(wrapper.vm.text).toBe(textVariable)
  })

  it('renders correct color', () => {
    const wrapper = mount(Button, { propsData: { variant: 'primary', text: textVariable } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('button--primary');
  })


  it('render icon properly', () => {
    const wrapper = mount(Button, { propsData: { variant: 'primary', text: textVariable, icon: 'warning' } })
    expect(wrapper.findComponent(Icons))
  })
})