import Vue from 'vue'
import Router from 'vue-router'
import Login from "../views/Login"
import Main from '../views/Main'
// 用于嵌套的路由组件
import UserProfile from '../views/user/Profile'
import UserList from '../views/user/List'
Vue.use(Router);
export default new Router({
  routes: [
    {
      // 首页
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      // 首页
      path: '/index',
      name: 'Login',
      component: Login
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
        {path: '/user/profile', component: UserProfile},
        {path: '/user/list', component: UserList},
      ]
    }
  ]
});
