import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { ref } from 'vue'
import DropdownItem from '@/components/dropdown/dropdown-item.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
import exp from 'constants'
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck)

describe('DropdownItem', () => {
    it('renders default dropdown item properly', () => {
        const wrapper = mount(DropdownItem)
        expect(wrapper.vm.$props).toContain({type : 'button', text: 'Dropdown Item'})
        expect(wrapper.classes()).toContain('dropdown__item')
        
    })

    it('renders icon in dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', icon: 'warning' } })       
        expect(wrapper.findComponent(Icons))
        expect(wrapper.vm.$props.icon).toBe('warning')
    })

    it('renders selected dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', selected: true } })
        expect(wrapper.classes()).toContain('dropdown__item--selected')
    })

    it('renders disabled dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', disabled: true } })       
        expect(wrapper.attributes()).toContain({role: 'disabled'})
    })

    it('renders type link dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', type: 'link', to: 'http://www.google.com' } })
        expect(wrapper.html()).toContain('<a href')
        expect(wrapper.attributes('data-test')).toBe('link')
        expect(wrapper.attributes()).toContain({href: 'http://www.google.com', target: '_blank'} )
    })

    it('renders type button dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', type: 'button' } })
        expect(wrapper.attributes('data-test')).toBe('button')        
        expect(wrapper.html()).toContain('<button')

    })

    it('renders type route dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', type: 'route', to: '/vitest-test' }})
        expect(wrapper.attributes('to')).toBe('/vitest-test') 
        expect(wrapper.attributes('data-test')).toBe('route') 
    })

    it('renders secondary text properly', () => {
        const wrapper = mount(DropdownItem, {propsData : {text : 'Test text', secondaryText: 'Secondary Text Test'}})
        const secondaryTestElem = wrapper.element.childNodes[1].lastChild;
        expect(secondaryTestElem?.textContent).toEqual('Secondary Text Test');
    })

    it('emits passed function properly', async () => {
        const Parent = {
            component : DropdownItem,
            setup() {
                const propText = ref('test')

                function vitestTest() {                   
                    propText.value = 'Vitest'
                }

                return {propText, vitestTest}
            },
            template: `<DropdownItem :text="propText" type="button" @click="vitestTest" />`
        }   

        const wrapper = mount(Parent)
        expect(wrapper.vm.propText).toBe('test')
        await wrapper.trigger('click')
        expect(wrapper.vm.propText).toBe('Vitest')
      })
})