import {createRouter, createWebHashHistory} from "vue-router"

import Home from "./components/Home.vue"


const routes = [
    {
        name: 'Home',
        path: "/",
        component: Home
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})




export default router;