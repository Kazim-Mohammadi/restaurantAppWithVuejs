import Home from './components/Home.vue'
import Register from './components/Register.vue'
import Login from './components/Login.vue'
import Add from './components/Add.vue'
import Update from './components/Update.vue'
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
    {
        name: 'Add',
        component: Add,
        path: '/add-restaurant'
    },
    {
        name: 'Update',
        component: Update,
        path: '/update-restaurant/:id'
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes,
});
export default router;