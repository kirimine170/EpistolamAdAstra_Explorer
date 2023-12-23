import { createRouter, createWebHistory } from 'vue-router'
import TopPage from './views/TopPage.vue'
import WritePage from './views/WriteMessagePage.vue'

const routes = [
    {
        path: '/',
        name: 'TopPage',
        component: TopPage
    },
    {
        path: '/write',
        name: 'WriteMessage',
        component: WritePage
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router