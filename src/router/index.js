import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login'
import UserList from '@/views/user/UserList'
import store from '@/store/store'
import * as types from '@/store/types'

Vue.use(Router)

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/userList',
    name: 'UserList',
    component: UserList
  },
];

const router = new Router({
  routes
});
// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
}
export default router;
