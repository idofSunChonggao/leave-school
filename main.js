import Vue from 'vue'
import App from './App'

import home from './pages/home.vue'
Vue.component('home',home)

import mine from './pages/mine.vue'
Vue.component('mine',mine)



Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
	...App
})
app.$mount()
