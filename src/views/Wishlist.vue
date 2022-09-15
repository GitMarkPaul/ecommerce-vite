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
    <section class="padding-top-1 padding-bottom-5">
        <div class="container-fluid">
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
            </div>

            <div class="row g-3 pt-3">
                <div class="col-xl-6" v-for="product in products.slice(0,10)" :key="product.id">
                    <div class="card round">
                        <div class="body">
                            <div class="cart-items">
                                <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                    <img class="cart-img round background-accent-medium" loading="lazy" :src="product.image" alt="">
                                </router-link>
                                <div class="cart-details">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500">{{ product.title }}</router-link>
                                    <div class="font-size-16 font-weight-600 text-color-danger mt-2">&#8369;{{ product.price }}</div>
                                    <div class="d-flex align-items-center justify-content-between py-3">
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
    }

    .cart-items {
        display: grid;
        grid-gap: 2rem;
        grid-template-columns: auto 1fr auto;

        .cart-details {
            width: 100%;
        }
    }
</style>