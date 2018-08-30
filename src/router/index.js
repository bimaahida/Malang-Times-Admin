import Vue from 'vue'
import Router from 'vue-router'
import TableNews from '@/components/News/table'
import Kategori from '@/components/News/kategori'
import User from '@/components/News/user'
import Login from '@/components/login'

Vue.use(Router)

export default new Router({
  mode:"history",
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
    },
    {
      path: '/category',
      name: 'kategori',
      component: Kategori
    },
    {
      path: '/user',
      name: 'user',
      component: User
    }
  ]
})
