import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index'
import sell_login from '@/components/sell-login'
import cus_index from '@/components/cus-index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(Router)
Vue.use(ElementUI);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },
    {
      path: '/sell-login',
      name: 'sell_login',
      component: sell_login
    },
    {
      path: '/cus-index',
      name: 'cus_index',
      component: cus_index
    }
  ]
})
