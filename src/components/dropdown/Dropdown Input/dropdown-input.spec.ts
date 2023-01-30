import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DropdownInput from '@/components/dropdown/Dropdown Input/dropdown-input.vue'
import DropdownItem from '@/components/dropdown/Dropdown Item/dropdown-item.vue'
import DropdownFilter from '@/components/dropdown/Dropdown Filter/dropdown-filter.vue'
import DropdownDivider from '@/components/dropdown/Dropdown Divider/dropdown-divider.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown)

describe('DropdownFilter', () => {
    it('renders default dropdown input properly', () => {
        const wrapper = mount(DropdownInput, { propsData: {  } })
        expect(wrapper.classes()).toContain('dropdown__filter--container')
        expect(wrapper.vm.$props).toContain(
            {
                text: '',
            }
        )        
    })

    it('toggles dropdown on click', async () => {
        const wrapper = mount(DropdownInput)
        // WIP - Function inside the component will focus on the input - gives errors in vitest
        await wrapper.trigger('click')
        expect(wrapper.element.children[1].hasAttribute('data-show')).toBe(true)
        await wrapper.trigger('click')
        expect(wrapper.element.children[1].hasAttribute('data-show')).toBe(false)
    })

    it('renders components correctly when added into the slot', () => {
        const wrapper = mount(DropdownInput, {
            slots : {
                default : [DropdownDivider, DropdownItem, DropdownFilter]
            } 
        })
 
        expect(wrapper.getComponent(DropdownDivider))
        expect(wrapper.getComponent(DropdownItem))      
        expect(wrapper.getComponent(DropdownFilter))   
    })

    it('renders custom slots', () => {
        const wrapper = mount(DropdownInput, { 
            slots : {
                default : '<p class="vitest">Vitest testing custom html injection into the slot</p>'
            } 
        })

        expect(wrapper.find('.vitest')).toBeTruthy()
    })
})