import { createRouter,createWebHistory } from "vue-router"
import firstpage from './components/MyfirstPage.vue'
import Dashboard from './components/Dashboard'
const routes = [
    {
        path:'/myfirstpage',
        component: firstpage,
        meta: { title: 'My Page Title' }
    },
    {
        path:'/home',
        component: Dashboard,
        meta: { title: 'Dashboard' }
    }
]
const router = createRouter({
    history: createWebHistory(),
    routes
})
router.beforeEach((to,from,next)=>{
    document.title = to.meta.title

    next()
})
export default router