import { createRouter, createWebHistory } from 'vue-router'

const loadComponent = (view) => {
    return () => import(`../views/${view}.vue`);
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: loadComponent('Home')
    },
    {
        path: '/login',
        name: 'Login',
        component: loadComponent('Login'),
    },
    {
        path: '/products',
        name: 'Products',
        component: loadComponent('Products'),
    },
    {
        path: '/product-single/:id',
        name: 'ProductSingle',
        component: loadComponent('ProductSingle'),
    },
    {
        path: '/shopping-cart',
        name: 'Cart',
        component: loadComponent('Cart'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        // always scroll to top
        return { top: 0 }
    },
    routes
})

export default router