import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Icons from './Icons.vue'


describe('Icons', () => {

  it('renders properly', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'bi-alarm' } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('bi-alarm')
    })  

  it('renders color', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'bi-alarm', color:'green' } })

    // Pass test
    expect(getComputedStyle(wrapper.element).color).toBe('black')
    })  



    
})
   