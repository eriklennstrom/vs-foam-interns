import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Icons from './icons.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Icons', () => {

  it('renders properly', () => {
    const wrapper = mount(Icons, { propsData: { variant:'warning' } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('fa-warning')
  })  

  it('renders color', () => {
    const wrapper = mount(Icons, { propsData: { variant:'warning', color:'success' } })
    expect(getComputedStyle(wrapper.element).color == '#55c284')
  })    

  it('renders default color with no input', () => {
    const wrapper = mount(Icons, { propsData: { variant:'warning' } })
    expect(getComputedStyle(wrapper.element).color == 'rgb(0, , 0)')
  })     

  it('renders default color with wrong input', () => {
    const wrapper = mount(Icons, { propsData: { variant:'warning', color:'yelolw' } })
    expect(getComputedStyle(wrapper.element).color == 'rgb(0, 0, 0)')
  })  
  it('render correct size', () => {
    const wrapper = mount(Icons, { propsData: { variant:'warning', size: 18} })
    console.log(getComputedStyle(wrapper.element).height)
    expect(getComputedStyle(wrapper.element).fontSize).toBe('18px')
  })      

  it('render correct size with no input', () => {
    const wrapper = mount(Icons, { propsData: { variant:'warning'} })
    console.log(getComputedStyle(wrapper.element).height)
    expect(getComputedStyle(wrapper.element).fontSize).toBe('100%')
  })   
})
   