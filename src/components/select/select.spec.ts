import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Select from '@/components/select/select.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark, faCaretDown} from  '@fortawesome/free-solid-svg-icons';

library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark, faCaretDown)

describe('Select', () => {
    it('renders default select component properly', () => {
        const wrapper = mount(Select, { propsData: {  } })
        expect(wrapper.vm.$props).toStrictEqual(
            {
                label: 'Label',
                position: 'inside',
                options: [],
                defaultoption: null,
                sort: false
            }              
        )   

        expect(wrapper.findComponent(Icons))     
    })
    it('render the options correctly', () => {
        const wrapper = mount(Select, { propsData: 
            { options : [{id: 123, value : 'vitest', text: 'Vitest Test'}, {id: 1234, value : 'vue', text: 'Vue Test'}] }
        })
        
        const optionsContainer = wrapper.find('#option__container')
        const optionEls = wrapper.findAll('.option')
        expect(optionsContainer.element.children.length).toBe(2)
        expect(optionEls[0].element.innerHTML).toBe('Vitest Test')
        expect(optionEls[1].element.innerHTML).toBe('Vue Test')
    })
    it('opens options list on click', () => {
        const wrapper = mount(Select, { propsData: { options : [{id: 123, value : 'vitest', text: 'Vitest Test'}] }})
        const selectComponent = wrapper.find('.select-container')
        const optionsContainer = wrapper.find('#option__container')
        selectComponent.trigger('click')
        expect(optionsContainer.html()).toContain('data-show')        
        
    })
    it('triggers emit correctly', () => {
        const wrapper = mount(Select, { propsData: {  } })
        wrapper.vm.$emit('change')
        expect(wrapper.emitted().change.length).toBe(1)
        wrapper.vm.$emit('change')
        expect(wrapper.emitted().change.length).toBe(2)    
    })
    it('update chosen option correctly', async () => {
        const wrapper = mount(Select, { propsData: 
            { options : [{id: 123, value : 'vitest', text: 'Vitest Test'}, {id: 1234, value : 'vue', text: 'Vue Test'}] }
        })
        const selectComponent = wrapper.find('.select-container')
        
        await selectComponent.trigger('click')
        const optionsElems = wrapper.findAll('.option')
        
        optionsElems.forEach(async el => {
            if(el.element.innerHTML == 'Vue Test') {              
                await el.trigger('click')                         
                expect(el.classes()).toContain('option--selected')
                const chosenOption = wrapper.find('.active--option')
                expect(chosenOption.element.innerHTML).toBe('Vue Test')
            } 
        })            
    })
})