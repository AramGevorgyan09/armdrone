import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './i18n'
import './styles/main.css'
import './styles/adaptive.css'

createApp(App).use(i18n).use(router).mount('#app')
