import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/login/login.vue'
import Register from '@/views/register/register.vue'
import Main from '@/views/main/main.vue'
import Home from '@/views/home/home.vue'
import Update from '@/views/update/update.vue'
import Dialog from '@/views/dialog/dialog.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path:'/register',
      name:'Register',
      component:Register
    },
    {
      path: '/main',
      name: 'Main',
      component: Main
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/update',
      name: 'Update',
      component: Update
    },
    {
      path: '/dialog',
      name: 'Dialog',
      component: Dialog
    }
  ]
})
