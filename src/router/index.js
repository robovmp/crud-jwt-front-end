import Vue from 'vue'
import VueRouter from 'vue-router'
import LoginView from '../views/usersView/LoginView.vue'
import RegisterView from '../views/usersView/RegisterView.vue'
import PostView from '../views/postsView/PostView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/auth/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/auth/register',
    name: 'register',
    component: RegisterView
  },
  {
    path: '/auth/posts',
    name: 'postView',
    component: PostView
  }
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
