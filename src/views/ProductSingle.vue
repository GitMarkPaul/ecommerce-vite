<script>
    import axios from 'axios'
    import StarRating from '../components/StarRating.vue'
    
    export default {
        data() {
            return {
                productSingle: [],
                products: [],
                reviews: [],
                quantity: 1,
                min: 1,
                variationPrice: null,
                variationStock: null,
            };
        },

        created() {
            this.getProductSingleById();
            this.getAllProductReviews();
        },

        methods: {
            getProductSingleById() {
                let uri = `https://fakestoreapi.com/products/${this.$route.params.id}`;
                let _this = this;
                axios.get(uri).then((response) => {
                    _this.productSingle = response.data;
                });
            },

            getAllProductReviews() {
                let uri = `https://jsonplaceholder.typicode.com/comments`;
                let _this = this;
                axios.get(uri).then((response) => {
                    _this.reviews = response.data;
                });
            },

            increment () {
                this.quantity += 1;
            },

            decrement () {
                this.quantity = this.quantity === 1 ? 1 : this.quantity - 1;
            },

            variationAppendContent(e) {
                this.variationPrice = e.target.getAttribute('data-variation-price');
                this.variationStock = e.target.getAttribute('data-variation-stock');
            },

            formatPrice(num) {
                return new Intl.NumberFormat('default').format(num);
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
    <section>
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
                        <router-link to="/category-single" class="bread-link">{{ productSingle.category }}</router-link>
                    </li>
                    <li class="bread-item">
                        <div class="bread-link" aria-current="page">{{ productSingle.title }}</div>
                    </li>
                </ol>
            </div>
            <div class="row g-5 pt-2">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="body">
                            <div class="row g-4">
                                <div class="col-xl-4 col-lg-4 col-md-4">
                                    <div class="thumbnail">
                                        <div class="item w-100 mb-3">
                                            <img class="product-image round" :src="productSingle.image" alt="">
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-5 col-lg-8 col-md-8">
                                    <div class="badge round background-accent-tertiary">{{ productSingle.category }}</div>
                                    <div class="font-size-24 font-weight-600">{{ productSingle.title }}</div>
                                    <div class="d-flex align-items-center justify-content-between gap-2 mt-3">
                                        <div class="star-rating star-rating-md">
                                            <div class="font-size-16 font-weight-500">{{ productSingle.rating.rate }}</div>
                                            <StarRating :ratings="productSingle.rating.rate" size="font-size-24"></StarRating>
                                        </div>
                                        <div class="font-size-16 font-weight-500">{{ productSingle.rating.count }} Reviews</div>
                                    </div>
                                    <div class="font-size-26 font-weight-600 text-color-danger mt-3" v-if="!variationPrice">&#8369;{{ formatPrice(productSingle.price * quantity) }}</div>
                                    <div class="font-size-26 font-weight-600 text-color-danger mt-3" v-else>&#8369;{{ formatPrice(variationPrice * quantity) }}</div>

                                    <div class="d-grid align-items-center gap-2 mt-4">
                                        <div class="font-size-16">Variation</div>

                                        <div class="variation-menu">
                                            <button @click="variationAppendContent" data-variation-price="399" data-variation-color="Muddy Red" data-variation-stock="243" class="variation-item" type="button" role="tab" aria-selected="true">Muddy Red</button>
                                            <button @click="variationAppendContent" data-variation-price="499" data-variation-color="Khaki" data-variation-stock="745" class="variation-item" type="button" role="tab" aria-selected="true">Khaki</button>
                                            <button @click="variationAppendContent" data-variation-price="299" data-variation-color="Muddy Brown" data-variation-stock="0" class="variation-item" type="button" role="tab" aria-selected="true">Muddy Brown</button>
                                            <button @click="variationAppendContent" data-variation-price="199" data-variation-color="Gray" data-variation-stock="0" class="variation-item" type="button" role="tab" aria-selected="true" disabled="true">Gray</button>
                                        </div>
                                    </div>
                                    
                                    <div class="d-grid align-items-center gap-2 mt-4">
                                        <div class="font-size-16">Quantity</div>
                                        <div class="font-size-14 text-color-danger" v-if="variationStock == 0">out of stock</div>
                                        <div class="font-size-14" v-else>{{ variationStock }} pieces available</div>
                                        <div class="quantifier">
                                            <button type="button" class="button-accent-dark xs circle" @click="decrement">
                                                <span class="material-icons-outlined">remove</span>
                                            </button>
                                            <div class="background-accent-dark round py-1 px-5 font-size-18">{{ quantity }}</div>
                                            <button type="button" class="button-accent-dark xs circle" @click="increment">
                                                <span class="material-icons-outlined">add</span>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="d-flex gap-3 mt-4">
                                        <button type="button" class="button-accent-primary round block md">Add to Cart</button>
                                        <button type="button" class="button-warning round block md">Buy Now</button>
                                    </div>

                                    <div class="d-flex justify-content-between gap-3 mt-2">
                                        <button type="button" class="button-link-dark round"><span class="material-icons-outlined">favorite_border</span> Add to wishlist</button>
                                        <button type="button" class="button-link-dark round"><span class="material-icons-outlined">share</span> Share</button>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-12 col-md-12">
                                    <div class="round background-accent-medium py-3 px-3 mb-3">
                                        <div class="row row-cols-xl-1 align-items-center g-3">
                                            <div class="col d-flex align-items-center gap-2">
                                                <img src="../assets/users/avatar.jpg" class="avatar-circle-md" alt="">
                                                <div>
                                                    <div class="font-size-14 font-weight-600">SM Mega Mall</div>
                                                    <div class="font-size-13">Joined 3 years ago</div>
                                                </div>
                                            </div>
                                            <div class="col d-flex gap-2">
                                                <router-link :to="{ name: 'Chat' }" class="button-accent-primary round block"><span class="material-icons-outlined">chat</span> Chat</router-link>
                                                <router-link :to="{ name: 'Store' }" class="button-accent-primary round block"><span class="material-icons-outlined">storefront</span>Visit</router-link>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row row-cols-xl-1 row-cols-lg-3 row-cols-md-2 row-cols-sm-2 row-cols-1 g-4">
                                        <div class="col d-flex gap-3">
                                            <div class="initial-circle-sm background-accent-success p-2">
                                                <span class="material-icons-outlined">payments</span>
                                            </div>
                                            <div>
                                                <div class="font-size-14 font-weight-600">Cash on Delivery Available</div>
                                                <div class="font-size-13">We dont get paid 'till we have delivered</div>
                                            </div>
                                        </div>
                                        <div class="col d-flex gap-3">
                                            <div class="initial-circle-sm background-accent-success p-2">
                                                <span class="material-icons-outlined">published_with_changes</span>
                                            </div>
                                            <div>
                                                <div class="font-size-14 font-weight-600">Return & Warranty</div>
                                                <div class="font-size-13">7 Days Return to Seller Warranty if Available</div>
                                            </div>
                                        </div>
                                        <div class="col d-flex gap-3">
                                            <div class="initial-circle-sm background-accent-success p-2">
                                                <span class="material-icons-outlined">local_shipping</span>
                                            </div>
                                            <div>
                                                <div class="font-size-14 font-weight-600">Standard Delivery</div>
                                                <div class="font-size-13">1 - 3 Working Days Php 29.50</div>
                                            </div>
                                        </div>
                                        <div class="col d-flex gap-3">
                                            <div class="initial-circle-sm background-accent-success p-2">
                                                <span class="material-icons-outlined">location_on</span>
                                            </div>
                                            <div>
                                                <div class="font-size-14 font-weight-600">Ships From</div>
                                                <div class="font-size-13">MARINDUQUE-SANTA-CRUZ, MARINDUQUE</div>
                                            </div>
                                        </div>
                                        <div class="col d-flex gap-3">
                                            <div class="initial-circle-sm background-accent-success p-2">
                                                <span class="material-icons-outlined">schedule</span>
                                            </div>
                                            <div>
                                                <div class="font-size-14 font-weight-600">Response Time</div>
                                                <div class="font-size-13">within minutes</div>
                                            </div>
                                        </div>
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

                            <div class="review-wrapper">
                                <div class="review-item" v-for="review in reviews.slice(0, 3)" :key="review.id">
                                    <div class="d-flex align-items-center gap-2">
                                        <img src="../assets/placeholders/student.png" class="avatar-circle-sm" alt="">
                                        <div>
                                            <div class="font-size-13 font-weight-600">{{ review.email }}</div>
                                            <div class="star-rating mt-1">
                                                <StarRating :ratings="productSingle.rating.rate"></StarRating>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="background-accent-medium round p-3 mt-2">
                                        <div class="font-size-13 mb-1">07 July 2021</div>
                                        {{ review.body }}
                                    </div>
                                    <div class="d-flex justify-content-between gap-3 mt-2">
                                        <button type="button" class="button-link-dark round"><span class="material-symbols-rounded">thumb_up</span> 2 found this helpful</button>
                                        <button type="button" class="button-link-dark circle"><span class="material-icons-outlined">more_horiz</span></button>
                                    </div>
                                </div>
                            </div>
                            <div class="mt-2 d-flex justify-content-center">
                                <button type="button" class="button-accent-dark text-center round md"><span class="material-icons-outlined">refresh</span> View more</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-4 padding-bottom-3">
        <div class="container">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-26 font-weight-600">Product from the same category</div>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-2">
                <div class="col" v-for="product in products" :key="product.id">
                    <div class="card round hover-scale-1 h-100">
                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                            <img class="card-product-img" :src="product.image" alt="" />
                        </router-link>
                        
                        <a href="#" class="button-light circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>

                        <div class="body d-grid">

                            <div class="badge round background-accent-tertiary">{{ product.category }}</div>

                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 mt-2 text-truncate-2">{{ product.title }}</router-link>

                            <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>

                            <div class="star-rating">
                                <StarRating :ratings="product.rating.rate"></StarRating>
                                <div class="font-size-12 font-weight-500">{{ product.rating.count }}</div>
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style lang="scss">

    .variation-menu {
        display: flex;
        flex-flow: wrap;
        gap: 0.6rem;

        .variation-item.active {
            background: var(--color-primary);
            color: var(--color-primary-contrast);
            border: 1px solid var(--color-primary);
        }

        .variation-item {
            color: var(--color-dark);
            background: rgba(var(--color-medium-rgb), 0.2);
            border: 1px solid var(--color-medium);
            border-radius: 8px;
            padding: 6px 12px;

            &:active, &:focus {
                background: var(--color-primary);
                color: var(--color-primary-contrast);
                border: 1px solid var(--color-primary);
            }

            &:disabled {
                background: inherit;
                border: 1px solid var(--color-medium);
                color: var(--color-medium);
                cursor: not-allowed;
            }
        }
    }

    .review-wrapper {
        margin-top: 2rem;
        display: grid;
        grid-gap: 1rem;
    }

    .quantifier {
        display: flex;
        align-items: center;
        gap: 0.3rem;
    }

    .star-rating-md {
        span {
            font-size: 20px;
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