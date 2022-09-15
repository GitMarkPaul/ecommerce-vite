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
    <div class="col" v-for="product in products" :key="product.id">
        <div class="card round hover-scale-1">
            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                <img class="card-product-img" :src="product.image" alt="" />
            </router-link>
            <a href="#" class="button-outline-danger circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>
            <div class="body">
                <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500">{{ product.title }}</router-link>
                <div class="font-size-18 font-weight-600 text-color-danger mt-2 mb-4">&#8369;{{ product.price }}</div>
                <div class="star-rating">
                    <span class="material-icons-outlined">star</span>
                    <span class="material-icons-outlined">star</span>
                    <span class="material-icons-outlined">star</span>
                    <span class="material-icons-outlined">star</span>
                    <span class="material-icons-outlined">star_border</span>
                    <div class="font-size-12 font-weight-500">3.5k Reviews</div>
                </div>
            </div>
        </div>
    </div>
</template>