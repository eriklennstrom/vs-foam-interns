import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCaretDown, faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark} from  '@fortawesome/free-solid-svg-icons';
library.add( faCaretDown, faUserSecret, faWarning, faArrowDown, faArrowAltCircleDown, faCheck, faXmark)


const app = createApp(App)

app.use(router)

app.mount('#app')
