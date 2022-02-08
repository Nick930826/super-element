import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import SuperElement from '../packages'
// import SuperElement from 'super-element-ui'
import Preview from './components/Preview.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import 'super-element-ui/style.css'

const app = createApp(App)

app.component('Preview', Preview)

app.use(SuperElement)
app.use(ElementPlus)

app.use(router)

app.mount('#app')
