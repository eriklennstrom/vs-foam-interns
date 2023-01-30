import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft ,faChevronRight, faChevronUp, faChevronDown ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark, faPlusCircle} from  '@fortawesome/free-solid-svg-icons';
library.add( faChevronLeft, faChevronRight, faChevronUp, faChevronDown ,faPlusCircle, faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark)


const app = createApp(App)

app.use(router)

app.mount('#app')
