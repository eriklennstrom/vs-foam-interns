import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DropdownFilter from '@/components/dropdown/dropdownFilter/dropdown-filter.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck)

describe('DropdownFilter', () => {
    it('renders default dropdown filter properly', () => {
        const wrapper = mount(DropdownFilter, { propsData: {  } })
        expect(wrapper.attributes('data-test')).toBe('checkbox')
        expect(wrapper.vm.$props).toContain(
            {
                text: '',
                type: 'checkbox',
                color: null
            }
        )        
    })

    it('renders selected dropdown filter properly', () => {
        const wrapper = mount(DropdownFilter, { propsData: { text: 'Dropdown filter', selected: true } })        
        expect(wrapper.classes()).toContain('dropdown__filter--selected')
        expect(wrapper.findComponent(Icons))
    })
    
    it('renders disabled dropdown filter properly', () => {
        const wrapper = mount(DropdownFilter, { propsData: { text: 'Dropdown filter', disabled: true } })       
        expect(wrapper.attributes()).toContain({role: 'disabled'})
    })

    it('renders color type and color properly', () => {
        const wrapper = mount(DropdownFilter, { propsData: { text: 'Dropdown filter', type: 'color', color: 'steelblue' } })    
        console.log(wrapper.html());
        expect(wrapper.html()).toContain('style="background-color: steelblue;')
        expect(wrapper.attributes('data-test')).toBe('color')
    })

    it('renders container type properly', () => {
        const wrapper = mount(DropdownFilter, { propsData: { text: 'Dropdown filter', type: 'container' } })       
        expect(wrapper.attributes('data-test')).toBe('container')
    })
})