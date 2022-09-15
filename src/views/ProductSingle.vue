<script>
    import axios from 'axios'
    import StarRating from '../components/StarRating.vue'
    
    export default {
        data() {
            return {
                productSingle: [],
                products: [],
                quantity: 1,
                min: 1,
            };
        },

        created() {
            this.getProductSingleById();
        },

        methods: {
            getProductSingleById() {
                let uri = `https://fakestoreapi.com/products/${this.$route.params.id}`;
                let _this = this;
                axios.get(uri).then((response) => {
                    _this.productSingle = response.data;
                });
            },

            increment () {
                this.quantity += 1;
            },

            decrement () {
                this.quantity = this.quantity === 1 ? 1 : this.quantity - 1;
            },

            formatPrice(value) {
                let val = (value/1).toFixed(2).replace('.', ',')
                return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
            }
        },

        mounted() {
            let uri = `https://fakestoreapi.com/products/category/${this.$route.params.category}`;
            let _this = this;
            axios.get(uri).then((response) => {
                _this.products = response.data;
            });
        },

        components: { StarRating }
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
                        <router-link to="/products" class="bread-link">{{ productSingle.category }}</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">{{ productSingle.title }}</div>
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
                                            <img class="product-image round" :src="productSingle.image" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-8">
                                    <div class="badge round background-accent-tertiary">{{ productSingle.category }}</div>
                                    <div class="font-size-32 font-weight-600">{{ productSingle.title }}</div>
                                    <div class="star-rating star-rating-md pt-3">
                                        <StarRating :ratings="productSingle.rating.rate" size="font-size-24"></StarRating>
                                        <div class="font-size-16 font-weight-500">{{ productSingle.rating.count }} Reviews</div>
                                    </div>
                                    <div class="font-size-26 font-weight-600 text-color-danger mt-3">&#8369;{{ productSingle.price * quantity  }}</div>

                                    <div class="quantifier mt-4">
                                        <button type="button" class="button-accent-dark md circle" @click="decrement">
                                            <span class="material-icons-outlined">remove</span>
                                        </button>
                                        <input type="number" :min="min" class="form-control font-size-18 text-center round" v-model="quantity">
                                        <button type="button" class="button-accent-dark md circle" @click="increment">
                                            <span class="material-icons-outlined">add</span>
                                        </button>
                                    </div>

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
                            <div class="mt-3">{{ productSingle.description }}</div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-12">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-24 font-weight-600">Product Reviews</div>
                            <div class="background-accent-warning p-4 round mt-3">
                                <div class="font-size-24 font-weight-500">{{ productSingle.rating.rate }} out of 5</div>
                                <div class="star-rating star-rating-md py-3">
                                    <StarRating :ratings="productSingle.rating.rate"></StarRating>
                                </div>
                                <div class="font-size-16">Based on {{ productSingle.rating.count }} reviews</div>
                            </div>
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
                    <div class="card round hover-scale-1 h-100">
                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                            <img class="card-product-img" :src="product.image" alt="" />
                        </router-link>
                        
                        <a href="#" class="button-outline-danger circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>

                        <div class="body d-grid">

                            <div class="badge round background-accent-tertiary">{{ product.category }}</div>

                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 mt-2">{{ product.title }}</router-link>

                            <div class="font-size-18 font-weight-600 text-color-danger mt-2 mb-4">&#8369;{{ product.price }}</div>

                            <div class="star-rating">
                                <StarRating :ratings="product.rating.rate"></StarRating>
                                <div class="font-size-12 font-weight-500">{{ product.rating.count }} Reviews</div>
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
        width: 25%;
    }

    .star-rating-md {
        span {
            font-size: 24px;
        }
    }
    
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