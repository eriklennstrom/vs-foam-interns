import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DropdownButton from '@/components/dropdown/Dropdown Button/dropdown-button.vue'
import DropdownItem from '@/components/dropdown/Dropdown Item/dropdown-item.vue'
import DropdownDivider from '@/components/dropdown/Dropdown Divider/dropdown-divider.vue'
import Button from '@/components/button/button.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown)

describe('Dropdown', () => {
    it('renders dropdown button properly', () => {
        const wrapper = mount(DropdownButton)
        expect(wrapper.getComponent(Button)).toBeTruthy()
    })

    it('toggles dropdown on click', async () => {
        const wrapper = mount(DropdownButton)
        const button = wrapper.getComponent(Button)
        await button.trigger('click')
        expect(wrapper.element.children[1].hasAttribute('data-show')).toBe(true)
        await button.trigger('click')
        expect(wrapper.element.children[1].hasAttribute('data-show')).toBe(false)
    })

    it('renders components correctly when added into the slot', () => {
        const wrapper = mount(DropdownButton, {
            slots : {
                default : [DropdownDivider, DropdownItem]
            } 
        })
 
        expect(wrapper.getComponent(DropdownDivider))
        expect(wrapper.getComponent(DropdownItem))      
    })

    it('renders custom slots', () => {
        const wrapper = mount(DropdownButton, { 
            slots : {
                default : '<p class="vitest">Vitest testing custom html injection into the slot</p>'
            } 
        })

        expect(wrapper.find('.vitest')).toBeTruthy()
    })

    it('renders correct alignment on rendered dropdown', async () => {
        const wrapper = mount(DropdownButton, { propsData: { align: 'start'} })
        const button = wrapper.getComponent(Button)
        await button.trigger('click')
       
        expect(wrapper.attributes('data-test')).toBe('start')
    })

    it('renders correct width', async () => {
        const wrapper = mount(DropdownButton, { propsData: { align: 'start', width: 400} })
        const dropdownElem = wrapper.element.children[1];
        expect(getComputedStyle(dropdownElem).width).toBe('400px')
    })

    it('correctly handles incorrect prop inputs',async () => {
        const wrapper = mount(DropdownButton, { propsData: { align: 'wrong', variant: 'wrong'} })
        const button = wrapper.getComponent(Button)
        // Button component handles incorrect icon input
        await button.trigger('click')
        expect(button.classes()).toContain('button--primary')
        expect(wrapper.attributes('data-test')).toBe('end')
    })
})