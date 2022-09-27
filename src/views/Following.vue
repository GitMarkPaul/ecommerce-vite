<script setup>
    import { onMounted, ref } from 'vue';
    
    const products = ref([]);
    
    onMounted(async () => {
        try {
            const response = await fetch('https://api.escuelajs.co/api/v1/products');
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
                        <router-link :to="{ name: 'Home' }" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link :to="{ name: 'Account' }" class="bread-link">Account</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Following</div>
                    </li>
                </ol>
                <h4>My Followed Stores</h4>
            </div>

            <div class="row g-3 pt-2">
                <div class="col-xl-6 col-lg-6" v-for="product in products.slice(0,10)" :key="product.id">
                    <div class="card round h-100">
                        <div class="body">
                            <div class="cart-items">
                                <router-link :to="{ name: 'Store' }">
                                    <img class="cart-img round background-accent-medium" loading="lazy" :src="product.images[0]" alt="">
                                </router-link>
                                <div class="cart-details">
                                    <router-link :to="{ name: 'Store' }" class="font-size-16 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
                                    <div class="d-flex align-items-center justify-content-start gap-1 pt-3">
                                        <button type="button" class="button-outline-primary round"><span class="material-icons-outlined">contact_support</span> Inquire</button>
                                        <button type="button" class="button-accent-primary round"><span class="material-icons-outlined">person_remove</span> Unfollow</button>
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

<style lang="scss" scoped>
    .cart-img {
        width: 60px;
        height: 60px;
        object-fit: cover;
    }

    .cart-items {
        display: flex;
        gap: 2rem;

        .cart-details {
            width: 100%;
        }
    }
</style>