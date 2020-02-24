import Vue from 'vue'
import Router from 'vue-router'
const Vuex = () => import('../views/Vuex/Vuex')
const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')
const Detail = () =>import('../views/detail/Detail')
// import Home from '../views/home/Home'
// import Category from '../views/category/Category'
// import Cart from '../views/cart/Cart'
// import Profile from '../views/profile/Profile'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'',
      redirect:'home',
    },
    {
      path:'/home',
      component:Home
    },
    {
      path:'/category',
      component:Category
    },
    {
      path:'/cart',
      component:Cart
    },
    {
      path:'/profile',
      component:Profile
    },
    {
      path:'/Vuex',
      component:Vuex
    },
    {
      path:'/detail/:id',
      component:Detail
    }
  ],
  mode:'history'
})
