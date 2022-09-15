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
    <section class="padding-top-2">
        <div class="container-fluid">
            <div class="background-accent-warning p-xl-5 p-4 round">
                <div class="row align-items-center justify-content-center g-5">
                    <div class="col-xl-7 col-lg-6 col-md-6">
                        <h1 class="font-weight-800 font-size-44">The Masterpieces of Pacificas Wood Furniture</h1>
                        <p class="font-size-20">Enhance your home and property with beautifully rendered furniture pieces that can last a lifetime.</p>
                        <div class="d-flex gap-3 pt-4">
                            <a href="#contact" class="button-warning round lg">Buy Now <span class="material-icons-outlined">east</span></a>
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
        </div>
    </section>

    <section class="padding-top-4">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Categories</div>
                <a href="#" class="button-outline-primary round">See more <span class="material-icons-outlined">east</span></a>
            </div>

            <div class="row row-cols-xl-6 row-cols-lg-5 row-cols-md-4 row-cols-sm-4 row-cols-2 g-3 mt-2">
                <div class="col">
                    <a href="">
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
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mobile-gadgets.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Mobile & Gadgets</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/mobile-accessories.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Mobiles Accessories</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/home-entertainment.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Home Entertainment</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/babies-kids.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Babies & Kids</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/home-living.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Home & Living</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/groceries.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Groceries</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-bag.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women's Bags</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-accessories.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women Accessories</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/womens-apparel.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Women's Apparel</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/health-personal-care.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Health & Personal Care</div>
                            </div>
                        </div>
                    </a>
                </div>
                <div class="col">
                    <a href="">
                        <div class="card hover-scale-1 round text-center h-100">
                            <div class="body">
                                <div class="initial-circle-lg">
                                    <img class="hover-img-scale-1" src="../assets/placeholders/categories/makeup-fragrances.png" width="100%" alt="" />
                                </div>
                                <div class="font-size-16 font-weight-600 mt-2">Makeup & Fragrances</div>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-4">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Best Selling Products</div>
                <router-link to="/" class="button-outline-primary round">See more <span class="material-icons-outlined">east</span></router-link>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-1 g-3 mt-2">
                <div class="col" v-for="product in products.slice(0,5)" :key="product.id">
                    <div class="card round hover-scale-1">
                        <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }">
                            <img class="card-product-img" :src="product.image" alt="" />
                        </router-link>
                        <a href="#" class="button-outline-danger circle position-absolute top-0 right-0 my-2 mx-2"><span class="material-icons-outlined">favorite_border</span></a>
                        <div class="body d-grid">
                            <div class="badge round background-accent-tertiary">{{ product.category }}</div>
                            <router-link :to="{ name: 'ProductSingle', params: { category: product.category, id: product.id } }" class="font-size-16 font-weight-500 mt-2">{{ product.title }}</router-link>
                            <div class="font-size-18 font-weight-600 text-color-danger mt-2 mb-4">&#8369;{{ product.price }}</div>
                            <a href="#" class="button-outline-primary round block"><span class="material-icons-outlined">add_shopping_cart</span> Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="padding-top-4 padding-bottom-5">
        <div class="container-fluid">
            <div class="d-flex align-items-center justify-content-between">
                <div class="font-size-24 font-weight-600">Products for you</div>
                <router-link to="/products" class="button-outline-primary round">See more <span class="material-icons-outlined">east</span></router-link>
            </div>
            <div class="row row-cols-xl-5 row-cols-lg-4 row-cols-md-3 row-cols-sm-3 row-cols-1 g-3 mt-2">
                <div class="col" v-for="product in products.slice(5,15)" :key="product.id">
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
            </div>
        </div>
    </section>
</template>