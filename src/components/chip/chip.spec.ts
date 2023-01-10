
import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Chip from '@/components/chip/chip.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark)

describe('Chip', () => {

    it('renders properly', () => {
        const wrapper = mount(Chip, { propsData: { variant:'input', text: 'Hello' } })
        expect(wrapper.classes()).toContain('chip--input')
    })

    it('renders remove icon correctly', () => {
        const wrapper = mount(Chip, { propsData: { variant:'input', text: 'Varnish', removable: true } })
        expect(wrapper.vm.removable).toBe(true)
    })

    it('does not render remove icon if variant is filter', () => {
        const wrapper = mount(Chip, { propsData: { variant:'filter', removable: true } })
        // <---- WIP ---->
        expect(wrapper.vm.chipRemove).toBe(false)
    })

    it('render default variant if no prop input', () => {
        const wrapper = mount(Chip, { propsData: { } })
        expect(wrapper.classes()).toContain('chip--input')
    })

    it('renders icon correctly', () => {
    const wrapper = mount(Chip, { propsData: { variant:'input', text: 'Varnish', icon: 'circle-down' } })
    expect(wrapper.findComponent(Icons))
    })

    it('renders outline correctly', () => {
        const wrapper = mount(Chip, { propsData: { variant:'input', outline: true } })
        expect(wrapper.classes()).toContain('chip__outline');
    })

    it('renders text correctly', () => {
        const wrapper = mount(Chip, { propsData: { variant:'input', text: 'Varnish' } })
        expect(wrapper.vm.text).toBe('Varnish')
    })

    it('Update chip when selected', () => {
        const wrapper = mount(Chip, { propsData: { variant:'input', selected: true } })
        expect(wrapper.classes()).toContain('chip--selected');
        expect(wrapper.findComponent(Icons))
    })
})