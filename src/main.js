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
import BaseDialog from './components/ui/BaseDialog.vue'
import BaseArrow from './components/ui/BaseArrow.vue'
import ShareSocialMedia from './components/ShareSocialMedia.vue'

import './index.css'

const app = createApp(App)

app.component('base-button', BaseButton)
app.component('base-badge', BaseBadge)
app.component('base-card', BaseCard)
app.component('base-title', BaseTitle)
app.component('base-date', BaseDate)
app.component('base-dialog', BaseDialog)
app.component('base-arrow', BaseArrow)
app.component('share-social-media', ShareSocialMedia)

app.use(store).use(router).mount('#app')
