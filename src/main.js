import '@fontsource-variable/plus-jakarta-sans/wght.css'
import './assets/main.css'
import SubtitleComponent from './components/SubtitleComponent.vue'
import ContactComponent from './components/ContactComponent.vue'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.component('SubtitleComponent', SubtitleComponent)
app.component('ContactComponent', ContactComponent)
app.use(router)

app.mount('#app')
