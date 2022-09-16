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

<template>
    <section class="pt-2 padding-bottom-3">
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link to="/" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link to="/products" class="bread-link">Products</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Wishlists</div>
                    </li>
                </ol>
                <h4>My Wishlist</h4>
            </div>

            <div class="row g-3 pt-2">
                <div class="col-xl-6 col-lg-6" v-for="product in products.slice(0,10)" :key="product.id">
                    <div class="card round h-100">
                        <div class="body">
                            <div class="cart-items">
                                <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                    <img class="cart-img round background-accent-medium" loading="lazy" :src="product.image" alt="">
                                </router-link>
                                <div class="cart-details">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
                                    <div class="font-size-16 font-weight-600 text-color-danger mt-2">&#8369;{{ product.price }}</div>
                                    <div class="d-flex align-items-center justify-content-between pt-3">
                                        <div class="d-flex gap-2">
                                            <button type="button" class="button-accent-dark circle"><span class="material-icons-outlined">add_shopping_cart</span></button>
                                            <button type="button" class="button-accent-danger circle" data-bs-toggle="modal" data-bs-target="#deleteModal"><span class="material-icons-outlined">delete</span></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    .cart-img {
        width: 120px;
        height: 120px;
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
</style>