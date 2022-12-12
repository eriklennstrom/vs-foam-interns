import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import Icons from './Icons.vue'


describe('Icons', () => {

  it('renders properly', () => {
    const wrapper = mount(Icons, { propsData: { color:'red', iconType:'bi-alarm' } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('bi-alarm')
    })


  
})
