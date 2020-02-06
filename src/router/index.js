import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login"
import Main from '../views/Main'
// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'
import NotFound from '@/views/NotFound'

Vue.use(Router);
export default new Router({
  // mode: 'history',
  routes: [
    {
      // 重定向到首页
      path: '/',
      redirect: '/main'
    },
    {
      // 重定向到首页
      path: '/index',
      redirect: '/main'
    },
    {
      // 登录页
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/main',
      name: 'Main',
      component: Main,
      // 配置嵌套路由
      children: [
        {path: '/user/profile/:id', name:'UserProfile', component: UserProfile},
        {path: '/user/list/:id', name:'UserList', component: UserList, props: true}
      ]
    },
    {
      path: '*',
      component: NotFound
    }
  ]
});
