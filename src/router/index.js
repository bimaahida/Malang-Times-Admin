import Vue from 'vue'
import Router from 'vue-router'
import TableNews from '@/components/News/table'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: Login
    },
    {
      path: '/news',
      name: 'table_news',
      component: TableNews
    }
  ]
})
