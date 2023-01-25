import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Font from '@/components/typography/fonts-preview.vue'

describe('Badge', () => {

  it('renders properly', () => {
    const wrapper = mount(Font, { propsData: { variant:'danger', text: 'Hello' } })
    expect(wrapper.classes()).toContain('badge--danger')
  })


})