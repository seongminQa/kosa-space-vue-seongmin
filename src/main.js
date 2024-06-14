import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// bootstrap 관련 JavaScript와 CSS 로딩------------
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

// icon 로딩
import PhosphorIcons from "@phosphor-icons/vue"

// jquery import
import jQuery from 'jquery'

createApp(App).use(store).use(router).use(PhosphorIcons).use(jQuery).mount('#app')

global.$ = jQuery
