<script setup>
    import { onMounted, ref } from 'vue';
    
    const products = ref([]);
    
    onMounted(async () => {
        try {
            const response = await fetch('https://fakestoreapi.com/products');
            products.value = await response.json();
        } catch (err) {
            // Handle error
        }
    })
</script>

<script>
    export default {
        data() {
            return {
                quantity: 1,
                min: 1,
            };
        },

        methods: {
            increment () {
                this.quantity += 1;
            },

            decrement () {
                this.quantity = this.quantity === 1 ? 1 : this.quantity - 1;
            },
        },
    }
</script>

<template>
    <section class="padding-bottom-3">
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Cart</div>
                    </li>
                </ol>
                <h4>Your Shopping Cart</h4>
            </div>

            <div class="row g-4 pt-2">
                <div class="col-xl-7 col-lg-7">
                    <div class="row row-cols-1 g-4">
                        <div class="col">
                            <div class="d-flex align-items-center justify-content-between">
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                    <label class="form-check-label mx-2" for="flexCheckDefault">
                                        Select all
                                    </label>
                                </div>
    
                                <button class="button-link-dark round" type="button" data-bs-toggle="modal" data-bs-target="#deleteModal">
                                    <span class="material-icons-outlined">delete_sweep</span>
                                    Delete Selected
                                </button>
                            </div>
                        </div>
                        <div class="col">
                            <div class="row row-cols-1 g-3">
                                <div class="col">
                                    <a href="" class="font-size-18 font-weight-600 d-flex gap-2">
                                        <img src="../assets/users/avatar.jpg" class="avatar-circle-xs" alt="">
                                        SM Mega Mall
                                    </a>
                                </div>
                                <div class="col" v-for="product in products.slice(0,3)" :key="product.id">
                                    <div class="d-flex gap-2">
                                        <div class="form-check">
                                            <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault">
                                        </div>
                                        <div class="card">
                                            <div class="body">
                                                <div class="cart-items">
                                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                                        <img class="cart-img round background-accent-medium" loading="lazy" :src="product.image" alt="">
                                                    </router-link>
                                                    <div class="cart-details">
                                                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
    
                                                        <div class="font-size-13 mt-2">Variation: Black Accent x23</div>
    
                                                        <div class="font-size-16 font-weight-600 text-color-danger mt-2">&#8369;{{ product.price }}</div>
    
                                                    </div>
                                                </div>
                                                <div class="d-flex align-items-center justify-content-between pt-3">
                                                    <div class="quantifier">
                                                        <button type="button" class="button-accent-dark circle p-3" @click="decrement">
                                                            <span class="material-icons-outlined">remove</span>
                                                        </button>
                                                        <div class="background-accent-dark round py-2 px-4 font-size-16">{{ quantity }}</div>
                                                        <button type="button" class="button-accent-dark circle p-3" @click="increment">
                                                            <span class="material-icons-outlined">add</span>
                                                        </button>
                                                    </div>

                                                    <div class="d-flex gap-2">
                                                        <button type="button" class="button-accent-dark circle"><span class="material-icons-outlined">favorite_border</span></button>
                                                        <button type="button" class="button-accent-danger circle"><span class="material-icons-outlined">delete</span></button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-5 col-lg-5">
                    <div class="card position-sticky-top top-1">
                        <div class="body">
                            <div class="font-size-18 font-weight-600">Order Summary</div>

                            <table class="table table-bordered mt-3">
                                <thead>
                                    <tr>
                                        <th class="font-weight-500">Subtotal (3 item(s))</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td class="font-size-18 font-weight-600">&#8369; 3,499</td>
                                    </tr>
                                </tbody>
                            </table>

                            <div class="font-size-16">Shipping, taxes, and discounts will be calculated at checkout.</div>

                            <div class="d-grid gap-2 mt-3">
                                <router-link :to="{ name: 'Shipping' }" class="button-dark md round block">Proceed to checkout</router-link>
                                <router-link :to="{ name: 'Home' }" class="button-outline-dark md round block">Continue shopping</router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .quantifier {
        display: flex;
        align-items: center;
        gap: 0.3rem;
        width: 45%;
    }

    .cart-img {
        width: 100px;
        height: 100px;
        object-fit: cover;

        @media (max-width: 564px) {
            width: 60px;
            height: 60px;
        }
    }

    .cart-items {
        display: flex;
        gap: 2rem;

        .cart-details {
            width: 100%;
        }
    }
    
    .quantity {
        width: 50%;
    }
</style>