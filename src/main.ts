import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import MyKit from '../packages'
import Preview from './components/Preview.vue'

const app = createApp(App)

app.component('Preview', Preview)

app.use(MyKit)

app.use(router)

app.mount('#app')
