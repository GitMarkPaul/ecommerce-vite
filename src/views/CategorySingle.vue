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
    <section>
        <div class="container">
            <div class="bread">
                <ol class="bread-menu">
                    <li class="bread-item">
                        <router-link to="/" class="bread-link">Home</router-link>
                    </li>
                    <li class="bread-item">
                        <router-link to="/categories" class="bread-link">Categories</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">Men's Apparel</div>
                    </li>
                </ol>
            </div>
        </div>
    </section>

    <section class="padding-top-2">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-12">
                    <div class="background-accent-primary round p-3">
                        <div class="font-size-24 font-weight-600 text-center">You might like these</div>
                        <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-2 mt-3">
                            <div class="col" v-for="product in products.slice(0,5)" :key="product.id">
                                <div class="card round hover-scale-1 h-100">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                        <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                                    </router-link>
                                    <div class="body d-grid">
                                        <div class="badge round background-accent-tertiary sm">{{ product.category }}</div>
                                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 mt-2 text-truncate-2">{{ product.title }}</router-link>
                                        <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>
                                        <a href="#" class="button-accent-primary round block"><span class="material-icons-outlined">add_shopping_cart</span> Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-4">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-12">
                    <div class="background-accent-danger round p-3">
                        <div class="font-size-24 font-weight-600 text-center">Top Sellers in Men</div>
                        <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-2 mt-3">
                            <div class="col" v-for="product in products.slice(10,15)" :key="product.id">
                                <div class="card round hover-scale-1 h-100">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                        <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                                    </router-link>
                                    <div class="body d-grid">
                                        <div class="badge round background-accent-tertiary sm">{{ product.category }}</div>
                                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 mt-2 text-truncate-2">{{ product.title }}</router-link>
                                        <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>
                                        <a href="#" class="button-accent-primary round block"><span class="material-icons-outlined">add_shopping_cart</span> Add to Cart</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-4 padding-bottom-3">
        <div class="container">
            <div class="row g-4">
                <div class="col-xl-12">
                    <div class="background-accent-medium round p-3">
                        <div class="font-size-24 font-weight-600 text-center">New Arrivals</div>
                        <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-2 mt-3">
                            <div class="col" v-for="product in products.slice(5,10)" :key="product.id">
                                <div class="card round hover-scale-1 h-100">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                        <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                                    </router-link>
                                    <div class="body d-grid">
                                        <div class="badge round background-accent-tertiary sm">{{ product.category }}</div>
                                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 mt-2 text-truncate-2">{{ product.title }}</router-link>
                                        <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>
                                        <a href="#" class="button-accent-primary round block"><span class="material-icons-outlined">add_shopping_cart</span> Add to Cart</a>
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