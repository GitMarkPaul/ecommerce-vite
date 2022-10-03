<script setup>
    import { onMounted, ref } from 'vue';
    import StarRating from '../components/StarRating.vue';
    // Import Swiper Vue.js components
    import { Swiper, SwiperSlide } from 'swiper/vue';
    // Import Swiper styles
    import 'swiper/css';
    
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
    <section class="padding-top-2">
        <div class="container-fluid">
            <swiper
                :slides-per-view="1"
                :space-between="50">
                <swiper-slide>
                    <div class="background-accent-warning p-xl-5 p-4 round">
                        <div class="row align-items-center justify-content-center g-5">
                            <div class="col-xl-7 col-lg-6 col-md-6">
                                <h1 class="font-weight-800 font-size-44">The Masterpieces of Pacificas Wood Furniture</h1>
                                <p class="font-size-20">Enhance your home and property with beautifully rendered furniture pieces that can last a lifetime.</p>
                                <div class="d-flex gap-3 pt-4">
                                    <a href="#contact" class="button-dark round lg">Buy Now <span class="material-icons-outlined">east</span></a>
                                    <div class="button-light round lg">&#8369;2,999 only</div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-6">
                                <div class="d-flex justify-content-center">
                                    <img class="cta-product" src="../assets/placeholders/banners/cta-product-1.jpg" width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>

                <swiper-slide>
                    <div class="background-accent-warning p-xl-5 p-4 round">
                        <div class="row align-items-center justify-content-center g-5">
                            <div class="col-xl-7 col-lg-6 col-md-6">
                                <h1 class="font-weight-800 font-size-44">The Masterpieces of Pacificas Wood Furniture</h1>
                                <p class="font-size-20">Enhance your home and property with beautifully rendered furniture pieces that can last a lifetime.</p>
                                <div class="d-flex gap-3 pt-4">
                                    <a href="#contact" class="button-dark round lg">Buy Now <span class="material-icons-outlined">east</span></a>
                                    <div class="button-light round lg">&#8369;2,999 only</div>
                                </div>
                            </div>
                            <div class="col-xl-5 col-lg-6 col-md-6">
                                <div class="d-flex justify-content-center">
                                    <img class="cta-product" src="../assets/placeholders/banners/cta-product-1.jpg" width="100%" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </section>

    <section class="padding-top-2">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Shop by Store Category</div>
                <router-link to="/categories" class="button-accent-primary round">See more <span class="material-icons-outlined">east</span></router-link>
            </div>

            <div class="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-4 row-cols-2 g-3 mt-2">
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mens-apparel.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Men's Apparell</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mobile-gadgets.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Mobile & Gadgets</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mobile-accessories.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Mobiles Accessories</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/home-entertainment.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Home Entertainment</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/babies-kids.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Babies & Kids</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/home-living.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Home & Living</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/groceries.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Groceries</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-bag.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women's Bags</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-accessories.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women Accessories</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-apparel.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women's Apparel</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/health-personal-care.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Health & Personal Care</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="/ecommerce-vite/category-single">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/makeup-fragrances.png" width="100%" height="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Makeup & Fragrances</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-2">
        <div class="container-fluid">
            <div class="row g-4">
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-18 font-weight-600 mb-1 d-flex align-items-center gap-2"><span class="material-icons-outlined">description</span> Dropshipping</div>
                            <div class="row row-cols-xl-3 g-2">
                                <div class="col" v-for="product in products.slice(12,15)" :key="product.id">
                                    <div class="background-accent-medium py-3 px-3 mt-3">
                                        <img class="thumbnail-sm" :src="product.image" alt="">
                                        <div class="text-center mt-2">
                                            <div class="font-size-13 font-weight-600">{{ product.price }}</div>
                                            <div class="font-size-13 font-weight-500">1 piece</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-18 font-weight-600 mb-1 d-flex align-items-center gap-2"><span class="material-icons-outlined">public</span> Regional specialties</div>
                            <div class="row row-cols-xl-3 g-2">
                                <div class="col" v-for="product in products.slice(15,18)" :key="product.id">
                                    <div class="background-accent-medium py-3 px-3 mt-3">
                                        <img class="thumbnail-sm" :src="product.image" alt="">
                                        <div class="text-center mt-2">
                                            <div class="font-size-13 font-weight-600">{{ product.price }}</div>
                                            <div class="font-size-13 font-weight-500">1 piece</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-18 font-weight-600 mb-1 d-flex align-items-center gap-2"><span class="material-icons-outlined">trending_up</span> Top ranking</div>
                            <div class="row row-cols-xl-3 g-2">
                                <div class="col" v-for="product in products.slice(3,6)" :key="product.id">
                                    <div class="background-accent-medium py-3 px-3 mt-3">
                                        <img class="thumbnail-sm" :src="product.image" alt="">
                                        <div class="text-center mt-2">
                                            <div class="font-size-13 font-weight-600">{{ product.price }}</div>
                                            <div class="font-size-13 font-weight-500">1 piece</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="row g-4 mt-1">
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-24 font-weight-600 mb-1">Customizable products</div>
                            <p class="font-size-16">Provided by 60,000+ experienced manufacturers with design and production capabilities and on-time delivery.</p>

                            <div class="row g-2">
                                <div class="col-xl-6 col-sm-6">
                                    <div class="background-accent-medium py-3 px-3">
                                        <div class="text-center font-size-16 font-weight-600">Source from factories</div>
                                        <div class="row row-cols-xl-3 g-2 mt-3">
                                            <div class="col" v-for="product in products.slice(0,3)" :key="product.id">
                                                <img class="thumbnail-sm" :src="product.image" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6">
                                    <div class="background-accent-medium py-3 px-3">
                                        <div class="text-center font-size-16 font-weight-600">Top-ranking suppliers</div>
                                        <div class="row row-cols-xl-3 g-2 mt-3">
                                            <div class="col" v-for="product in products.slice(3,6)" :key="product.id">
                                                <img class="thumbnail-sm" :src="product.image" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-6 col-lg-6">
                    <div class="card">
                        <div class="body">
                            <div class="font-size-24 font-weight-600 mb-1">Ready-to-ship products</div>
                            <p class="font-size-16">Source from 15 million products that are ready to ship, and leave the facility within 15 days.</p>

                            <div class="row g-2">
                                <div class="col-xl-6 col-sm-6">
                                    <div class="background-accent-medium py-3 px-3">
                                        <div class="text-center font-size-16 font-weight-600">Fast dispatch</div>
                                        <div class="row row-cols-xl-3 g-2 mt-3">
                                            <div class="col" v-for="product in products.slice(6,9)" :key="product.id">
                                                <img class="thumbnail-sm" :src="product.image" alt="">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-xl-6 col-sm-6">
                                    <div class="background-accent-medium py-3 px-3">
                                        <div class="text-center font-size-16 font-weight-600">Weekly deals</div>
                                        <div class="row row-cols-xl-3 g-2 mt-3">
                                            <div class="col" v-for="product in products.slice(9,12)" :key="product.id">
                                                <img class="thumbnail-sm" :src="product.image" alt="">
                                            </div>
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

    <section class="padding-top-3">
        <div class="container-fluid">
            <div class="row g-4">
                <div class="col-xl-12">
                    <div class="background-accent-danger round p-3">
                        <div class="font-size-24 font-weight-600 d-flex align-items-center"><span class="material-icons-outlined text-color-danger font-size-40">bolt</span> Flash Deals</div>
                        <div class="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-2 mt-2">
                            <div class="col" v-for="product in products.slice(10,16)" :key="product.id">
                                <div class="card round hover-scale-1 h-100">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                        <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                                    </router-link>
                                    <div class="body">
                                        <div class="font-size-16 font-weight-600 text-color-danger text-center mb-2">&#8369;{{ product.price }}</div>
                                        <a href="#" class="button-warning round block">Buy Now</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-3">
        <div class="container-fluid">
            <div class="row g-4">
                <div class="col-xl-12">
                    <div class="background-accent-primary round p-3">
                        <div class="font-size-24 font-weight-600 d-flex align-items-center">New Arrivals</div>
                        <div class="row row-cols-xl-5 row-cols-lg-5 row-cols-md-4 row-cols-sm-3 row-cols-2 g-2 mt-2">
                            <div class="col" v-for="product in products.slice(5,10)" :key="product.id">
                                <div class="card round hover-scale-1 h-100">
                                    <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                                        <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                                    </router-link>
                                    <div class="body d-grid">
                                        <div class="badge round background-accent-tertiary">{{ product.category }}</div>
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

    <section class="padding-top-3">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Best Selling Products</div>
                <router-link to="/" class="button-accent-primary round">See more <span class="material-icons-outlined">east</span></router-link>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-2">
                <div class="col" v-for="product in products.slice(0,5)" :key="product.id">
                    <div class="card round hover-scale-1 h-100">
                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                            <img class="card-product-img" loading="lazy" :src="product.image" alt="" />
                        </router-link>
                        <a href="#" class="button-light circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>
                        <div class="body d-grid">
                            <div class="badge round background-accent-tertiary">{{ product.category }}</div>
                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-14 font-weight-500 mt-2 text-truncate-2">{{ product.title }}</router-link>
                            <div class="font-size-16 font-weight-600 text-color-danger mt-2 mb-2">&#8369;{{ product.price }}</div>
                            <a href="#" class="button-accent-primary round block"><span class="material-icons-outlined">add_shopping_cart</span> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-3 padding-bottom-3">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Products for you</div>
                <router-link to="/products" class="button-accent-primary round">See more <span class="material-icons-outlined">east</span></router-link>
            </div>
            <div class="row row-cols-xl-6 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-2 g-3 mt-2">
                <div class="col" v-for="product in products.slice(2,20)" :key="product.id">
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
            </div>
        </div>
    </section>
</template>