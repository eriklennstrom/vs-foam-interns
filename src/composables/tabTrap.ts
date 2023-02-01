import { ref } from 'vue'

// Store to lookut for multiple presses
const keysPressed = {} as { [key: string]: boolean }

export function getKeyBoardFocusableElements (element : HTMLElement) {
  const elements = ref([] as Element[])

const currentElem = document.activeElement as HTMLElement
elements.value = [
  ...element.querySelectorAll(
    'a, button, input, textarea, select, details,[tabindex]:not([tabindex="-1"])'
    )
  ].filter(el => !el.hasAttribute('disabled'))
  
if(
    !currentElem.nextElementSibling?.hasAttribute('data-show') 
    && !currentElem.nextElementSibling?.classList.contains('sub-dropdown__item')
    && !currentElem.previousElementSibling?.classList.contains('sub-dropdown__item')
  ) {     
    elements.value = elements.value.filter(el => !el.classList.contains('sub-dropdown__item'))
}
  return { elements }
}
export function useRemoveRecordedStroke (e:KeyboardEvent) {
  if (e.key === 'Shift') {
    keysPressed[e.key] = false
  }
}

let prevActiveElem: HTMLElement
function getPrevActiveElem(el: HTMLElement) {
  prevActiveElem = el
}

export function useTabTrap (e: KeyboardEvent) {
  if(e.key != 'Enter') {
    e.preventDefault()
    const currentElem = document.activeElement as HTMLElement
    let parentElement = currentElem.parentElement as HTMLElement

    if(currentElem.id.includes('sub-dropdown') && currentElem.nextElementSibling?.hasAttribute('data-show')) {

      parentElement = currentElem.nextElementSibling as HTMLElement      
    } 
    
    currentElem.classList.contains('sub-dropdown__item') ? parentElement = currentElem.parentElement as HTMLElement : null

    const elements = getKeyBoardFocusableElements(parentElement)
    if(elements.elements.value.length <= 1) {
      return
    }
    
    let index = 0;
    const firstElem = elements.elements.value[0] as HTMLElement
    const lastElem = elements.elements.value[elements.elements.value.length - 1] as HTMLElement

    getPrevActiveElem(currentElem)
   
    if(e.key === 'Shift') {
      keysPressed[e.key] = true
    }
    
    if (keysPressed.Shift && e.key === 'Tab' || e.key === 'ArrowUp') {
      keysPressed[e.key] = true
      if (currentElem === firstElem) {
        index = elements.elements.value.findIndex(elem => { return lastElem === elem })
      } else if(prevActiveElem === firstElem) {
        
        index = elements.elements.value.findIndex(elem => { return firstElem === elem }) 
      } else {
        index = elements.elements.value.findIndex(elem => { return e.target === elem }) - 1
      }

      if(currentElem.id.includes('sub-dropdown') && currentElem.nextElementSibling?.hasAttribute('data-show')) {
       
        index = currentElem.nextElementSibling.querySelectorAll('a, button').length - 1
      }
      const previousFocusableElement = elements.elements.value[index] as HTMLElement
      previousFocusableElement.focus()
    } else if(e.key === 'Tab' || e.key === 'ArrowDown') {
      
      if (currentElem === firstElem) {
        index = elements.elements.value.findIndex(elem => { return e.target === elem }) + 1
      } else if(prevActiveElem === lastElem) {        
        index = elements.elements.value.findIndex(elem => { return firstElem === elem }) 
      } else  {
        index = elements.elements.value.findIndex(elem => { return e.target === elem }) + 1
      } 
      
      if(currentElem.id.includes('sub-dropdown') && currentElem.nextElementSibling?.hasAttribute('data-show')) {
        index = 0
      }      
        const previousFocusableElement = elements.elements.value[index] as HTMLElement
        previousFocusableElement.focus()
    }
  }
}