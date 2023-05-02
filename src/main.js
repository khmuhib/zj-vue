import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { createHead } from '@vueuse/head'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";



library.add(faPhone)
library.add(faBars)
library.add(faWhatsapp)

import './assets/main.css'

const head = createHead()
const app = createApp(App)


app.use(router)
app.use(head)

app.component('font-awesome-icon', FontAwesomeIcon).mount('#app')
