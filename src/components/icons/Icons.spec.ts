import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icons from './Icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Icons', () => {

  it('renders properly', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning' } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('fa-warning')
  })  

  it('renders color', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning', color:'black' } })
    expect(getComputedStyle(wrapper.element).color).toBe('black')
  })    

  it('renders default color with no input', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning' } })
    expect(getComputedStyle(wrapper.element).color).toBe('rgb(0, 0, 0)')
  })     

  it('render correct size', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning', iconSize: 18} })
    console.log(getComputedStyle(wrapper.element).height)
    expect(getComputedStyle(wrapper.element).height).toBe('18px')
  })      

  it('render correct size with no input', () => {
    const wrapper = mount(Icons, { propsData: { iconType:'fa-warning'} })
    console.log(getComputedStyle(wrapper.element).height)
    expect(getComputedStyle(wrapper.element).height).toBe('100%')
  })   
})
   