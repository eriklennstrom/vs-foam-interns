import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import DropdownItem from '@/components/dropdown/dropdownItem/dropdown-item.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCaretDown, faCheck)

describe('DropdownItem', () => {
    it('renders default dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: {  } })
        expect(wrapper.vm.$props).toContain(
            {
                type : 'button', 
                text: '', 
                icon: null, 
                to: '/', 
                disabled: false, 
                selected: false, 
                secondaryText : null, 
                width: null, 
                subdropdown: false
            }
        )        
    })

    it('renders icon in dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', icon: 'warning' } })       
        expect(wrapper.findComponent(Icons))
        expect(wrapper.vm.$props.icon).toBe('warning')
    })

    it('renders selected dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', selected: true } })
        expect(wrapper.html()).toContain('dropdown__item--selected')
    })
    
    it('renders disabled dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', disabled: true } })       
        expect(wrapper.html()).toContain('role="disabled"')
    })

    it('renders type link dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', type: 'link', to: 'http://www.google.com' } })
        expect(wrapper.html()).toContain('href')
        expect(wrapper.html()).toContain('data-test="link"')
        expect(wrapper.html()).toContain('href="http://www.google.com" target="_blank"' )
    })

    it('renders type button dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', type: 'button' } })
        expect(wrapper.html()).toContain('data-test="button"')       
        expect(wrapper.html()).toContain('<button')
    })
    
    it('renders type route dropdown item properly', () => {
        const wrapper = mount(DropdownItem, { propsData: { text: 'Dropdown Item', type: 'route', to: '/vitest-test' }})
        expect(wrapper.html()).toContain('to="/vitest-test"')
        expect(wrapper.html()).toContain('data-test="route"')
    })
    
    it('renders secondary text properly', () => {
        const wrapper = mount(DropdownItem, {propsData : {text : 'Test text', secondaryText: 'Secondary Text Test'}})
        expect(wrapper.html()).toContain('<p class="secondary-text"')
        expect(wrapper.html()).toContain('Secondary Text Test')
    })
    it('emits passed function properly', async () => {
        const wrapper = mount(DropdownItem, {propsData : {type : 'button', text : 'Test'}})

        wrapper.vm.$emit('click')
        expect(wrapper.emitted().click.length).toBe(1)
        wrapper.vm.$emit('click')
        expect(wrapper.emitted().click.length).toBe(2)        
      })
      it('renders subdropdown properly', async () => {
        const wrapper = mount(DropdownItem, {propsData : {type : 'button', text : 'Test', subdropdown: true}})
        expect(wrapper.html()).toContain('<div id="sub-dropdown"')
          
      })
      it('renders subdropdown width properly', async () => {
        const wrapper = mount(DropdownItem, {propsData : {type : 'button', text : 'Test', subdropdown: true, width: 250}})      
        expect(wrapper.html()).toContain('style="width: 250px;"')          
      })
})