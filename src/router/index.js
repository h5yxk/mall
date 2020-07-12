import Vue from 'vue'
import VerRouter from 'vue-router'

Vue.use(VerRouter)

const home = () =>import('views/home/Home')
const cart = () =>import('views/cart/Cart')
const category = () =>import('views/category/Category')
const profile = () =>import('views/profile/Profile')

const routes =[
  {
    path:'',
    redirect:'/home'
  },
  {
    path: '/home',
    component:home
  },
  {
    path:'/cart',
    component:cart
  },
  {
    path: '/category',
    component:category
  },
  {
    path: '/profile',
    component:profile
  }
]
const router = new VerRouter({
  routes,
  mode:'history'
})
export default router
