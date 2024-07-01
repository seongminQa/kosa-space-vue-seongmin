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
// global.$ = jQuery

// axiosConfig ?
import axiosConfig from './apis/axiosConfig';

// 브라우저 재실행시 인증 정보를 가져옴
// 인증 정보를 store에 저장
store.dispatch("loadAuth");

createApp(App)
.use(store)
.use(router)
.use(PhosphorIcons)
.use(jQuery)
.mount('#app')