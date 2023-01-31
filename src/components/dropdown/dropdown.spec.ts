import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Dropdown from '@/components/dropdown//dropdown.vue'
import DropdownButton from '@/components/dropdown/dropdownButton/dropdown-button.vue'
import DropdownInput from '@/components/dropdown/dropdownInput/dropdown-input.vue'

describe('Dropdown', () => {
    it('renders default dropdown properly', () => {
        const wrapper = mount(Dropdown, { propsData: {  } })
        expect(wrapper.findComponent(DropdownButton)).toBeTruthy()
    })
    it('renders input dropdown properly', () => {
        const wrapper = mount(Dropdown, { propsData: { role : 'input' } })
        expect(wrapper.findComponent(DropdownInput)).toBeTruthy()
    })
})