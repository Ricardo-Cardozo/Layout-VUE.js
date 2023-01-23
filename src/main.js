import { createApp } from 'vue'
import App from './App.vue'
import VueSmoothScroll from 'v-smooth-scroll'

const app = createApp(App)
app.use(VueSmoothScroll)
app.mount('#app')