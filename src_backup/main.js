// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import Axios from 'axios'

import '@/assets/css/bootstrap.css'
import '@/assets/css/style.css'
import '@/assets/css/font-awesome.css'
import '@/assets/css/SidebarNav.min.css'
import '@/assets/css/custom.css'

import '@/assets/js/jquery-1.11.1.min.js'
import '@/assets/js/bootstrap.js'
import '@/assets/js/metisMenu.min.js'
import '@/assets/js/classie.js'
import '@/assets/js/jquery.nicescroll.js'


Vue.config.productionTip = false
Vue.use(VueResource);
Axios.defaults.baseURL = 'http://localhost:8000/'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
