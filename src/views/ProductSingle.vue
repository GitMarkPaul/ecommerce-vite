<script>
    import axios from 'axios'
    
    export default {
        data() {
            return {
                product: [],
                products: [],
            }
        },

        created() {
            this.getProductSingleById();
        },

        methods: {
            getProductSingleById() {
                let uri = `https://fakestoreapi.com/products/${this.$route.params.id}`;
                let _this = this;
    
                axios.get(uri).then((response) => {
                    _this.product = response.data;
                });
            }
        },

        mounted() {
            let uri = `https://fakestoreapi.com/products/category/${this.$route.params.category}`;
            let _this = this;

            axios.get(uri).then((response) => {
                _this.products = response.data;
            });
        }
    }
</script>

<template>
    <section class="padding-top-1">
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
                        <router-link to="/products" class="bread-link">{{ product.category }}</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">{{ product.title }}</div>
                    </li>
                </ol>
            </div>
            <div class="row g-5 pt-3">
                <div class="col-xl-12">
                    <div class="card background-accent-secondary">
                        <div class="body">
                            <div class="row g-4">
                                <div class="col-xl-4">
                                    <div class="thumbnail">
                                        <div class="item w-100 mb-3">
                                            <img class="product-image round" :src="product.image" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-8">
                                    <div class="badge round background-accent-tertiary">{{ product.category }}</div>
                                    <div class="font-size-32 font-weight-600">{{ product.title }}</div>
                                    <div class="font-size-26 font-weight-600 text-color-danger mt-3">&#8369;{{ product.price }}</div>

                                    <div class="d-flex gap-3 mt-5">
                                        <button type="button" class="button-warning round md">Buy Now</button>
                                        <button type="button" class="button-primary round md">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-24 font-weight-600">Product Description</div>
                            <div class="mt-3">{{ product.description }}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-4 padding-bottom-5">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-26 font-weight-600">Product from the same category</div>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-1 g-3 mt-2">
                <div class="col" v-for="product in products" :key="product.id">
                    <div class="card round hover-scale-1">
                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                            <img class="card-product-img" :src="product.image" alt="" />
                        </router-link>
                        <a href="#" class="button-outline-danger circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>
                        <div class="body d-grid">
                            <div class="badge round background-accent-tertiary">{{ product.category }}</div>
                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 mt-2">{{ product.title }}</router-link>
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
            </div>
        </div>
    </section>
</template>

<style lang="scss">
    
    .thumbnail {
        display: flex;
        overflow: auto;
        scroll-snap-type: mandatory;
        gap: 12px;
        scroll-padding: 24px;
        
        .item {
            flex: 0 0 100%;
            scroll-snap-align: start;

            .product-image {
                width: 100%;
                height: 350px;
                object-fit: cover;
            }
        }
    }
</style>