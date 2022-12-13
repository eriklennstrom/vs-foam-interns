import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Icons from './Icons.vue'


describe('Icons', () => {

  it('renders properly', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning' } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('fa-warning')
    })  

  it('renders color', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning', color:'black' } })

    // Pass test
    expect(getComputedStyle(wrapper.element).color).toBe('black')
    })      
})
   