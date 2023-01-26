import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DropdownInput from '@/components/dropdown/dropdown-input.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck)

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
})