import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: HomeView
        },
        {
            path: '/template',
            name: 'template',
            component: () => import('../views/PptTemplate.vue')
        },
        {
            path: '/background',
            name: 'background',
            component: () => import('../views/PptBackground.vue')
        },
        {
            path: '/diagrams',
            name: 'diagrams',
            component: () => import('../views/PptDiagrams.vue')
        },
        {
            path: '/detail',
            name: 'detail',
            component: () => import('../views/Detail.vue')
        },
        {
            path: '/search_result',
            name: 'search_result',
            component: () => import('../views/SearchResult.vue')
        }
    ]
})

export default router
