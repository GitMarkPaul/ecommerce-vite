import { createRouter, createWebHistory } from 'vue-router'

const loadComponent = (view) => {
    return () => import(`../views/${view}.vue`);
}

const routes = [
    {
        path: '/',
        name: 'Home',
        component: loadComponent('Home'),
        meta: {
            title: 'Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/login',
        name: 'Login',
        component: loadComponent('Login'),
        meta: {
            title: 'Login - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/products',
        name: 'Products',
        component: loadComponent('Products'),
        meta: {
            title: 'Products - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/product-single/:category/:id',
        name: 'ProductSingle',
        component: loadComponent('ProductSingle'),
        meta: {
            title: 'Product Details - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/shopping-cart',
        name: 'Cart',
        component: loadComponent('Cart'),
        meta: {
            title: 'Shopping Cart - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/wishlist',
        name: 'Wishlist',
        component: loadComponent('Wishlist'),
        meta: {
            title: 'Wishlist - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/categories',
        name: 'Categories',
        component: loadComponent('Categories'),
        meta: {
            title: 'Categories - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/category-single',
        name: 'CategorySingle',
        component: loadComponent('CategorySingle'),
        meta: {
            title: 'Category Single - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/help-center',
        name: 'HelpCenter',
        component: loadComponent('HelpCenter'),
        meta: {
            title: 'Help Center - Auda Philippines: Online Shopping'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior(to, from, savedPosition) {
        // always scroll 10px above the element #main
        return {
          // could also be
          // el: document.getElementById('main'),
            el: '#app',
            top: 200,
        }
    },
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

export default router