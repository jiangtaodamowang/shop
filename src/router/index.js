import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = ()=>import ('../views/home/home')
const Category = ()=>import ('../views/category/category')
const Shopcar = ()=>import ('../views/shopcar/shopcar')
const Profile = ()=>import ('../views/profile/profile')
const Error = ()=>import ('../views/404')

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect: '/home',
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/category',
    name: 'Category',
    component: Category
  },
  {
    path: '/shopcar',
    name: 'Shopcar',
    component: Shopcar
  },
  {
    path: '/profile',
    name: 'Profile',
    component: Profile
  },
  {
    path: '**',
    name: 'Error',
    component: Error
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
