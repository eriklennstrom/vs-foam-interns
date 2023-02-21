import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'


import {faCheck, faCaretDown, faEye, faEyeSlash ,faChevronLeft ,faChevronRight, faChevronUp, faChevronDown ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faPlusCircle} from  '@fortawesome/free-solid-svg-icons';
library.add( faCheck, faCaretDown, faEye, faEyeSlash, faChevronLeft, faChevronRight, faChevronUp, faChevronDown ,faPlusCircle, faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)


const app = createApp(App)

app.use(router)

app.mount('#app')
