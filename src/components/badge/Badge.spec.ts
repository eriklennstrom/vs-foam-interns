import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Badge from './Badge.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown} from  '@fortawesome/free-solid-svg-icons';
library.add( faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)

describe('Badge', () => {

  it('renders properly', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Hello' } })
    console.log(wrapper.classes())
    expect(wrapper.classes()).toContain('badge-danger')
  })  

  it('renders text correctly', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Varnish' } })
    expect(wrapper.vm.text).toBe('Varnish')
  })    

  it('renders correct color with an outline', () => {
    const wrapper = mount(Badge, { propsData: { type:'danger', text: 'Varnish', outline: true } })
    console.log(getComputedStyle(wrapper.element))
    expect(getComputedStyle(wrapper.element).color)
  })     

//   it('renders default color with wrong input', () => {
//     const wrapper = mount(Icons, { propsData: { iconType:'fa-warning', color:'yelolw' } })
//     expect(getComputedStyle(wrapper.element).color).toBe('')
//   })  
//   it('render correct size', () => {
//     const wrapper = mount(Icons, { propsData: { iconType:'fa-warning', iconSize: 18} })
//     console.log(getComputedStyle(wrapper.element).height)
//     expect(getComputedStyle(wrapper.element).height).toBe('18px')
//   })      

//   it('render correct size with no input', () => {
//     const wrapper = mount(Icons, { propsData: { iconType:'fa-warning'} })
//     console.log(getComputedStyle(wrapper.element).height)
//     expect(getComputedStyle(wrapper.element).height).toBe('100%')
//   })   
})