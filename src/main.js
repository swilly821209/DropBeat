import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// 全域 components
import BaseButton from './components/ui/BaseButton.vue'
import BaseBadge from './components/ui/BaseBadge.vue'
import BaseCard from './components/ui/BaseCard.vue'
import BaseTitle from './components/ui/BaseTitle.vue'
import BaseDate from './components/ui/BaseDate.vue'

import './assets/tailwind.css'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-card', BaseCard)
app.component('base-title', BaseTitle)
app.component('base-Date', BaseDate)

app.use(store).use(router).mount('#app')
