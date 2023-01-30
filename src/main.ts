import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import {faChevronLeft ,faChevronRight, faChevronUp, faChevronDown ,faCheck ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faPlusCircle} from  '@fortawesome/free-solid-svg-icons';
library.add( faChevronLeft, faChevronRight, faChevronUp, faChevronDown ,faPlusCircle, faCheck ,faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown)


const app = createApp(App)

app.use(router)

app.mount('#app')
