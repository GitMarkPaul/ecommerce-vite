import { createApp } from 'vue'

// Import our custom CSS
import './scss/styles.scss'
import './js/custom'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

import App from './App.vue'
import router from './router/index.js'

createApp(App).use(router).mount('#app')
