import { createRouter, createWebHashHistory } from 'vue-router'
// import VueRouter from 'vue-router'

const Home = () => import('../views/home/Home.vue')
const Profile = () => import('../views/profile/Profile.vue')
const Shopping = () => import('../views/shopping/Shopping.vue')
const Category = () => import('../views/category/Category.vue')

const routes = [
    {
        path: '/',
        redirect: '/home'
    },
    {
        path: '/home',
        name: 'Home',
        component: Home
    },
    {
        path: '/shopping',
        name: 'Shopping',
        component: Shopping
    },
    {
        path: '/category',
        name: 'Category',
        component: Category
    },
    {
        path: '/profile',
        name: 'Profile',
        component: Profile
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router
