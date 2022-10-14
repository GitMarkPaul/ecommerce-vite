import { createRouter, createWebHistory } from 'vue-router'

const loadComponent = (view) => {
    return () => import(`../views/${view}.vue`);
}

const routes = [
    { 
        path: "/:pathMatch(.*)*",
        name: "404", 
        component: loadComponent('404'),
        meta: {
            title: 'Page Not Found'
        }  
    },
    {
        path: '/',
        name: 'Home',
        component: loadComponent('Home'),
        meta: {
            title: 'Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/search',
        name: 'SearchResults',
        component: loadComponent('SearchResults'),
        meta: {
            title: 'Search - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/settings',
        name: 'Settings',
        component: loadComponent('Settings'),
        meta: {
            title: 'Settings - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/language',
        name: 'Language',
        component: loadComponent('Language'),
        meta: {
            title: 'Language - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/contact-us',
        name: 'ContactUs',
        component: loadComponent('ContactUs'),
        meta: {
            title: 'Contact Us - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/account',
        name: 'Account',
        component: loadComponent('Account'),
        meta: {
            title: 'Account - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/edit-profile',
        name: 'EditProfile',
        component: loadComponent('EditProfile'),
        meta: {
            title: 'Edit Profile - Auda Philippines: Online Shopping'
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
        path: '/register',
        name: 'Register',
        component: loadComponent('Register'),
        meta: {
            title: 'Register - Auda Philippines: Online Shopping'
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
        path: '/manufacturers',
        name: 'Manufacturers',
        component: loadComponent('Manufacturers'),
        meta: {
            title: 'Manufacturers - Auda Philippines: Online Shopping'
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
        path: '/shipping-information',
        name: 'Shipping',
        component: loadComponent('Shipping'),
        meta: {
            title: 'Shipping Information - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/payment',
        name: 'Payment',
        component: loadComponent('Payment'),
        meta: {
            title: 'Payment Information - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/orders',
        name: 'Orders',
        component: loadComponent('Orders'),
        meta: {
            title: 'Orders - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/order-details',
        name: 'OrderDetails',
        component: loadComponent('OrderDetails'),
        meta: {
            title: 'Order Details - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/order-tracking',
        name: 'OrderTracking',
        component: loadComponent('OrderTracking'),
        meta: {
            title: 'Order Tracking - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/store',
        name: 'Store',
        component: loadComponent('Store'),
        meta: {
            title: 'Store - Auda Philippines: Online Shopping'
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
        path: '/following',
        name: 'Following',
        component: loadComponent('Following'),
        meta: {
            title: 'Following - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/history',
        name: 'History',
        component: loadComponent('History'),
        meta: {
            title: 'History - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/shipping-address',
        name: 'ShippingAddress',
        component: loadComponent('ShippingAddress'),
        meta: {
            title: 'Shipping Address - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/request-for-quotation',
        name: 'Quotation',
        component: loadComponent('Quotation'),
        meta: {
            title: 'Request for Quotation - Auda Philippines: Online Shopping'
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
    },
    {
        path: '/chat',
        name: 'Chat',
        component: loadComponent('Chat'),
        meta: {
            title: 'Auda Chat - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/contact-supplier',
        name: 'ContactSupplier',
        component: loadComponent('ContactSupplier'),
        meta: {
            title: 'Contact Supplier - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/password',
        name: 'Password',
        component: loadComponent('Password'),
        meta: {
            title: 'Password - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/review',
        name: 'Review',
        component: loadComponent('Review'),
        meta: {
            title: 'Review - Auda Philippines: Online Shopping'
        }
    },
    {
        path: '/vouchers',
        name: 'Vouchers',
        component: loadComponent('Vouchers'),
        meta: {
            title: 'Vouchers - Auda Philippines: Online Shopping'
        }
    }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    },
    routes
})

router.beforeEach((to, from, next) => {
    document.title = `${to.meta.title}`
    next()
})

export default router