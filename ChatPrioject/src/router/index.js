import {createRouter,createWebHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Add from '../views/Add.vue';
import Delete from '../views/Delete.vue';
import Query from '../views/Query.vue';
import Update from '../views/Update.vue';
import Register from '@/views/Register.vue';

var routes=[
    {path:"/",component:Home},
    {path:"/add",component:Add,meta: { requiresAuth: true }},
    {path:"/delete",component:Delete,meta: { requiresAuth: true }},
    {path:"/query",component:Query,meta: { requiresAuth: true }},
    {path:"/update",component:Update,meta: { requiresAuth: true }},
    {path:"/register",component:Register},
    
];

var router=createRouter({
    history:createWebHistory(),
    routes
});

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token'); // 从 localStorage 获取 token
    if (to.matched.some(record => record.meta.requiresAuth) && !token) {
        next({ path: '/add' });
    } else {
        next();
    }
});

export default router;