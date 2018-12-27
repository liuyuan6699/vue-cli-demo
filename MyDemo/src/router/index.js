import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Menu from '@/views/Menu'
import Message from '@/views/Message'
import Chart from '@/views/Chart'
import Settings from '@/views/Settings'
import NewTopMusic from '@/views/toplist/NewTopMusic'
import MusicDetails from '@/views/MusicDetails'
import Login from '@/views/Login'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/Menu',
      name: 'home',
      component: Home,
      children: [
        {
          path: '/Menu',
          name: 'Menu',
          component: Menu
        },
        {
          path: '/Message',
          name: 'Message',
          // redirect: '/NewTopMusic',
          component: Message,
          children: [
            { path: '/NewTopMusic', name: 'NewTopMusic', component: NewTopMusic}
          ]
        },
        {
          path: '/Chart',
          name: 'Chart',
          component: Chart
        },
        {
          path: '/Settings',  
          name: 'Settings',
          component: Settings
        },
        {
          path: '/Login',
          name: 'Login',
          component: Login
        }
      ],

    },{
      path: '/MusicDetails',
      name: 'MusicDetails',
      component: MusicDetails
    }
    
  ],
  linkActiveClass: "mui-active"
})
