import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全域 components
import BaseButton from './components/ui/BaseButton.vue'
import BaseBadge from './components/ui/BaseBadge.vue'

import './assets/tailwind.css'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)

app.use(store).use(router).mount('#app')
