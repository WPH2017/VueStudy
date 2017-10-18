import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Test from '@/components/test'
import List from '@/components/list'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkExactActiveClass:'wph',
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: HelloWorld
    },
    {
      path: '/test/:yes?',
      component: Test,
      children:[
        {
          path:'',
          component:HelloWorld
        },
        {
          path:'profile',
          component:Test
        },
      ]
    },
    {
      path:'/list',
      redirect:to=>'/list/1'
    },
    {
      path:'/list/:userId/:name?',
      component:List
    }
  ]
})
