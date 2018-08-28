import Vue from 'vue'
import Router from 'vue-router'
import TableNews from '@/components/News/table'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'table_news',
      component: TableNews
    }
  ]
})
