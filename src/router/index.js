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
        path: '/product-single/:category/:id',
        name: 'ProductSingle',
        component: loadComponent('ProductSingle'),
    },
    {
        path: '/shopping-cart',
        name: 'Cart',
        component: loadComponent('Cart'),
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: loadComponent('Wishlist'),
    },
    {
        path: '/categories',
        name: 'Categories',
        component: loadComponent('Categories'),
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({ x: 0, y: 0 })
            }, 500) 
        })
    },
    routes
})

export default router