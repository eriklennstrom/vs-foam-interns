import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Input from '@/components/input/input.vue'
import Icons from '@/components/icons/icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown } from '@fortawesome/free-solid-svg-icons';
library.add(faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Input', () => {

/*   it.todo, ()=>{
    // Emits correct value (click)
    // Check that all colors (classes) is present, primary, danger when setting variant
    // What happens if you set a variant that doesn't exist?
    // What happens if you don't set any text?
    // What happens if you don't select any icons?
  } */

  describe('Input', () => {
    const wrapper = mount(Input, { propsData: {
      size: 'L',
      variant: 'text',
      isValid: true,
      disabled: false,
      text:'Test'
    }});
    
    it('displays the label', () => {
      const label = wrapper.find('h2')
      expect(label.text()).toBe('Test')
    })
  })






})



