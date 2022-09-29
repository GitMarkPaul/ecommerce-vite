<script setup>
    import { onMounted, ref } from 'vue';
    import StarRating from '../components/StarRating.vue';
    
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
    <section class="padding-bottom-3">
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
                        <div class="bread-link" aria-current="page">History</div>
                    </li>
                </ol>
            </div>
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-26 font-weight-600">Recommended For You</div>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-2">
                <div class="col" v-for="product in products" :key="product.id">
                    <div class="card round hover-scale-1 h-100">
                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                            <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                        </router-link>
                        <a href="#" class="button-light circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>
                        <div class="body">
                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
                            <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>
                            <router-link :to="{ name: 'CategorySingle' }" class="button-primary block round">Find more similar</router-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>