<script setup>
    import { onMounted, ref } from 'vue';
    import StarRating from './StarRating.vue';
    
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
    <div class="col" v-for="product in products" :key="product.id">
        <div class="card round hover-scale-1 h-100">
            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
            </router-link>
            <a href="#" class="button-light circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>
            <div class="body">
                <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 text-truncate-2">{{ product.title }}</router-link>
                <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>
                <div class="star-rating">
                    <star-rating :ratings="product.rating.rate"></star-rating>
                    <div class="font-size-12 font-weight-500">{{ product.rating.count }}</div>
                </div>
            </div>
        </div>
    </div>
</template>