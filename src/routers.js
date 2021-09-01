import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import { createRouter, createWebHashHistory } from 'vue-router'
const routes = [{
        name: 'Home',
        component: Home,
        path: '/'
    },
    {
        name: 'Register',
        component: Register,
        path: '/register'
    },
    {
        name: 'Login',
        component: Login,
        path: '/login'
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;