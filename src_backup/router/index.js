import Vue from 'vue'
import Router from 'vue-router'
import TableNews from '@/components/News/Table_news'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/news',
      name: 'Table_news',
      component: TableNews
    }
  ]
})
